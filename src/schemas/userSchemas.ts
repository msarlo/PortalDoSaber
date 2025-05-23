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
    .nonempty("Selecione alguma role")
    
    
}).refine(data => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "As senhas não coincidem",
});

// Tipo derivado do schema
export type CadastroFormData = z.infer<typeof cadastroSchema>;

//validar login de usuário
export const loginSchema = z.object({
  email: z.string().email("Forneça um e-mail válido"),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"), // Change from 'password' to 'senha'
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Schema para criação de usuário
export const criarUsuarioSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim(),
  email: z.string()
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  senha: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(100, 'Senha muito longa'),
  role: z.enum(['SAUDE', 'COMUM', 'ADMIN'], {
    errorMap: () => ({ message: 'Role deve ser SAUDE, COMUM ou ADMIN' })
  })
});

// Schema para atualização de usuário (todos campos opcionais exceto ID)
export const atualizarUsuarioSchema = z.object({
  id: z.string().uuid('ID deve ser um UUID válido'),
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim()
    .optional(),
  email: z.string()
    .email('Email inválido')
    .toLowerCase()
    .trim()
    .optional(),
  senha: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(100, 'Senha muito longa')
    .optional(),
  role: z.enum(['SAUDE', 'COMUM', 'ADMIN'])
    .optional()
});

// Schema para busca por ID
export const buscarPorIdSchema = z.object({
  id: z.string().uuid('ID deve ser um UUID válido')
});

// Tipos TypeScript inferidos dos schemas
export type CriarUsuarioInput = z.infer<typeof criarUsuarioSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type AtualizarUsuarioInput = z.infer<typeof atualizarUsuarioSchema>;
export type BuscarPorIdInput = z.infer<typeof buscarPorIdSchema>;