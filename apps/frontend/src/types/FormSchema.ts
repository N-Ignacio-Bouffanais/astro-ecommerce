import { z } from "zod";

export const LoginSchema = z.object({
  password: z.string().min(6),
  email: z.string().email(),
});

export const RegisterSchema = LoginSchema.extend({
  username: z.string().max(30).toLowerCase(),
  role: z.string(),
});
