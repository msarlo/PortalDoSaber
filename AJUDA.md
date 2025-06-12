# Portal Saber - Guia Rápido para Desenvolvedores

Bem-vindos ao time do Portal Saber! Este guia tem como objetivo fornecer uma visão geral da arquitetura e das principais tecnologias que utilizamos no desenvolvimento deste projeto é importante fazer uma leitura.

## 1. Visão Geral do Projeto

O **Portal Saber** é uma plataforma desenvolvida para oferecer tutoriais e guias para profissionais da Prefeitura de Juiz de Fora, facilitando o acesso a informações e processos internos

**Tecnologias Chave:**

- **Frontend & Backend:** Next.js (React com funcionalidades de backend via API Routes)
- **Linguagem:** TypeScript
- **Validação de Dados:** Zod
- **Autenticação:** JSON Web Tokens (JWT)
- **Banco de Dados:** Inicialmente o Sqlite(dev) e posteriormente o PostgreSQL(prod)
- **ORM (Object-Relational Mapper):**: Prisma

---

## 2. Validação de Dados com Zod

**O que é e por que usamos?**
Zod é uma biblioteca de declaração e validação de esquemas (schemas) para TypeScript. Ela nos ajuda a garantir que os dados recebidos de fontes externas (como formulários de usuários) estejam no formato e tipo corretos antes de serem processados. Isso aumenta a robustez e a segurança da nossa aplicação, além de fornecer mensagens de erro claras. A escolha foi por ser uma blibioteca reaproveitada para o front e o back (a validação é feita nos dois sentido front para o back e vice-versa)

**Exemplo de Definição de Schema:**

```typescript
// Localização: src/schemas/userSchemas.ts
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
});

// Tipo TypeScript inferido do schema:
export type LoginInput = z.infer<typeof LoginSchema>;
```

**Exemplo de Validação em uma API Route:**

```typescript
// Localização: Ex: src/app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { LoginSchema } from "@/lib/schemas/authSchemas";

// Aqui é a rota POST que de fato irá
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validationResult = LoginSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { errors: validationResult.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data; // Dados validados e tipados
    // ... Lógica de login ...
    return NextResponse.json({ message: "Login bem-sucedido!" });
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
```

---

## 3. Autenticação com JWT (JSON Web Tokens)

**O que é e por que usamos?**
JWT é um padrão para criar tokens de acesso que nos permitem autenticar usuários de forma stateless. Após o login, o servidor gera um token JWT que o cliente envia em requisições subsequentes para provar sua identidade. A assinatura do token garante sua integridade.

**Exemplo de Geração de Token (após login):**

```typescript
// Localização: Ex: Dentro da lógica de login bem-sucedido
import jwt from "jsonwebtoken";

// Supondo: const user = { id: 'user-123', email: 'teste@exemplo.com', role: 'Saude' };
const JWT_SECRET = process.env.JWT_SECRET; // Chave secreta segura!

if (!JWT_SECRET) throw new Error("JWT_SECRET não definida.");

//Payload é o bloco do JWT que contém as informações do usuários(fica armazenado no localStorage)
const payload = {
  userId: user.id,
  email: user.email,
  role: user.role,
};

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
// Este 'token' é enviado ao cliente.
```

**Exemplo de Verificação de Token (em rotas protegidas):**

```typescript
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  // iat, exp são adicionados automaticamente pelo jwt.sign
}

export function verifyAuth(req: NextRequest): DecodedToken | null {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) return null;

  const authHeader = req.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.substring(7); // Remove "Bearer "

  try {
    return jwt.verify(token, JWT_SECRET) as DecodedToken;
  } catch (error) {
    return null; // Token inválido ou expirado
  }
}

/*
// Uso em uma API Route:
export async function GET(req: NextRequest) {
  const userData = verifyAuth(req);
  if (!userData) {
    return NextResponse.json({ message: "Não autorizado" }, { status: 401 });
  }
  // userData.userId, userData.role estão disponíveis
  // ...
}
*/
```

---

## 4. Lógica do Banco de Dados (Exemplo com Prisma ORM)

**Interação com o Banco:**
Utilizamos o Sqlite para armazenar os dados da aplicação. Para interagir com o banco de forma segura e eficiente em TypeScript, usamos o ORM Prisma.

**Exemplo de `schema.prisma`:**

```prisma
// Localização: prisma/schema.prisma

============================
          //NOTA//
============================

//Estamos utilizando a nova feature do PRISMA o generator para poder ter o prisma client, este não deve ser comitado para gerar no seu projeto rode o comando ( npx prisma generate) no seu terminal

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "DATABASE_URL"
}

model User {
  id    String @id @default(uuid())
  name  String
  email String @unique
  senha String
  role  Role   @default(SUS)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}

enum Role {
  SAUDE
  SUS
  ADMIN
}

**Exemplo de Operações CRUD com Prisma Client:**
Lembrado que essa função é chamada no onSubmit de cadastro
Localização: src/services/userService.ts
// Criar usuário
export async function criarUsuario(data: unknown) {
  // Validar dados com Zod
  const validatedData = criarUsuarioBackendSchema.parse(data);

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

// Exemplo de busca de um curso:
async function getCursoBySlug(slug: string) {
  return await prisma.curso.findUnique({
    where: { slug },
  });
}
```

---

## 5. Fluxo Integrado (Resumo)

Imagine um usuário acessando um tutorial protegido:

1.  **Login:** Usuário envia credenciais. Backend valida com **Zod**, verifica no **Banco de Dados** e, se OK, gera um **JWT**.
2.  **Armazenamento:** Frontend armazena o JWT.
3.  **Requisição Protegida:** Usuário clica em um tutorial. Frontend envia o JWT no header.
4.  **Verificação no Backend:** API Route verifica o **JWT** (assinatura, expiração).
5.  **Acesso aos Dados:** Se o JWT é válido, o backend consulta o **Banco de Dados** (usando Prisma) para buscar o tutorial.
6.  **Resposta:** Backend envia os dados do tutorial para o frontend.

---

## 6. Onde Encontrar Mais Informações

- **Schemas de Validação:** `src/lib/schemas/`
- **Lógica de Autenticação:** `src/api/auth/`
- **API Routes:** `src/app/api/`
- **Modelos do Banco (Prisma):** `prisma/schema.prisma`
- **Dados Mockados/Iniciais:** `src/lib/data.ts`, `src/lib/prontoData.ts`

Este guia é um ponto de partida. Não hesitem em perguntar e explorar o código!
