import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Verificar se admin já existe
  const adminExists = await prisma.user.findUnique({
    where: { email: 'admin@gmail.com' }
  });

  if (!adminExists) {
    // Criar usuário admin
    const senhaHash = await hash('123456', 12);
    
    await prisma.user.create({
      data: {
        name: 'Administrador',
        email: 'admin@gmail.com',
        senha: senhaHash,
        role: 'ADMIN'
      }
    });

    console.log('Usuário admin criado com sucesso!');
  } else {
    console.log('Usuário admin já existe.');
  }

  // Criar alguns usuários de teste (opcional)
  const testUsers = [
    {
      name: 'Dr. Luis Gustavo',
      email: 'luis@saude.com',
      senha: await hash('123456', 12),
      role: 'SAUDE' as const
    },
    {
      name: 'Dra. Gabriela Melo',
      email: 'gabi@saude.com',
      senha: await hash('123456', 12),
      role: 'COMUM' as const
    }
  ]

  for (const user of testUsers) {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email }
    })

    if (!existingUser) {
      await prisma.user.create({ data: user })
      console.log(`Usuário criado: ${user.email}`)
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });