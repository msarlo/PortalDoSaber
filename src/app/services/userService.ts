import { prisma } from '@/lib/prisma';
import { Role } from '@prisma/client';
import { hash } from 'bcryptjs';

interface CriarUsuarioParams {
  nome: string;
  email: string;
  senha: string;
  role: Role;
}

export async function criarUsuario({ nome, email, senha, role }: CriarUsuarioParams) {
  const senhaHash = await hash(senha, 12);
  return prisma.user.create({
    data: {
      nome,
      email,
      senha: senhaHash,
      role,
    }
  });
}