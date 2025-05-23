import { NextRequest, NextResponse } from 'next/server';
import { login } from '@/app/services/userService';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const user = await login(body);
    
    return NextResponse.json(user, { status: 200 });
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
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Credenciais inválidas' },
      { status: 401 }
    );
  }
}