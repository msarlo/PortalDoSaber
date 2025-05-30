import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed do banco de dados...");
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@gmail.com' },
    update: {},
    create: {
      name: 'Administrador',
      email: 'admin@gmail.com',
      senha: await hash('123456', 12),
      role: 'ADMIN' as const,
    }
  });

  console.log(`Usuário administrador criado: ${admin.email}`);
  
  const gabi = await prisma.user.upsert({
    where: { email: 'gabi@saude.com' },
    update: {},
    create: {
      name: 'Gabi',
      email: 'gabi@saude.com',
      senha: await hash('123456', 12),
      role: 'SAUDE' as const,
      }
    });

  console.log(`Gabi user created/updated: ${gabi.email}`);

  console.log('Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });