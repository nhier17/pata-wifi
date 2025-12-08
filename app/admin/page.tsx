"use client";

import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/button";
import CustomFormField, { FormFieldType } from "@/components/forms/CustomFormField";

export default function StoryAdminPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [editing, setEditing] = useState(null);
  const [keyValid, setKeyValid] = useState(false);

  // simple password via URL
  useEffect(() => {
    const urlKey = new URLSearchParams(window.location.search).get("key");
    if (urlKey === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      setKeyValid(true);
    }
  }, []);

  useEffect(() => {
    fetch("/api/stories/get")
      .then((r) => r.json())
      .then((data: Story[]) => setStories(data));
  }, []);

  const saveStories = async () => {
    await fetch("/api/stories/save", {
      method: "POST",
      body: JSON.stringify(stories),
    });
    alert("Saved!");
  };

  const addNew = () => {
    setStories((prev) => [
      ...prev,
      {
        id: uuid(),
        title: "",
        teaser: "",
        full: "",
        img: "",
        region: "",
        category: "",
        date: "",
      },
    ]);
  };

  const updateField = (id: string, field: keyof Story, value: string) => {
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const remove = (id: string) => {
    if (confirm("Delete this story?")) {
      setStories((prev) => prev.filter((s) => s.id !== id));
    }
  };

  if (!keyValid)
    return (
      <div className="p-10 text-center text-red-500">
        Invalid Key — Unauthorized
      </div>
    );

  return (
    <div className="p-10 max-w-4xl mx-auto text-white mt-8">
      <h1 className="text-3xl mb-6 font-bold">Pata WiFi — Story Manager</h1>

      <Button className="mb-5 bg-cyan-500" onClick={addNew}>
        + Add New Story
      </Button>

      <div className="space-y-10">
        {stories.map((story) => (
          <div
            key={story.id}
            className="border border-white/10 p-6 rounded-xl bg-black/40"
          >
            <div className="grid gap-3">
              <CustomFormField
              fieldType={FormFieldType.INPUT}
                name={story.title}
                label="Story Title"
                placeholder="Story Title"
                onChange={(e) =>
                  updateField(story.id, "title", e.target.value)
                }
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name={story.teaser}
                label="Short Teaser"
                placeholder="Short teaser"
                onChange={(e) =>
                  updateField(story.id, "teaser", e.target.value)
                }
              />

              <CustomFormField
               fieldType={FormFieldType.TEXTAREA}
                name={story.full}
                label="Full Story Text"
                placeholder="Full story text"
                onChange={(e) =>
                  updateField(story.id, "full", e.target.value)
                }
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name={story.img}
                label="Image URL"
                placeholder="Image URL"
                onChange={(e) =>
                  updateField(story.id, "img", e.target.value)
                }
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name={story.region}
                label="Region"
                placeholder="Region (e.g. Kasarani)"
                onChange={(e) =>
                  updateField(story.id, "region", e.target.value)
                }
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name={story.category}
                placeholder="Category (SME, Home, Community)"
                label="Category"
                onChange={(e) =>
                  updateField(story.id, "category", e.target.value)
                }
              />

              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name={story.date}
                label="Date"
                placeholder="Date (e.g. Apr 2025)"
                onChange={(e) =>
                  updateField(story.id, "date", e.target.value)
                }
              />

              <div className="flex gap-3">
                <Button
                  className="bg-green-500"
                  onClick={saveStories}
                >
                  Save All
                </Button>

                <Button
                  className="bg-red-500"
                  onClick={() => remove(story.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
