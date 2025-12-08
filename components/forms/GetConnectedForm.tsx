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
import { toast } from "sonner";
import { DEFAULT_TARIFFS } from "@/constants";


type FormValues = z.infer<typeof userSchema>

const WHATSAPP_NUMBER = '254727717901'

export const GetConnectedForm = ({ trigger, defaultTariffs, allTariffs, className }: GetConnectedProps) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            estate: '',
            city: '',
            tariffs: '',
        },
    });

    const onSubmit = (data: FormValues) => {
        setLoading(true);
        try {
          const message = [
        '*New Get Connected request*',
        `Name: ${data.name}`,
        `Email: ${data.email}`, 
        `Phone: ${data.phone}`,
        `Estate: ${data.estate}`,
        `City: ${data.city}`, 
        `Tariff(s): ${data.tariffs}`,
            ].join('\n')
         const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
         window.open(url, '_blank', 'noopener')
         toast.success('Request sent successfully')
         setOpen(false)
        } catch (error) {
          console.error(error)
          toast.error('Failed to send request')
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
      estate: '',
      city: '',
      tariffs: defaultTariffs,
    })
    setOpen(next)
    }
    return (
        <Dialog open={open} onOpenChange={resetOnOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn('bg-dark-200 text-white border border-white/90', className)}>
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
               name="estate"
               label="Estate"
               placeholder="Enter your estate address"
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
               options={DEFAULT_TARIFFS}
               />
  
           <div className="pt-2 flex justify-end gap-2">
              <Button type="button" variant="ghost" className="cancel-btn" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button 
              type="submit" 
              className="btn btn-primary cursor-pointer"
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