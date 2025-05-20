import { NextRequest, NextResponse } from 'next/server';
import { criarUsuario } from '@/app/services/userService';

export async function POST(req: NextRequest) {
  const { nome, email, senha, role } = await req.json();
  const user = await criarUsuario({ nome, email, senha, role });
  return NextResponse.json(user, { status: 201 });
}