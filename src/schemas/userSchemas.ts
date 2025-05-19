import { z } from "zod";

//validar cadastro de usuário
export const cadastroSchema = z.object({
    name: z.string().min(3, {message: 'Nome deve ter pelo menos 3 caracteres'}),
    email: z.string().email({message: 'Forneça um e-mail válido'}),
    profession: z.string().min(2, {message: 'Profissão deve ter pelo menos 2 caracteres'}),
    password: z.string().min(6, {message: 'A senha deve ter pelo menos 6 caracteres'}),
    confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não coincidem',
    }); 

// Tipo derivado do schema
export type CadastroFormData = z.infer<typeof cadastroSchema>;

//validar login de usuário
export const loginSchema = z.object({
    email: z.string().email({message: 'Forneça um e-mail válido'}),
    password: z.string().min(1, {message: 'A senha é obrigatória'}),
});

export type LoginFormData = z.infer<typeof loginSchema>;