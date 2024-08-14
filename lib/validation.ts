import { z } from 'zod'

export const userFormValidation = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 character')
    .max(50, 'Name must be at less than 50 character'),

  email: z.string().email('Invalid Email Address'),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number')
})
