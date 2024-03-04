import { z } from "zod";

export const adminSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-mail inválido" })
    .email("E-mail inválido."),
  password: z
    .string()
    .min(6, { message: "Senha precisa ter pelo menos 6 caracteres" }),
});
