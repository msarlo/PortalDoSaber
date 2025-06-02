import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { loginSchema } from '@/schemas/userSchemas'; // Você precisará criar este schema
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = loginSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado.' }, { status: 404 });
    }

    if (!user.senha) {
        return NextResponse.json({ error: 'Conta não configurada para login com senha.' }, { status: 400 });
    }

    const isPasswordValid = await compare(validatedData.senha, user.senha);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Senha inválida.' }, { status: 401 });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error('JWT_SECRET não está definido nas variáveis de ambiente.');
      return NextResponse.json({ error: 'Erro de configuração do servidor.' }, { status: 500 });
    }

    // Gerar o token JWT
    // Você pode adicionar mais informações ao payload do token se necessário
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: '1h' } // Token expira em 1 hora (ajuste conforme necessário)
    );

    // Remover a senha do objeto do usuário antes de retornar
    const { senha, ...userWithoutPassword } = user;

    return NextResponse.json({ 
      message: 'Login bem-sucedido!', 
      token,
      user: userWithoutPassword 
    });

  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: 'Dados de login inválidos.',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }
    console.error('Erro no login:', error);
    return NextResponse.json({ error: 'Erro interno ao tentar fazer login.' }, { status: 500 });
  }
}