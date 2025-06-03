export interface Profissao {
  id: string;
  nome: string;
  slug: string; // Usado na URL, ex: "recepcionista"
  imagemSrc: string; // Caminho para a imagem/ícone da profissão na pasta public
  // outros campos se necessário
}

export interface Tutorial {
  id: string;
  titulo: string;
  slug: string; // Usado na URL, ex: "pesquisar-usuario"
  profissaoSlug: string; // Para linkar com a profissão
  imagemSrc: string;
}

export const profissoesPronto: Profissao[] = [
  { id: 'rec', nome: 'Recepcionista', slug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'med', nome: 'Médico', slug: 'medico', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'enf', nome: 'Enfermeiro', slug: 'enfermeiro', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'den', nome: 'Dentista', slug: 'dentista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'farm', nome: 'Farmacêutico', slug: 'farmaceutico', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'vig', nome: 'Vigilância Sanitária', slug: 'vigilancia-sanitaria', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'as', nome: 'Assistente Social', slug: 'assistente-social', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'acs', nome: 'Agente Comunitário de Saúde', slug: 'agente-comunitario-saude', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  { id: 'auxenf', nome: 'Aux./Técnico em Enfermagem', slug: 'aux-tecnico-enfermagem', imagemSrc: '/assets/icons/pronto/Recepicionista.webp' },
  
];

export const tutoriaisProntoRecepicionista: Tutorial[] = [
    { id: 'tuto3', titulo: 'Cadastrar Usuário', slug: 'cadastrarUsuario', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto1', titulo: 'Pesquisar Usuário', slug: 'pesquisarUsuario', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto2', titulo: 'Importar Usuário', slug: 'importarUsuario', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto4', titulo: 'Atualizar Dados do Usuário', slug: 'atualizarDados', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto5', titulo: 'Fila de Atendimento', slug: 'filaDeAtendimento', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto6', titulo: 'Agendamento ', slug: 'agendamento', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto7', titulo: 'Marcar Consulta', slug: 'marcarConsulta', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'},
    { id: 'tuto8', titulo: 'Recepção de Serviço', slug: 'recepcaoDeServico', profissaoSlug: 'recepcionista', imagemSrc: '/assets/icons/pronto/Recepicionista.webp'}
];

// Funções helper para buscar dados (simulação)
export const getProfissaoBySlug = async (slug: string): Promise<Profissao | undefined> => {
  return profissoesPronto.find(p => p.slug === slug);
};

export const getTutoriaisByProfissaoSlug = async (profissaoSlug: string): Promise<Tutorial[]> => {
  return tutoriaisProntoRecepicionista.filter(t => t.profissaoSlug === profissaoSlug);
};

export const getTutorialBySlugs = async (profissaoSlug: string, tutorialSlug: string): Promise<Tutorial | undefined> => {
  return tutoriaisProntoRecepicionista.find(t => t.profissaoSlug === profissaoSlug && t.slug === tutorialSlug);
};