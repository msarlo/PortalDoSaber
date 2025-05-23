import { prisma } from '@/lib/prisma';
import { hash, compare } from 'bcryptjs';
import { 
  criarUsuarioSchema, 
  loginSchema, 
  atualizarUsuarioSchema,
  buscarPorIdSchema,
  type CriarUsuarioInput,
  type LoginInput,
  type AtualizarUsuarioInput
} from '@/schemas/userSchemas';

// Criar usuário
export async function criarUsuario(data: unknown) {
  // Validar dados com Zod
  const validatedData = criarUsuarioSchema.parse(data);
  
  // Verificar se o email já existe
  const existingUser = await prisma.user.findUnique({
    where: { email: validatedData.email }
  });

  if (existingUser) {
    throw new Error('Este email já está em uso');
  }

  const senhaHash = await hash(validatedData.senha, 12);
  
  return prisma.user.create({
    data: {
      name: validatedData.name,
      email: validatedData.email,
      senha: senhaHash,
      role: validatedData.role,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
}

// Login
export async function login(data: unknown) {
  // Validar dados com Zod
  const validatedData = loginSchema.parse(data);
  
  // Buscar usuário pelo email
  const user = await prisma.user.findUnique({
    where: { email: validatedData.email }
  });

  if (!user) {
    throw new Error('Credenciais inválidas');
  }

  // Verificar se a senha está correta
  const isPasswordValid = await compare(validatedData.senha, user.senha);

  if (!isPasswordValid) {
    throw new Error('Credenciais inválidas');
  }

  // Retornar usuário sem a senha
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt
  };
}

// Buscar usuário por ID
export async function buscarUsuarioPorId(data: unknown) {
  const validatedData = buscarPorIdSchema.parse(data);
  
  return prisma.user.findUnique({
    where: { id: validatedData.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
}

// Atualizar usuário
export async function atualizarUsuario(data: unknown) {
  const validatedData = atualizarUsuarioSchema.parse(data);
  
  const updateData: any = { ...validatedData };
  delete updateData.id; // Remover ID dos dados de atualização
  
  // Se a senha foi fornecida, fazer hash
  if (updateData.senha) {
    updateData.senha = await hash(updateData.senha, 12);
  }

  return prisma.user.update({
    where: { id: validatedData.id },
    data: updateData,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });
}

// Listar todos os usuários (sem validação necessária)
export async function listarUsuarios() {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

// Remover usuário
export async function removerUsuario(data: unknown) {
  const validatedData = buscarPorIdSchema.parse(data);
  
  return prisma.user.delete({
    where: { id: validatedData.id }
  });
}