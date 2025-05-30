export interface Curso {
  id: number;
  title: string;
  image: string;
  slug: string;
  description?: string;
  role: 'Saude' | 'Comum';  // Novo campo para controlar o acesso
}

export async function getListarCursos(): Promise<Curso[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return [
    {
      id: 1,
      title: "Sistema PRONTO",
      image: "/assets/images/PRONTO.png",
      slug: "pronto",
      description: "Aprenda os fundamentos do sistema e suas principais funcionalidades.",
      role: "Saude"  
    },
    {
      id: 2,
      title: "GLPI",
      image: "/assets/images/GLPI.jpg",
      slug: "glpi",
      description: "Domine as ferramentas essenciais para gestão de chamados.",
      role: "Comum"  
    },
    {
      id: 3,
      title: "1DOC",
      image: "/assets/images/umdoc.jpg",
      slug: "umdoc",
      description: "Gerencie documentos e processos com este sistema completo.",
      role: "Comum"  
    }
  ];
}


export async function getCursoPorSlug(slug: string): Promise<Curso | undefined> {
  const cursos = await getListarCursos();
  return cursos.find(curso => curso.slug === slug);
}