"use server";

import z from 'zod';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoiceSchema = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
      const rawFormData = CreateInvoiceSchema.parse(Object.fromEntries(formData.entries()))
  // Test it out:
  console.log(rawFormData);
}