import { NextResponse } from 'next/server';
import crypto from 'crypto'; // Módulo nativo para gerar UUIDs

// Tipo para as ações
interface Acao {
  id: string;
  titulo: string;
  descricao: string;
  status: 'pendente' | 'em_andamento' | 'concluida';
  dataCriacao: string;
  responsavel?: string;
}

// Dados simulados (transferir para o folder lib/data.ts)
let acoes: Acao[] = [
  {
    id: '1',
    titulo: 'Implementar módulo de autenticação',
    descricao: 'Criar sistema de login com suporte a múltiplos perfis',
    status: 'concluida',
    dataCriacao: '2023-04-15',
    responsavel: 'Maria Silva'
  },
  {
    id: '2',
    titulo: 'Corrigir bug no filtro de cursos',
    descricao: 'A função de filtro não está considerando a role do usuário corretamente',
    status: 'em_andamento',
    dataCriacao: '2023-05-20',
    responsavel: 'João Santos'
  },
  {
    id: '3',
    titulo: 'Desenvolver API de notificações',
    descricao: 'Criar endpoints para envio e gestão de notificações',
    status: 'pendente',
    dataCriacao: '2023-06-10'
  }
];


export async function GET(request: Request) {
  // Verificar se há um ID na URL para buscar uma ação específica
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    const acao = acoes.find(a => a.id === id);
    if (!acao) {
      return NextResponse.json({ error: 'Ação não encontrada' }, { status: 404 });
    }
    return NextResponse.json(acao);
  }

  
  return NextResponse.json(acoes);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.titulo || !body.descricao) {
      return NextResponse.json(
        { error: 'Título e descrição são obrigatórios' }, 
        { status: 400 }
      );
    }
    
    // Gerando um UUID v4 usando o módulo crypto nativo
    const newId = crypto.randomUUID();
    
    const novaAcao: Acao = {
      id: newId,
      titulo: body.titulo,
      descricao: body.descricao,
      status: body.status || 'pendente',
      dataCriacao: new Date().toISOString().split('T')[0],
      responsavel: body.responsavel
    };
    
    acoes.push(novaAcao);
    
    return NextResponse.json(novaAcao, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' }, 
      { status: 400 }
    );
  }
}

// PUT - Atualiza uma ação existente
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.id) {
      return NextResponse.json(
        { error: 'ID é obrigatório para atualização' }, 
        { status: 400 }
      );
    }
    
    const index = acoes.findIndex(a => a.id === body.id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Ação não encontrada' }, 
        { status: 404 }
      );
    }
    
    // Atualizar apenas os campos fornecidos
    acoes[index] = {
      ...acoes[index],
      ...body,
      id: acoes[index].id // Garantir que o ID não seja alterado
    };
    
    return NextResponse.json(acoes[index]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar a requisição' }, 
      { status: 400 }
    );
  }
}

// DELETE - Remove uma ação
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  
  if (!id) {
    return NextResponse.json(
      { error: 'ID é obrigatório para exclusão' }, 
      { status: 400 }
    );
  }
  
  const index = acoes.findIndex(a => a.id === id);
  
  if (index === -1) {
    return NextResponse.json(
      { error: 'Ação não encontrada' }, 
      { status: 404 }
    );
  }
  
  // Remover a ação
  const removida = acoes.splice(index, 1)[0];
  
  return NextResponse.json({
    message: 'Ação removida com sucesso',
    acao: removida
  });
}