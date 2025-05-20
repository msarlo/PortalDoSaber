import { z } from "zod";

//validar cadastro de usuário
export const cadastroSchema = z.object({
    name: z.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .trim()
    .refine(val => val.length > 0, "Nome não pode ser vazio"),
    
  email: z.string()
    .email("Forneça um e-mail válido")
    .trim(),
    
  password: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
    
  confirmPassword: z.string()
    .min(1, "Por favor, confirme sua senha"),
    
  profession: z.string()
    .nonempty("Selecione alguma profissão")
    
    
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas não coincidem",
});

// Tipo derivado do schema
export type CadastroFormData = z.infer<typeof cadastroSchema>;

//validar login de usuário
export const loginSchema = z.object({
  email: z.string().email("Forneça um e-mail válido"),
  password: z.string().min(1, "A senha é obrigatória")
});

export type LoginFormData = z.infer<typeof loginSchema>;