import { NextResponse } from "next/server";
import { getListarCursos, getCursoPorSlug, type Curso } from "@/lib/data";

// Cursos em memória para simular o CRUD
let cursosMemoria: Curso[] = [];

// Inicializar com dados de cursos existentes
(async () => {
  try {
    cursosMemoria = await getListarCursos();
  } catch (error) {
    console.error("Erro ao carregar cursos iniciais:", error);
  }
})();

// GET - Retorna todos os cursos ou um específico por ID/role/slug
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const role = url.searchParams.get("role");
  const slug = url.searchParams.get("slug");

  // Recuperar dados atualizados
  try {
    cursosMemoria = await getListarCursos();
  } catch (error) {
    console.error("Erro ao atualizar cursos:", error);
  }

  // Filtrar por ID
  if (id) {
    const idNumber = parseInt(id);
    const curso = cursosMemoria.find((c) => c.id === idNumber);
    if (!curso) {
      return NextResponse.json(
        { error: "Curso não encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(curso);
  }

  // Filtrar por slug
  if (slug) {
    const curso = await getCursoPorSlug(slug);
    if (!curso) {
      return NextResponse.json(
        { error: "Curso não encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(curso);
  }

  // Filtrar por role (Saude ou SUS)
  if (role) {
    if (role !== "Saude" && role !== "SUS") {
      return NextResponse.json(
        { error: 'Role inválida. Use "Saude" ou "SUS"' },
        { status: 400 }
      );
    }
    const filtrados = cursosMemoria.filter((c) => c.role === role);
    return NextResponse.json(filtrados);
  }

  // Retorna todos os cursos
  return NextResponse.json(cursosMemoria);
}

// POST - Cria um novo curso
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validações básicas
    if (!body.title || !body.image || !body.role) {
      return NextResponse.json(
        { error: "Título, imagem e role são obrigatórios" },
        { status: 400 }
      );
    }

    // Validar role
    if (body.role !== "Saude" && body.role !== "SUS") {
      return NextResponse.json(
        { error: 'Role inválida. Use "Saude" ou "SUS"' },
        { status: 400 }
      );
    }

    // Gerar ID único sequencial
    const maxId = Math.max(...cursosMemoria.map((c) => c.id), 0);

    // Criar slug a partir do título se não fornecido
    const slug = body.slug || body.title.toLowerCase().replace(/\s+/g, "-");

    const novoCurso: Curso = {
      id: maxId + 1,
      title: body.title,
      image: body.image,
      slug: slug,
      description: body.description,
      role: body.role,
    };

    cursosMemoria.push(novoCurso);

    return NextResponse.json(novoCurso, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar curso:", error);
    return NextResponse.json(
      { error: "Erro ao processar a requisição" },
      { status: 400 }
    );
  }
}

// PUT - Atualiza um curso existente
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    if (!body.id) {
      return NextResponse.json(
        { error: "ID é obrigatório para atualização" },
        { status: 400 }
      );
    }

    // Validar role se fornecida
    if (body.role && body.role !== "Saude" && body.role !== "SUS") {
      return NextResponse.json(
        { error: 'Role inválida. Use "Saude" ou "SUS"' },
        { status: 400 }
      );
    }

    const index = cursosMemoria.findIndex((c) => c.id === body.id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Curso não encontrado" },
        { status: 404 }
      );
    }

    // Atualizar apenas os campos fornecidos
    cursosMemoria[index] = {
      ...cursosMemoria[index],
      ...body,
      id: cursosMemoria[index].id, // Garantir que o ID não seja alterado
    };

    return NextResponse.json(cursosMemoria[index]);
  } catch (error) {
    console.error("Erro ao atualizar curso:", error);
    return NextResponse.json(
      { error: "Erro ao processar a requisição" },
      { status: 400 }
    );
  }
}

// DELETE - Remove um curso
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID é obrigatório para exclusão" },
      { status: 400 }
    );
  }

  const idNumber = parseInt(id);
  const index = cursosMemoria.findIndex((c) => c.id === idNumber);

  if (index === -1) {
    return NextResponse.json(
      { error: "Curso não encontrado" },
      { status: 404 }
    );
  }

  // Remover o curso
  const removido = cursosMemoria.splice(index, 1)[0];

  return NextResponse.json({
    message: "Curso removido com sucesso",
    curso: removido,
  });
}
