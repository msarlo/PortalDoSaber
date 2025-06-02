import { z } from "zod";

// ===========================================
// SCHEMAS PARA FRONTEND (Formulários)
// ===========================================

// Schema para cadastro no frontend
export const cadastroSchema = z.object({
  name: z.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .trim()
    .refine(val => val.length > 0, "Nome não pode ser vazio"),
    
  email: z.string()
    .email("Forneça um e-mail válido")
    .trim(),
    
  senha: z.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
    
  confirmSenha: z.string()
    .min(1, "Por favor, confirme sua senha"),
    
  role: z.enum(['SAUDE', 'COMUM'], {
    errorMap: () => ({ message: "Selecione um tipo de usuário" })
  })
}).refine(data => data.senha === data.confirmSenha, {
  path: ["confirmPassword"],
  message: "As senhas não coincidem",
});

// Schema para login no frontend
export const loginSchema = z.object({
  email: z.string()
    .email("Forneça um e-mail válido")
    .trim(),
  senha: z.string()
    .min(1, "Senha é obrigatória") // Simplificado para login
});

// ===========================================
// SCHEMAS PARA BACKEND (API e Banco)
// ===========================================

// Schema para criação de usuário no backend (recebe dados da API)
export const criarUsuarioBackendSchema = z.object({
  name: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres')
    .trim(),
  email: z.string()
    .email('Email inválido')
    .toLowerCase()
    .trim(),
  senha: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .max(100, 'Senha muito longa'),
  role: z.enum(['SAUDE', 'COMUM'])
});

// Schema para atualização de usuário
export const atualizarUsuarioSchema = z.object({
  id: z.string().uuid('ID deve ser um UUID válido'),
  name: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres')
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
  role: z.enum(['SAUDE', 'COMUM'])
    .optional()
});

// Schema para busca por ID
export const buscarPorIdSchema = z.object({
  id: z.string().uuid('ID deve ser um UUID válido')
});

// ===========================================
// TIPOS TYPESCRIPT
// ===========================================

// Tipos para frontend
export type CadastroFormData = z.infer<typeof cadastroSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;

// Tipos para backend
export type CriarUsuarioBackendInput = z.infer<typeof criarUsuarioBackendSchema>;
export type AtualizarUsuarioInput = z.infer<typeof atualizarUsuarioSchema>;
export type BuscarPorIdInput = z.infer<typeof buscarPorIdSchema>;

// ===========================================
// FUNÇÃO UTILITÁRIA PARA CONVERTER DADOS
// ===========================================

// Converte dados do formulário de cadastro para o formato do backend
export function converterCadastroParaBackend(dadosCadastro: CadastroFormData): CriarUsuarioBackendInput {
  const dadosConvertidos = {
    name: dadosCadastro.name,
    email: dadosCadastro.email,
    senha: dadosCadastro.senha, 
    role: dadosCadastro.role 
  };

  console.log("Dados convertidos para o formato do backend:", dadosCadastro);
 return dadosCadastro;
}