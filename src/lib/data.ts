export interface Curso {
  id: number;
  title: string;
  image: string;
  slug: string;
  description?: string;
}

export async function getListarCursos(): Promise<Curso[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return [
    {
      id: 1,
      title: "Sistema PRONTO",
      image: "/assets/images/logoPrefeitura.png",
      slug: "pronto",
      description: "Aprenda os fundamentos do sistema e suas principais funcionalidades."
    },
    {
      id: 2,
      title: "GLPI",
      image: "/assets/images/logoPrefeitura.png",
      slug: "glpi",
      description: "Domine as ferramentas essenciais para gestão de chamados."
    },
    {
      id: 3,
      title: "1DOC",
      image: "/assets/images/logoPrefeitura.png",
      slug: "1doc",
      description: "Gerencie documentos e processos com este sistema completo."
    }
  ];
}


export async function getCursoPorSlug(slug: string): Promise<Curso | undefined> {
  const cursos = await getListarCursos();
  return cursos.find(curso => curso.slug === slug);
}