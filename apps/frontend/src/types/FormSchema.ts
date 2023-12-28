import { z } from "zod";

const LoginSchema = z.object({
  password: z.string().min(6,{message: "la contraseña debe tener minimo 6 caracteres"}),
  email: z.string().email(),
});

const RegisterSchema = LoginSchema.extend({
  c_password: z.string().min(6),
  username: z.string().max(30).toLowerCase(),
  role: z.string(),
});

export type LoginFormType = z.infer<typeof LoginSchema>;
export type RegisterFormType = z.infer<typeof RegisterSchema>

