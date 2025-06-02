import { NextRequest, NextResponse } from 'next/server';
import { criarUsuario } from '@/app/services/userService';
import { ZodError } from 'zod';
import { converterCadastroParaBackend } from '@/schemas/userSchemas';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// API de criação de usuário
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Usar a função utilitária para converter
    const dadosBackend = converterCadastroParaBackend(body);
    
    const user = await criarUsuario(dadosBackend);
    
    return NextResponse.json({ message: 'Usuário criado com sucesso!', user }, { status: 201 });
  } catch (error) {
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: 'Dados inválidos',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }
    
    // Outros erros
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erro interno' },
      { status: 500 }
    );
  }
}