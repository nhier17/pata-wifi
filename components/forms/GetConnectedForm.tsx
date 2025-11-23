"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import CustomFormField, {FormFieldType } from "./CustomFormField";
import { userSchema, cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";


type FormValues = z.infer<typeof userSchema>

const DEFAULT_TARIFFS = [
  'Daily WiFi (Kadogo Pass)',
  'Home Internet — Standard',
  'Home Internet — Turbo',
  'Business — Starter',
]

export const GetConnectedForm = ({ trigger, defaultTariffs=[], allTariffs, className }: GetConnectedProps) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            tariffs: [],
        },
    });

    const onSubmit = (data: FormValues) => {
        setLoading(true);
        try {
          
        } catch (error) {
          
        } finally {
          setLoading(false);
        }
    }

    const resetOnOpenChange = (next: boolean) => {
      if (!next) return setOpen(next)
    // When opening, initialize preselected tariffs only; keep others blank
    form.reset({
      name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      tariffs: defaultTariffs,
    })
    setOpen(next)
    }
    return (
        <Dialog open={open} onOpenChange={resetOnOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn('bg-dark-200 text-white border-white/10')}>
        <DialogHeader>
          <DialogTitle className="text-white">Get Connected</DialogTitle>
        </DialogHeader>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <CustomFormField
               control={form.control}
               fieldType={FormFieldType.INPUT}
               name="name"
               label="Name"
               placeholder="Enter your name"
               />
               <CustomFormField
               control={form.control}
               fieldType={FormFieldType.INPUT}
               name="email"
               label="Email"
               placeholder="Enter your email"
               />
               <CustomFormField
               control={form.control}
               fieldType={FormFieldType.INPUT}
               name="phone"
               label="Phone"
               placeholder="Enter your phone number"
               />
               <CustomFormField
               control={form.control}
               fieldType={FormFieldType.INPUT}
               name="street"
               label="Street"
               placeholder="Enter your street address"
               />
               <CustomFormField
               control={form.control}
               fieldType={FormFieldType.INPUT}
               name="city"
               label="City"
               placeholder="Enter your city"
               />
               <CustomFormField
               control={form.control}
               fieldType={FormFieldType.SELECT}
               name="tariffs"
               label="Tariffs"
               placeholder="Select your tariff"
               >
               {DEFAULT_TARIFFS.map((tariff) => (
                   <option key={tariff} value={tariff}>
                   {tariff}
                   </option>
               ))}
               </CustomFormField>
           <div className="pt-2 flex justify-end gap-2">
              <Button type="button" variant="ghost" className="text-white/80 hover:text-white" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
              >
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Submit via WhatsApp'}
              </Button>
            </div>
            </form>
        </Form>
        </DialogContent>
        </Dialog>
    );
};