import React from 'react';
import Image from 'next/image';
import { SideBar, type SidebarItem } from '@/components/SideBar';

// Helper functions (mantidas para consistência e caso precise no futuro)
function cleanTitleForDisplay(text: string): string {
  return text.replace(/\.+[0-9]+$/, '').trim();
}

function slugficar(text: string): string {
  const cleaned = text.replace(/\.+[0-9]+$/, '').trim(); // Limpa antes de slugificar
  return cleaned
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífen
    .replace(/[^\w-]+/g, '') // Remove caracteres não alfanuméricos (exceto hífen)
    .replace(/--+/g, '-'); // Substitui múltiplos hífens por um único
}

const umdocSidebarData: SidebarItem[] = [
  { title: "O que é 1Doc", slug: slugficar("O que é 1Doc") },
  { title: "Cadastro de usuário e Primeiro acesso", slug: slugficar("Cadastro de usuário e Primeiro acesso") },
  {
    title: "Entenda os menus da 1Doc",
    slug: slugficar("Entenda os menus da 1Doc"),
    subItems: [
      { title: "Inbox", slug: slugficar("Inbox") },
      { title: "Inbox do setor", slug: slugficar("Inbox do setor") },
      { title: "Inbox pessoal", slug: slugficar("Inbox pessoal") },
      { title: "Entendendo os tons de cinza na listagem de documentos do setor", slug: slugficar("Entendendo os tons de cinza na listagem de documentos do setor") },
      { title: "Novo", slug: slugficar("Novo") },
      { title: "Listar", slug: slugficar("Listar") },
      { title: "Estrutura", slug: slugficar("Estrutura") },
      { title: "Trocar de setor", slug: slugficar("Trocar de setor") },
      { title: "Menu pessoal", slug: slugficar("Menu pessoal") },
    ],
  },
  { title: "Busca Avançada", slug: slugficar("Busca Avançada") },
  { title: "O que é e como utilizar a busca informativa", slug: slugficar("O que é e como utilizar a busca informativa") },
  {
    title: "Tipos de Processos",
    slug: slugficar("Tipos de Processos"),
    subItems: [
      { title: "Memorando", slug: slugficar("Memorando") },
      { title: "Circular", slug: slugficar("Circular") },
      { title: "Ofício", slug: slugficar("Ofício") },
      { title: "Expedição de ofícios pela 1DOC- Circular 019/2023", slug: slugficar("Expedição de ofícios pela 1DOC- Circular 019/2023") },
      { title: "Proc. Administrativo e Protocolo", slug: slugficar("Proc. Administrativo e Protocolo") },
      { title: "Proc. Administrativo", slug: slugficar("Proc. Administrativo") },
      { title: "Protocolo", slug: slugficar("Protocolo") },
      { title: "Como alterar/recategorizar o assunto de um Protocolo/atendimento", slug: slugficar("Como alterar/recategorizar o assunto de um Protocolo/atendimento") },
    ],
  },
  {
    title: "Quando utilizar o botão \"Arquivar\" e o \"Arquivar + Parar de acompanhar\"?",
    slug: slugficar("Quando utilizar o botão \"Arquivar\" e o \"Arquivar + Parar de acompanhar\"?"),
    subItems: [
      { title: "Arquivar", slug: slugficar("Arquivar") },
      { title: "Arquivar + Parar de Acompanhar", slug: slugficar("Arquivar + Parar de Acompanhar") },
      { title: "Porque e quando devo arquivar minhas demandas?", slug: slugficar("Porque e quando devo arquivar minhas demandas?") },
      { title: "Arquivamento de documentos eletrônicos - Circular 017/2023", slug: slugficar("Arquivamento de documentos eletrônicos - Circular 017/2023") },
    ],
  },
  {
    title: "Como criar e gerenciar marcadores",
    slug: slugficar("Como criar e gerenciar marcadores"),
    subItems: [
      { title: "Utilizando os marcadores", slug: slugficar("Utilizando os marcadores") },
      { title: "Aplicando unitariamente", slug: slugficar("Aplicando unitariamente") },
      { title: "Aplicando em lote", slug: slugficar("Aplicando em lote") },
      { title: "Filtrando/Listando Marcadores", slug: slugficar("Filtrando/Listando Marcadores") },
    ],
  },
  { title: "Utilizando a funcionalidade de rascunho", slug: slugficar("Utilizando a funcionalidade de rascunho") },
  {
    title: "Como criar e editar modelos de documentos e respostas",
    slug: slugficar("Como criar e editar modelos de documentos e respostas"),
    subItems: [
      { title: "Criando modelos", slug: slugficar("Criando modelos") },
    ],
  },
  {
    title: "Usando a funcionalidade de menções",
    slug: slugficar("Usando a funcionalidade de menções"),
    subItems: [
      { title: "Mencionando documentos", slug: slugficar("Mencionando documentos") },
      { title: "Referenciando pelo nome do documento", slug: slugficar("Referenciando pelo nome do documento") },
      { title: "Referenciando pelo número do documento", slug: slugficar("Referenciando pelo número do documento") },
      { title: "Mencionando usuários de um setor", slug: slugficar("Mencionando usuários de um setor") },
      { title: "Mencionando contatos", slug: slugficar("Mencionando contatos") },
    ],
  },
  { title: "Solicitação de Assinatura", slug: slugficar("Solicitação de Assinatura") },
  {
    title: "Como funciona a contrassenha e como utilizá-la?",
    slug: slugficar("Como funciona a contrassenha e como utilizá-la?"),
    subItems: [
      { title: "Utilizando as contra-senhas", slug: slugficar("Utilizando as contra-senhas") },
      { title: "Identificando documentos enviados por meio de contrassenha", slug: slugficar("Identificando documentos enviados por meio de contrassenha") },
    ],
  },
  {
    title: "Sobre anexo de arquivos",
    slug: slugficar("Sobre anexo de arquivos"),
    subItems: [
      { title: "Restrições:", slug: slugficar("Restrições") },
      { title: "Como saber o tamanho máximo de arquivo suportado na Plataforma?", slug: slugficar("Como saber o tamanho máximo de arquivo suportado na Plataforma?") },
      { title: "Extensões suportadas na plataforma:", slug: slugficar("Extensões suportadas na plataforma") },
    ],
  },
  {
    title: "Como adicionar prazo a um documento",
    slug: slugficar("Como adicionar prazo a um documento"),
    subItems: [
      { title: "Como saber que um documento possui um prazo?", slug: slugficar("Como saber que um documento possui um prazo?") },
    ],
  },
  { title: "Solicitação de assinatura - Usuários Internos e Externos", slug: slugficar("Solicitação de assinatura - Usuários Internos e Externos") },
  {
    title: "Como retificar/corrigir informações movimentadas dentro da 1Doc?",
    slug: slugficar("Como retificar/corrigir informações movimentadas dentro da 1Doc?"),
    subItems: [
      { title: "\"Criei uma demanda com informações erradas, como corrigir?\"", slug: slugficar("\"Criei uma demanda com informações erradas, como corrigir?\"") },
      { title: "\"Encaminhei uma demanda para o setor errado, como corrigir?\"", slug: slugficar("\"Encaminhei uma demanda para o setor errado, como corrigir?\"") },
    ],
  },
  { title: "Servidor Público: Utilize o Protocolo 1Doc (Central de Atendimento) para seus requerimentos", slug: slugficar("Servidor Público Utilize o Protocolo 1Doc Central de Atendimento para seus requerimentos") },
  { title: "Como alterar/recategorizar o assunto de um Protocolo/atendimento (duplicado)", slug: slugficar("Como alterar recategorizar o assunto de um Protocolo atendimento duplicado") }, // Adicionado (duplicado) para diferenciar slug
  {
    title: "Como embarcar um documento/atendimento anterior",
    slug: slugficar("Como embarcar um documento atendimento anterior"),
    subItems: [
      { title: "Mas o que é embarcar um documento?", slug: slugficar("Mas o que é embarcar um documento?") },
      { title: "Por que embarcar um documento?", slug: slugficar("Por que embarcar um documento?") },
      { title: "Como faço para embarcar um documento?", slug: slugficar("Como faço para embarcar um documento?") },
    ],
  },
  { title: "Exportar árvore de processo", slug: slugficar("Exportar árvore de processo") },
  { title: "Como desabilitar as notificações por e-mail na 1Doc?", slug: slugficar("Como desabilitar as notificações por e-mail na 1Doc?") },
];


export default function DocumentacaoUmdocPage() {
  const commonSectionClass = "mb-12 scroll-mt-20";
  const commonTitleClass = "text-2xl font-bold mb-6 text-gray-800";
  const commonSubTitleClass = "text-xl font-semibold mb-4 mt-8 text-gray-700";
  const paragraphClass = "text-gray-700 leading-relaxed mb-4";
  const listClass = "list-disc list-inside ml-4 mb-4 text-gray-700 space-y-1";
  const subListClass = "list-disc list-inside ml-8 mb-4 text-gray-700 space-y-1";
  const strongClass = "font-semibold text-gray-800";
  const imageContainerClass = "my-6 flex justify-center";
  const imageClass = "rounded-md shadow-lg border"; 

  return (
    <div className="flex flex-1">
      <SideBar title="Treinamento 1Doc" items={umdocSidebarData} />

      <article className="flex-1 p-6 md:p-8 lg:p-10 ml-0 md:ml-64 lg:ml-72 overflow-y-auto">
        {/* <Banner title="Treinamento 1Doc" descricao="Aprenda a utilizar a plataforma 1Doc de forma eficiente." /> */}
        
        <div className="mb-10 p-4 border-b border-gray-300">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">Treinamento 1DOC</h1>
            <p className="text-center text-sm text-gray-600">Diretoria de Gestão de Tecnologia da Informação</p>
            <p className="text-center text-sm text-gray-600">Divisão de Desenvolvimento de Software</p>
            <p className="text-center text-sm text-gray-600">Tel: (19)3455-8161 / E-mail: danilo.bastos@santabarbara.sp.gov.br</p>
            <p className="text-center text-xs text-gray-500 mt-1">V1.0 - 16/08/2023</p>
        </div>

        <section id={slugficar("O que é 1Doc")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>O que é 1Doc</h2>
          <p className={paragraphClass}>
            A 1Doc é uma plataforma SaaS de processos digitais que conecta atendimento, comunicação e
            gestão documental em um só lugar, elimina o papel como veículo da informação, gera economia,
            preserva o meio ambiente eleva a produtividade, o controle e a segurança para resolução das
            demandas do dia a dia de trabalho.
          </p>
          <p className={paragraphClass}>
            O SaaS (Software como Serviço) permite aos usuários se conectar e usar aplicativos baseados em nuvem pela Internet.
            Exemplos comuns são email, calendário e ferramentas do Office (como Microsoft Office 365).
          </p>
          <h3 className={commonSubTitleClass}>1) Possibilidades de:</h3>
          <p className={paragraphClass}>
            Crie fluxos, modelos de trabalho e processos com workflows do seu jeito – centralize todos os seus
            serviços e sua equipe em uma única plataforma.
          </p>
          <h3 className={commonSubTitleClass}>2) Originalmente Digital</h3>
          <p className={paragraphClass}>
            Da criação de um documento às assinaturas, todos os processos são feitos digitalmente. E o melhor,
            seus dados são armazenados com segurança no maior datacenter do mundo (Amazon Web Services - AWS).
          </p>
          <h3 className={commonSubTitleClass}>3) Todos sabem tudo</h3>
          <p className={paragraphClass}>
            A atualização dos processos é feita em tempo real para os envolvidos. Acompanhamento
            automatizado com rastreamento de ponta a ponta.
          </p>
          <p className={paragraphClass}>
            As solicitações entre setores que eram feitas através de Circular Interna (tipo 2-Documento
            Interno Assunto-Circular Interna) no sistema PUTSS serão usados o Memorando no 1DOC.
          </p>
          <p className={paragraphClass}>
            Na 1Doc, Circular Interna são somente documentos enviados pelos Secretários a várias secretarias.
          </p>
        </section>

        <section id={slugficar("Cadastro de usuário e Primeiro acesso")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Cadastro de usuário e Primeiro acesso</h2>
          <p className={paragraphClass}>
            Quando o usuário é criado, você receberá um e-mail com o seu usuário e senha provisória.
            Clique no botão “Acessar o 1Doc”.
          </p>
          {/* Placeholder para imagem "Tela de login" */}
          <div className={imageContainerClass}>
             {/* <Image src="/path/to/tela-login.png" alt="Tela de login 1Doc" width={700} height={400} className={imageClass} /> */}
             <p className="text-sm text-gray-500 italic">Placeholder: Imagem da Tela de login</p>
          </div>
          <p className={paragraphClass}>
            O link de acesso ao sistema também está no site do Município.
            Acessando o menu “Servidores Municipais / Inova SBO - 1Doc"
          </p>
          <p className={paragraphClass}>
            <a href="https://santabarbara.1doc.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://santabarbara.1doc.com.br/
            </a>
          </p>
          <p className={paragraphClass}>
            No primeiro acesso será pedido para completar alguns campos do seu cadastro.
            E na próxima tela para configurar a sua assinatura que aparecerá no final dos despachos criados.
          </p>
          <p className={paragraphClass}>
            Na 1Doc assim como nos demais sistemas do Município, o usuário e senha é de uso pessoal,
            não devendo ser compartilhado com mais ninguém.
          </p>
        </section>

        <section id={slugficar("Entenda os menus da 1Doc")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Entenda os menus da 1Doc</h2>
          <p className={paragraphClass}>
            A estrutura e funcionamento do 1Doc se assemelha ao funcionamento de webmail.
          </p>

          <article id={slugficar("Inbox")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Inbox</h3>
            <p className={paragraphClass}>
              A função do menu Inbox é listar todas as pendências ou tarefas ainda não cumpridas. Elas podem ser mostradas em 2 sub-menus:
            </p>
            {/* Placeholder para imagem "Menu Inbox" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/menu-inbox.png" alt="Menu Inbox 1Doc" width={300} height={400} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Menu Inbox</p>
            </div>
          </article>

          <article id={slugficar("Inbox do setor")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Inbox do setor</h3>
            <p className={paragraphClass}>
              É onde tramitam todos os documentos do setor atual nas caixas correspondentes: Em aberto (para
              resolver), Caixa de saída (documentos emitidos pelo setor), Favoritos (documentos que foram
              marcados como favoritos) e Arquivados (documentos finalizados).
            </p>
            <p className={paragraphClass}>
              Uma vez que o documento passou pelo setor ele estará na aba “Em Aberto” ou “Arquivados”.

              Independente dos documentos serem destinados a uma pessoa em específico (Aos cuidados de -
              A/C) ou não, é o local onde pode-se ter uma noção geral de todas as demandas e trabalhos que estão
              sendo feitos.
            </p>
          </article>

          <article id={slugficar("Inbox pessoal")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Inbox pessoal</h3>
            <p className={paragraphClass}>
              Aqui estarão listados os documentos onde você está envolvido, é a área onde se encontram os
              documentos que tiveram ou dependem da sua participação dentro da plataforma. São mostrados
              documentos que você enviou ou recebidos com a opção marcada de Aos cuidados (A/C) de e
              também documentos sigilosos enviados com a função Privado (exclusivo para Memorando).
            </p>
            <p className={paragraphClass}>
              Se existem documentos Em aberto em sua Inbox pessoal, você pode revisá-los de modo a resolver a
              demanda e marcar como resolvido.
            </p>
            <h4 className="text-lg font-medium mt-6 mb-2 text-gray-700">Como funciona a função privado?</h4>
            <p className={paragraphClass}>
              A função privado é utilizada para trocar informações entre setores, porém onde somente duas
              pessoas terão acesso ao conteúdo dessa emissão.
            </p>
            <p className={paragraphClass}>
              Funciona de forma bem similar a um e-mail, apenas as duas pessoas envolvidas diretamente
              recebem e podem ler o conteúdo do documento enviado e seus anexos.
            </p>
            <p className={paragraphClass}>
              Um ponto bem importante é que mesmo que apenas essas duas pessoas tenham acesso a essa
              emissão, o documento continua pertencendo a este setor e não às pessoas envolvidas, ou seja, se
              porventura uma dessas pessoas mudar de setor, perderá automaticamente acesso ao documento. A
              única forma neste caso, da pessoa voltar a ter acesso, é ser alocada novamente no setor, ou até
              mesmo estar nos dois setores ao mesmo tempo.
            </p>
            <p className={paragraphClass}>
              Outro ponto a ser levado em consideração é que uma vez que a informação é marcada como
              privada, ela não poderá ser encaminhada a outro setor ou pessoa que não as envolvidas no
              momento do primeiro envio.
            </p>
            <h4 className="text-lg font-medium mt-6 mb-2 text-gray-700">Como utilizar?</h4>
            <p className={paragraphClass}>
              Para utilizar a função Privado você deve iniciar o envio de um novo documento e selecionar a opção Aos cuidados de (A/C).
              Após, selecionar a pessoa que irá receber e em seguida, escolher o Modo privado.
            </p>
             {/* Placeholder para imagem "Função Privado" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/funcao-privado.png" alt="Função Privado 1Doc" width={500} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem da Função Privado</p>
            </div>
          </article>

          <article id={slugficar("Entendendo os tons de cinza na listagem de documentos do setor")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Entendendo os tons de cinza na listagem de documentos do setor</h3>
            <p className={paragraphClass}>
              Para auxiliar a organização das demandas no inbox do setor, a plataforma diferencia os documentos
              já lidos dos que ainda não foram vistos por mim ou por colegas do setor.
            </p>
            <p className={paragraphClass}>
              Veja no exemplo abaixo o que significam os tons: escuro, médio e claro nessa listagem.
            </p>
            {/* Placeholder para imagem "Tons de Cinza" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/tons-cinza.png" alt="Tons de Cinza na Listagem 1Doc" width={700} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem dos Tons de Cinza</p>
            </div>
            <p className={paragraphClass}>
              Para auxiliar, na inbox do seu setor é possível consultar essa ajuda das diferenças de tons na listagem.
              Localize o ícone de ? (interrogação) ao lado das abas no inbox do setor conforme o print:
            </p>
            {/* Placeholder para imagem "Ícone de Ajuda Tons de Cinza" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/ajuda-tons-cinza.png" alt="Ícone de Ajuda Tons de Cinza 1Doc" width={500} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Ícone de Ajuda para Tons de Cinza</p>
            </div>
          </article>

          <article id={slugficar("Novo")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Novo</h3>
            <p className={paragraphClass}>
              Este menu tem a função de criar um novo documento ou ação. Ex: Quando for criar um novo memorando, circular, ofício entre outros.
            </p>
            {/* Placeholder para imagem "Menu Novo" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/menu-novo.png" alt="Menu Novo 1Doc" width={300} height={400} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Menu Novo</p>
            </div>
          </article>

          <article id={slugficar("Listar")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Listar</h3>
            <p className={paragraphClass}>
              Semelhante ao menu Inbox, porém neste local você consegue classificar os documentos que seu setor ou você tem acesso, podendo listar eles por tipo. Ex: listar apenas os Memorandos.
            </p>
             {/* Placeholder para imagem "Menu Listar" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/menu-listar.png" alt="Menu Listar 1Doc" width={300} height={400} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Menu Listar</p>
            </div>
          </article>

          <article id={slugficar("Estrutura")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Estrutura</h3>
            <p className={paragraphClass}>
              Apresenta a estrutura da Organização na qual você trabalha.
            </p>
            {/* Placeholder para imagem "Menu Estrutura" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/menu-estrutura.png" alt="Menu Estrutura 1Doc" width={300} height={400} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Menu Estrutura</p>
            </div>
            <p className={paragraphClass}><strong className={strongClass}>Organograma:</strong> Aqui podemos ver toda a estrutura organizacional da empresa organizada hierarquicamente, muito útil para grandes empresas onde muitas vezes não se conhece todos os setores e locais de trabalho.</p>
            <p className={paragraphClass}><strong className={strongClass}>Contatos:</strong> Aqui vamos ter a lista de ramais/telefones da empresa, com fácil acesso e busca rápida. (Muito importante manter os seus dados cadastrais atualizados para que este item funcione corretamente)</p>
          </article>

          <article id={slugficar("Trocar de setor")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Trocar de setor</h3>
            <p className={paragraphClass}>
              Este menu é utilizado pelos usuários para trocar de setor, podendo verificar ou resolver documentos de setores abaixo da sua hierarquia. Também é usado para usuários que trabalham em mais de um setor ou grupo de trabalho. Ao clicar em Trocar de setor, irá abrir o menu lateral com os setores que você tem acesso como mostra a imagem abaixo.
            </p>
            {/* Placeholder para imagem "Menu Trocar de Setor" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/menu-trocar-setor.png" alt="Menu Trocar de Setor 1Doc" width={400} height={500} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Menu Trocar de Setor</p>
            </div>
          </article>

          <article id={slugficar("Menu pessoal")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Menu pessoal</h3>
            <p className={paragraphClass}>
              Localizado ao lado direito superior aqui você encontra as opções de cadastramento e gerenciamento de pessoas e setores, central de ajuda, chat com suporte, histórico de atendimentos e também algumas configurações de segurança e demais informações da sua conta.
            </p>
            {/* Placeholder para imagem "Menu Pessoal" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/menu-pessoal.png" alt="Menu Pessoal 1Doc" width={400} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Menu Pessoal</p>
            </div>
          </article>
        </section>

        <section id={slugficar("Busca Avançada")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Busca Avançada</h2>
          <p className={paragraphClass}>
            Fazendo buscas avançadas dentro da 1Doc. Para ter uma maior quantidade de opções e filtros na busca, você deve utilizar a busca avançada. Basta clicar no ícone da lupa, localizado no canto superior esquerdo como mostra a imagem ao lado.
          </p>
          {/* Placeholder para imagem "Ícone Lupa Busca Avançada" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/icone-lupa.png" alt="Ícone Lupa Busca Avançada 1Doc" width={200} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Ícone Lupa Busca Avançada</p>
          </div>
          <p className={paragraphClass}>
            Após clicar na lupa, uma janela com várias opções irá aparecer (figura abaixo) onde você poderá fazer uma busca mais específica preenchendo uma ou mais das opções.
          </p>
          {/* Placeholder para imagem "Janela Busca Avançada" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/janela-busca-avancada.png" alt="Janela Busca Avançada 1Doc" width={700} height={400} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem da Janela Busca Avançada</p>
          </div>
          <p className={paragraphClass}>
            Caso sua busca esteja retornando muitos documentos, tente sempre informar a maior quantidade de dados possíveis para deixar a busca mais precisa, como por ex: Escolher a situação, se está em aberto, arquivado, o setor participante, etc.
          </p>
          <p className={paragraphClass}>
            <strong className={strongClass}>Dica:</strong> Quando você digita no campo principal mais de uma palavra, o sistema irá buscar nos documentos todas as palavras ali escritas. Para buscar uma frase, duas ou mais palavras específicas, é preciso colocar elas entre "aspas".
          </p>
          <p className={paragraphClass}>Veja o exemplo:</p>
          <p className={paragraphClass}>
            Se buscado por: <code className="bg-gray-200 px-1 rounded">Teste assinatura</code>, o sistema irá procurar documentos contendo a palavra teste e a palavra assinatura e isso pode retornar um resultado muito grande na busca.
          </p>
          <p className={paragraphClass}>
            Já se você buscar por: <code className="bg-gray-200 px-1 rounded">"Teste assinatura"</code> o sistema irá buscar a sentença inteira, retornando apenas documentos que contenham esta sentença.
          </p>
          {/* Placeholder para imagem "Resultado Busca com Aspas" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/resultado-busca-aspas.png" alt="Resultado Busca com Aspas 1Doc" width={700} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem do Resultado Busca com Aspas</p>
          </div>
          <p className={paragraphClass}>
            Note que as palavras buscadas ficam destacadas em amarelo, informando onde foram encontradas.
            Ao colocar o mouse em cima do ícone de ? (interrogação), é aberta uma janela indicando onde foram encontradas a(s) palavra(s) buscada(s), se no conteúdo do documento, nos despachos ou em ambos.
          </p>
          <p className={paragraphClass}>
            É possível buscar também nos anexos. Para isso, a opção <strong className={strongClass}>Conteúdo de anexos</strong> deve estar marcada como mostra a imagem ao lado:
          </p>
           {/* Placeholder para imagem "Opção Conteúdo de Anexos" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/conteudo-anexos.png" alt="Opção Conteúdo de Anexos 1Doc" width={300} height={150} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem da Opção Conteúdo de Anexos</p>
          </div>
          <p className={paragraphClass}>
            A ferramenta de busca avançada pode ser utilizada também em módulos que possuem campos personalizados. Quando selecionado o campo <strong className={strongClass}>Nos fluxos</strong> e o mesmo possuir campos adicionais personalizados, tais campos aparecerão como opções de busca avançada.
          </p>
          <p className={paragraphClass}>
            Lembrando que a busca é feita apenas nos processos que foram criados ou que passaram pelo seu setor.
          </p>
        </section>

        <section id={slugficar("O que é e como utilizar a busca informativa")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>O que é e como utilizar a busca informativa</h2>
          <p className={paragraphClass}>
            A busca informativa traz informações de movimentação e setores envolvidos de documentos que não pertencem ao seu setor.
          </p>
          <h3 className={commonSubTitleClass}>E como fazer a busca informativa?</h3>
          <p className={paragraphClass}>
            Pela busca rápida, logo acima da inbox do seu setor, informe o tipo e número do documento a ser localizado:
          </p>
          {/* Placeholder para imagem "Busca Rápida Informativa" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/busca-rapida-informativa.png" alt="Busca Rápida Informativa 1Doc" width={600} height={150} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem da Busca Rápida Informativa</p>
          </div>
          <p className={paragraphClass}>
            Em seguida, a seguinte mensagem aparecerá em sua tela:
          </p>
          {/* Placeholder para imagem "Mensagem Consulta Andamento" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/msg-consulta-andamento.png" alt="Mensagem Consulta Andamento 1Doc" width={600} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem da Mensagem Consulta Andamento</p>
          </div>
          <p className={paragraphClass}>
            Clicando no botão <strong className={strongClass}>Consultar andamento do Protocolo</strong> você terá em tela algumas informações úteis sobre o documento em questão.
          </p>
          <p className={paragraphClass}>
            Se o seu setor precisa ter acesso ao documento na íntegra (com todo o conteúdo dos despachos, anexos, assinaturas), indicamos que entre em contato com algum dos setores envolvidos nele para que através da função <strong className={strongClass}>Encaminhar</strong> envolvam seu setor no documento.
          </p>
        </section>

        <section id={slugficar("Tipos de Processos")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Tipos de Processos</h2>
          <p className={paragraphClass}>
            O Município contratou da 1Doc os seguintes processos:
            Memorando, Processo Administrativo, Oficio, Protocolo.
          </p>
          <p className={paragraphClass}>
            <strong className={strongClass}>Memorando, Circular e Ofício: diferenças de uso e exemplos</strong>
          </p>
          <p className={paragraphClass}>
            Uma dúvida comum no início da utilização da plataforma 1Doc diz respeito a quando deve ser utilizado cada um dos tipos de documentos (módulos) disponíveis. Muito em consequência da nomenclatura dos documentos físicos, algumas confusões podem acontecer principalmente entre o Memorando, a Circular e o Ofício.
          </p>
          {/* Placeholder para imagem "Dúvida Tipos de Documentos" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/duvida-tipos-docs.png" alt="Dúvida Tipos de Documentos 1Doc" width={300} height={300} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Ilustrativa Dúvida Tipos de Documentos</p>
          </div>

          <article id={slugficar("Memorando")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Memorando</h3>
            <p className={paragraphClass}>
              É o documento oficial para comunicação entre setores (e não entre pessoas), ou seja, a principal forma de comunicação interna da sua instituição a partir do uso da 1Doc. Em termos conceituais, o Memorando constitui um tipo de comunicação eminentemente interna estabelecida entre as unidades administrativas da instituição, de níveis hierárquicos iguais ou distintos. Ele deve ser utilizado sempre que seja necessária a comunicação entre dois ou mais setores.
            </p>
            {/* Placeholder para imagem "Exemplo Memorando" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/exemplo-memorando.png" alt="Exemplo Memorando 1Doc" width={400} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Exemplo Memorando</p>
            </div>
            <p className={paragraphClass}>
              Para enviar um Memorando para um setor, basta clicar em <strong className={strongClass}>Novo &gt; Memorando</strong>.
            </p>
            <p className={paragraphClass}>
              Caso queria enviar o Memorando em cópia para mais de um setor, basta clicar em <strong className={strongClass}>+CC</strong> localizado abaixo do campo <strong className={strongClass}>Para:</strong>
            </p>
            {/* Placeholder para imagem "Opção +CC Memorando" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/opcao-cc-memorando.png" alt="Opção +CC Memorando 1Doc" width={500} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Opção +CC Memorando</p>
            </div>
            <p className={paragraphClass}>
              A utilização do Memorando é bastante ampla, mas a seguir estão alguns exemplos de comunicações internas que podem ser feitas através desse tipo de documento:
            </p>
            <ul className={listClass}>
              <li>Questionamentos diversos entre setores.</li>
              <li>Comunicação entre setores sem assunto e tramitação pré-definidos.</li>
            </ul>
          </article>

          <article id={slugficar("Circular")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Circular</h3>
            <p className={paragraphClass}>
              Também é um documento destinado à comunicação interna entre os setores de sua instituição, porém com um caráter informativo geralmente direcionado a vários setores de uma só vez.
            </p>
            {/* Placeholder para imagem "Exemplo Circular" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/exemplo-circular.png" alt="Exemplo Circular 1Doc" width={400} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Exemplo Circular</p>
            </div>
            <p className={paragraphClass}>
              Para enviar uma nova circular para um setor, basta clicar em <strong className={strongClass}>Novo &gt; Circular</strong>.
            </p>
            <p className={paragraphClass}>
              Uma das principais características da Circular é a facilidade na seleção de setores no envio. Na figura abaixo, fica claro como selecionar todos os subsetores de um setor principal com apenas um clique:
            </p>
            {/* Placeholder para imagem "Seleção Setores Circular" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/selecao-setores-circular.png" alt="Seleção Setores Circular 1Doc" width={500} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Seleção Setores Circular</p>
            </div>
            <p className={paragraphClass}>Alguns exemplos de uso da Circular:</p>
            <ul className={listClass}>
              <li>Aviso sobre ponto facultativo;</li>
              <li>Divulgação de nova uma nova Instrução Normativa ou Decreto;</li>
              <li>Convite para participação em evento.</li>
            </ul>
          </article>

          <article id={slugficar("Ofício")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Ofício</h3>
            <p className={paragraphClass}>
              O Ofício é o documento adequado para a comunicação externa, ou seja, de um setor interno da sua instituição para "fora", seja com Pessoas Físicas, Pessoas Jurídicas, Entidades, Órgãos Públicos.
            </p>
            <p className={paragraphClass}>
              Qualquer comunicação antes feita informalmente pelo e-mail do setor pode e deve ser feita pelo Ofício. Como todas os outros documentos da 1Doc, este é eletrônico e será entregue ao e-mail do destinatário cadastrado na criação do Ofício:
            </p>
            {/* Placeholder para imagem "Criação Ofício" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/criacao-oficio.png" alt="Criação Ofício 1Doc" width={600} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Criação Ofício</p>
            </div>
            <p className={paragraphClass}>
              Caso o destinatário ainda não possua um cadastro na plataforma 1Doc, clique em <strong className={strongClass}>Fazer o cadastro</strong> e necessariamente informe o e-mail do destinatário, pois será por ele que ele receberá seu Ofício:
            </p>
            {/* Placeholder para imagem "Cadastro Destinatário Ofício" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/cadastro-dest-oficio.png" alt="Cadastro Destinatário Ofício 1Doc" width={600} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Cadastro Destinatário Ofício</p>
            </div>
            <p className={paragraphClass}>
              Uma das principais vantagens da comunicação externa pelo Ofício é a verificação de recebimento e leitura do seu documento ao destinatário, o que auxilia na cobrança de prazo para resposta, por exemplo.
            </p>
            <p className={paragraphClass}>Alguns exemplos de uso do Ofício:</p>
            <ul className={listClass}>
              <li>Envio de Autorização de Fornecimento/Ordem de Compra para Fornecedores;</li>
              <li>Comunicação com órgãos externos (Tribunal de Contas, Câmara de Vereadores, Governo Federal, etc);</li>
              <li>Intimação de funcionário para depoimento em Processo Administrativo.</li>
            </ul>
            <p className={paragraphClass}>
              Com relação aos anexos: caso a soma dos anexos ultrapasse 20Mb, eles não serão enviados para o e-mail do externo, sendo incluída nesta mesma mensagem de e-mail a informação de que existem anexos para serem visualizados na plataforma (central de atendimento).
            </p>
            <p className={paragraphClass}>
              <strong className={strongClass}>Em resumo, Memorando e Circular são comunicações exclusivamente dentro da sua instituição, enquanto Ofício é a comunicação para fora da municipalidade.</strong>
            </p>
          </article>

          <article id={slugficar("Expedição de ofícios pela 1DOC- Circular 019/2023")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Expedição de ofícios pela 1DOC- Circular 019/2023</h3>
            <p className={paragraphClass}>Senhores usuários:</p>
            <p className={paragraphClass}>
              Conforme orientação prestada pela Secretaria Municipal de Justiça, "a expedição de ofícios para o público externo gerada pelo “Programa INOVA SBO” (Sistema 1DOC) está prevista no §3º do art. 7º do Decreto Municipal nº 7382/2022, constando expressamente a necessidade de observação da legislação vigente, nos seguintes termos:
            </p>
            <blockquote className="pl-4 italic border-l-4 border-gray-300 my-4">
              <p className={paragraphClass}>Art. 7º (...) § 3º Os ofícios eletrônicos, sobre qualquer assunto, expedido pela municipalidade dentro do sistema de gestão de documentos, poderão ser encaminhados para destinatários e órgãos fora da Administração Municipal através de sistema informatizado ou por correio eletrônico, ficando sob responsabilidade do sistema a confirmação de entrega e leitura do documento, nos termos da legislação.</p>
            </blockquote>
            <p className={paragraphClass}>
              Neste sentido destacamos que quando for obrigatório o ato de comprovação da entrega e do recebimento de documento por destinatários externos, este deverá ocorrer de forma física (via Correios) ou de outra forma se fixada expressamente na lei, pois para estas situações não bastará a confirmação de entrega e leitura gerada automaticamente pelo Programa Inova SBO (Sistema 1DOC)".
            </p>
          </article>

          <article id={slugficar("Proc. Administrativo e Protocolo")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Proc. Administrativo e Protocolo</h3>
            <p className={paragraphClass}>
              Diferentemente do Memorando e Circular, os módulos de Proc. Administrativos e de Protocolo já possuem assuntos pré-definidos podendo ter campos obrigatórios (depende de solicitação de desenvolvimento no suporte da 1Doc), ter aprovação e obrigação de anexos e quais tipos (extensão) de arquivos serão permitidos (no caso de ter que usar assinatura digital somente arquivos em formato PDF são assinados), ter texto descritivo com informações de preenchimento e texto padrão por assunto. É possível também criar fluxos (etapas) definindo qual setor é responsável pela etapa, assim ao encaminhar o processo para próxima etapa o sistema já encaminha para o setor responsável pela etapa seguinte até a conclusão do processo.
            </p>
          </article>

          <article id={slugficar("Proc. Administrativo")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Proc. Administrativo</h3>
            <p className={paragraphClass}>
              O Processo Administrativo assim como o Memorando também é uma comunicação de dentro da sua instituição porém com mais recursos de controle e padronização.
            </p>
            {/* Placeholder para imagem "Processo Administrativo" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/proc-administrativo.png" alt="Processo Administrativo 1Doc" width={500} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Processo Administrativo</p>
            </div>
            <p className={paragraphClass}>
              Se precisar adicionar contatos externos ao processo administrativo é aconselhável fazer através de um documento anexo ao processo pois uma vez o contato externo inserido ao processo ele passar a ter acesso a todos os despachos e fazendo dessa forma ele terá acesso apenas ao anexo.
            </p>
          </article>

          <article id={slugficar("Protocolo")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Protocolo</h3>
            <p className={paragraphClass}>
              É o modulo responsável pela entrada de requerimentos administrativos dentro da instituição. Portanto, sempre que um requerente externo for o beneficiário direto, o módulo correto é o Protocolo.
            </p>
            {/* Placeholder para imagem "Protocolo" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/protocolo.png" alt="Protocolo 1Doc" width={500} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Protocolo</p>
            </div>
            <p className={paragraphClass}>
              Caso o pedido seja uma denúncia ou um pedido para o bem comum, o módulo Ouvidoria é o indicado.
            </p>
            <p className={paragraphClass}>
              O requerente pode fazer sozinho de casa acessando o site do Município no menu Cidadão / Protocolo Abertura.
            </p>
            <p className={paragraphClass}>
              Ou diretamente pelo link <a href="https://santabarbara.1doc.com.br/b.php?pg=wp/wp&itd=5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://santabarbara.1doc.com.br/b.php?pg=wp/wp&itd=5</a>
            </p>
            <p className={paragraphClass}>
              Caso o requerente esteja presencialmente no setor, o atendente também tem como criar um novo protocolo em nome do requerente (solicitante) pelo menu <strong className={strongClass}>Novo / Protocolo</strong>.
            </p>
          </article>

          <article id={slugficar("Como alterar/recategorizar o assunto de um Protocolo/atendimento")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Como alterar/recategorizar o assunto de um Protocolo/atendimento</h3>
            <p className={paragraphClass}>
              O requerente, ao registrar um Protocolo/Atendimento, pode não categorizar adequadamente o assunto e distorcer os relatórios estatísticos gerados pela plataforma.
            </p>
            <p className={paragraphClass}>
              Para solucionar esta situação, o setor que recebe os Protocolos/Atendimento pode recategorizar o assunto, utilizando a funcionalidade apresentada abaixo:
            </p>
            {/* Placeholder para imagem "Ícone Recategorizar" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/icone-recategorizar.png" alt="Ícone Recategorizar 1Doc" width={400} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Ícone Recategorizar</p>
            </div>
            <p className={paragraphClass}>
              Ao clicar no ícone, será exibida uma tela mostrando os assuntos disponíveis para recategorizar:
            </p>
            {/* Placeholder para imagem "Tela Recategorizar" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/tela-recategorizar.png" alt="Tela Recategorizar Assunto 1Doc" width={500} height={300} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Tela Recategorizar Assunto</p>
            </div>
            <p className={paragraphClass}>
              Escolha o assunto adequado e clique no botão <strong className={strongClass}>Recategorizar</strong>.
            </p>
            <p className={paragraphClass}>
              Será gerado um evento no Protocolo/Atendimento registrando sua ação, como exibido abaixo:
            </p>
            {/* Placeholder para imagem "Evento Recategorizado" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/evento-recategorizado.png" alt="Evento Recategorizado 1Doc" width={600} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Evento Recategorizado</p>
            </div>
          </article>
        </section>

        <section id={slugficar("Quando utilizar o botão \"Arquivar\" e o \"Arquivar + Parar de acompanhar\"?")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Quando utilizar o botão "Arquivar" e o "Arquivar + Parar de acompanhar"?</h2>
          
          <article id={slugficar("Arquivar")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Arquivar</h3>
            <p className={paragraphClass}>
              A função representa o fim da demanda recebida, seja essa demanda parcial ou final.
            </p>
            <h4 className="text-lg font-medium mt-6 mb-2 text-gray-700">Mas o que seria uma demanda parcial?</h4>
            <p className={paragraphClass}>
              Em um documento com mais de um setor envolvido terá entregas/respostas parciais de cada um dos setores. Sendo assim, você pode - e deve - arquivar a demanda após sua resposta, desta forma o solicitante ou demais envolvidos no documento saberão que a parte referente ao seu setor foi concluída e resta aos demais setores resolverem suas partes.
            </p>
            <p className={paragraphClass}>
              <strong className={strongClass}>IMPORTANTE:</strong> Lembre que os documentos da Inbox do setor são do setor como um todo e nunca pessoais! Ou seja, se você arquivar um documento, todos do seu setor terão o documento arquivado/resolvido também. O arquivamento dos documentos é de extrema importância para a organização da Inbox do setor e também para a continuidade aos processos. Para o sistema, um documento não arquivado é um documento pendente.
            </p>
          </article>

          <article id={slugficar("Arquivar + Parar de Acompanhar")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Arquivar + Parar de Acompanhar</h3>
            <p className={paragraphClass}>
              Quando uma demanda envolve múltiplos setores e estes setores precisam discutir detalhes da demanda através de despachos e seu setor não tem mais nenhuma pendência com aquela demanda, você pode então clicar em <strong className={strongClass}>Arquivar + Parar de acompanhar</strong>.
            </p>
            <p className={paragraphClass}>
              Dessa forma, o documento não reabrirá mais para seu setor mesmo que outros despachos sejam feitos pelos setores ainda envolvidos na demanda, ao menos que algum servidor de um setor ainda envolvido o encaminhe novamente ao seu.
            </p>
          </article>

          <article id={slugficar("Porque e quando devo arquivar minhas demandas?")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Porque e quando devo arquivar minhas demandas?</h3>
            <p className={paragraphClass}>
              É recomendado que sempre após responder a um documento que chegue à caixa de entrada do seu setor seja feito o arquivamento do mesmo. Clicando no botão <strong className={strongClass}>Arquivar</strong> demostra que seu setor resolveu a parte que cabia à ele no momento dentro do documento. Quando todos os setores envolvidos no documento o arquivarem significa que a demanda foi resolvida.
            </p>
            <p className={paragraphClass}>
              Além de manter a Inbox do setor organizada, o arquivamento de documentos já respondidos/resolvidos implica no Indicador Eficiência do seu setor:
            </p>
            {/* Placeholder para imagem "Indicador Eficiência" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/indicador-eficiencia.png" alt="Indicador Eficiência 1Doc" width={600} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Indicador Eficiência</p>
            </div>
            <p className={paragraphClass}>
              Quando uma demanda envolve múltiplos setores e estes setores precisam discutir detalhes da demanda através de despachos e seu setor não tem mais nenhuma pendência com aquela demanda, você pode então clicar em <strong className={strongClass}>Arquivar + Parar de acompanhar</strong>. Dessa forma, o documento não reabrirá mais para seu setor mesmo que outros despachos sejam feitos pelos setores ainda envolvidos na demanda, ao menos que algum participante encaminhe o documento novamente ao seu setor.
            </p>
            <p className={paragraphClass}>
              <strong className={strongClass}>IMPORTANTE:</strong> Arquive somente as demandas que já foram respondidas e resolvidas por ora! As demandas são para o seu setor, ou seja, se você arquivar sem resolver estará arquivando também para todos os seu setor! Arquivar uma demanda não resolvida no intuito de "limpar" a caixa de entrada trará consequências, pois todos os envolvidos no documento poderão ver o evento que é criado no documento informando que você somente arquivou sem dar a resposta solicitada.
            </p>
            <h4 className="text-lg font-medium mt-6 mb-2 text-gray-700">Boas práticas</h4>
            <p className={paragraphClass}>
              Leu a demanda e respondeu/resolveu? Arquive! Quer acompanhar a demanda mesmo após concluí-la? Clique na estrelinha no canto superior direito do documento para acompanhá-lo através da aba <strong className={strongClass}>Favoritos</strong> na Inbox do setor:
            </p>
            {/* Placeholder para imagem "Aba Favoritos" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/aba-favoritos.png" alt="Aba Favoritos 1Doc" width={500} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Aba Favoritos</p>
            </div>
          </article>

          <article id={slugficar("Arquivamento de documentos eletrônicos - Circular 017/2023")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Arquivamento de documentos eletrônicos - Circular 017/2023</h3>
            <p className="text-sm text-gray-500 mb-2">03/05/2023 13:39</p>
            <p className={paragraphClass}>Senhores usuários:</p>
            <p className={paragraphClass}>Seguem instruções sobre o arquivamento dos documentos eletrônicos:</p>
            <p className={paragraphClass}>
              O arquivamento dos documentos eletrônicos gerados no Programa Inova SBO, considerados de valor provisório, temporário ou permanente, após concluídas as providências necessárias, deverá ocorrer de acordo com as normas previstas pela instituição arquivística pública, de acordo com sua função específica e ao seguinte:
            </p>
            <ul className={listClass}>
              <li><strong className={strongClass}>I –</strong> Memorandos, Circulares, Atendimentos ao Cidadão, e-SICs e Processos Administrativos de Sindicância e Administrativos Disciplinares – PAD, deverão ser arquivados pelo respectivos órgãos que procederam a sua abertura;</li>
              <li><strong className={strongClass}>II –</strong> Demais Processos Administrativos e Proposições Legislativas deverão ser encaminhados para o Setor de Arquivo Público Municipal, que providenciará o seu arquivamento.</li>
            </ul>
            <p className={paragraphClass}>Atenciosamente.</p>
          </article>
        </section>

        <section id={slugficar("Como criar e gerenciar marcadores")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Como criar e gerenciar marcadores</h2>
          <p className={paragraphClass}>
            A plataforma 1Doc possibilita a organização de documentos por meio de marcadores. Os marcadores podem ser chamados também de tags, etiquetas ou pastas. A ideia é que cada setor crie sua própria organização e possa catalogar seus documentos (independente do assunto).
          </p>
          {/* Placeholder para imagem "Exemplo Marcadores" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/exemplo-marcadores.png" alt="Exemplo Marcadores 1Doc" width={300} height={300} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Exemplo Marcadores</p>
          </div>
          <p className={paragraphClass}>
            Para criar um marcador, acesse o menu pessoal &gt; <strong className={strongClass}>Administração</strong> e selecionar a aba <strong className={strongClass}>Marcadores</strong>.
          </p>
          <p className={paragraphClass}>
            Clique em <strong className={strongClass}>Novo marcador</strong> para dar início ao processo de criação. O sistema exibirá uma tela onde deverão ser preenchidas as seguintes informações: nome do marcador, marcador pai (se necessário), e a cor da fonte e do fundo.
          </p>
          <p className={paragraphClass}>
            <strong className={strongClass}>Dica:</strong> caso deseje selecionar uma cor escura de fundo, selecione uma cor clara de fonte.
          </p>
          <p className={paragraphClass}>
            Também é possível cadastrar um marcador rapidamente na exibição do documento a partir do ícone marcadores. Digitando o nome desejado e selecionando a opção <strong className={strongClass}>Cadastrar e marcar como</strong>, o marcador é automaticamente criado e aplicado no documento.
          </p>
          {/* Placeholder para imagem "Cadastro Rápido Marcador" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/cadastro-rapido-marcador.png" alt="Cadastro Rápido Marcador 1Doc" width={400} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Cadastro Rápido Marcador</p>
          </div>
          <p className={paragraphClass}>
            Depois de criado o marcador, pode ser editado ou suspenso quando acessado pela aba marcadores.
          </p>
          <p className={paragraphClass}>
            Para reativar um marcador que foi suspenso deve-se clicar no botão <strong className={strongClass}>Listar</strong> e selecionar a opção <strong className={strongClass}>suspensos</strong>.
            A listagem de marcadores suspensos será exibida e então deve-se clicar no botão <strong className={strongClass}>Reativar</strong> na coluna de ações.
          </p>

          <article id={slugficar("Utilizando os marcadores")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Utilizando os marcadores</h3>
            <p className={paragraphClass}>Existem duas formas de aplicar um marcador em um documento:</p>
          </article>

          <article id={slugficar("Aplicando unitariamente")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Aplicando unitariamente</h3>
            <p className={paragraphClass}>
              Para aplicar o marcador somente em um documento, basta acessar este documento e clicar no ícone <strong className={strongClass}>Marcadores</strong>. O sistema exibirá as opções disponíveis e então deve-se selecionar o marcador desejado. Lembrando que um documento pode ter mais de um marcador.
            </p>
            {/* Placeholder para imagem "Aplicar Marcador Unitariamente" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/aplicar-marcador-unit.png" alt="Aplicar Marcador Unitariamente 1Doc" width={400} height={250} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Aplicar Marcador Unitariamente</p>
            </div>
          </article>

          <article id={slugficar("Aplicando em lote")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Aplicando em lote</h3>
            <p className={paragraphClass}>
              Para aplicar um mesmo marcador em vários documentos de uma só vez, deve-se listar os documentos, marcar quais deles serão aplicados, clicar no ícone <strong className={strongClass}>Marcador</strong> e selecionar o marcador desejado.
            </p>
            {/* Placeholder para imagem "Aplicar Marcador em Lote" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/aplicar-marcador-lote.png" alt="Aplicar Marcador em Lote 1Doc" width={600} height={250} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Aplicar Marcador em Lote</p>
            </div>
          </article>

          <article id={slugficar("Filtrando/Listando Marcadores")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Filtrando/Listando Marcadores</h3>
            <p className={paragraphClass}>
              É possível buscar/filtrar documentos pelos marcadores aplicados a eles. Na listagem dos documentos, basta clicar sobre a opção <strong className={strongClass}>Com marcador</strong> e selecionar o marcador que gostaria de listar.
            </p>
            {/* Placeholder para imagem "Filtrar por Marcador" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/filtrar-marcador.png" alt="Filtrar por Marcador 1Doc" width={500} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Filtrar por Marcador</p>
            </div>
            <p className={paragraphClass}><strong className={strongClass}>Importante:</strong></p>
            <ul className={listClass}>
              <li>A lista de marcadores criados por um setor não será visível para usuários de outros setores;</li>
              <li>A exibição dos marcadores é setorial, ou seja, todos os usuários de um mesmo setor compartilharão uma única listagem de marcadores. Por este motivo, recomendamos que combinem entre si a melhor forma de organizar as informações dentro da plataforma;</li>
              <li>Se um marcador for associado a vários documentos e este for editado posteriormente, todos os documentos marcados serão afetados. Por isso tenha prudência ao editar marcadores que já foram amplamente utilizados;</li>
              <li>Usuários de outros setores não terão acesso às marcações feitas nos seus documentos.</li>
              <li>Os marcadores não são exibidos para usuários externos.</li>
            </ul>
          </article>
        </section>

        <section id={slugficar("Utilizando a funcionalidade de rascunho")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Utilizando a funcionalidade de rascunho</h2>
          <p className={paragraphClass}>
            A plataforma 1Doc possui uma funcionalidade de rascunho, que enquanto você está redigindo um documento é salvo automaticamente de tempo em tempo ou quando você clica no botão <strong className={strongClass}>Salvar rascunho e fechar</strong>. Desta forma você pode iniciar um documento agora e terminar depois.
          </p>
          <p className={paragraphClass}>
            Para utilizar esta função basta iniciar um novo documento e digitar o texto na caixa de conteúdo.
            Caso você queira terminar de redigir o seu documento em outra hora, basta clicar em <strong className={strongClass}>Salvar rascunho e fechar</strong> como mostra na imagem abaixo.
          </p>
          {/* Placeholder para imagem "Salvar Rascunho" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/salvar-rascunho.png" alt="Salvar Rascunho 1Doc" width={600} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Salvar Rascunho</p>
          </div>
          <p className={paragraphClass}>
            Para descartar um rascunho basta clicar no botão <strong className={strongClass}>Descartar rascunho</strong>.
          </p>
          <h3 className={commonSubTitleClass}>Acessando rascunhos salvos</h3>
          <p className={paragraphClass}>
            Os rascunhos salvos ficam na aba <strong className={strongClass}>Rascunhos</strong> encontrados no menu <strong className={strongClass}>Listar</strong>.
          </p>
          {/* Placeholder para imagem "Aba Rascunhos" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/aba-rascunhos.png" alt="Aba Rascunhos 1Doc" width={600} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Aba Rascunhos</p>
          </div>
          <p className={paragraphClass}>
            Se o documento estiver pronto, basta enviar normalmente.
          </p>
          <p className={paragraphClass}>
            <strong className={strongClass}>Importante:</strong> Você não pode acessar um rascunho que está sendo redigido por outro usuário.
          </p>
        </section>

        <section id={slugficar("Como criar e editar modelos de documentos e respostas")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Como criar e editar modelos de documentos e respostas</h2>
          <p className={paragraphClass}>
            Para manter o padrão nas comunicações da entidade, recomendamos a utilização dos <strong className={strongClass}>Modelos de respostas</strong>. Esses modelos poderão ser cadastrados no menu <strong className={strongClass}>Administração</strong>, aba <strong className={strongClass}>Modelos</strong>.
          </p>
          {/* Placeholder para imagem "Menu Modelos" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/menu-modelos.png" alt="Menu Modelos 1Doc" width={400} height={300} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Menu Modelos</p>
          </div>
          <p className={paragraphClass}>
            Neste local você terá a lista de modelos já criados para o seu setor e da sua Organização. Você poderá criar novos modelos, suspender ou editar modelos já criados.
          </p>

          <article id={slugficar("Criando modelos")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Criando modelos</h3>
            <p className={paragraphClass}>
              Clique em <strong className={strongClass}>Novo modelo</strong> e preencha o modelo conforme as necessidades do seu setor:
            </p>
            {/* Placeholder para imagem "Novo Modelo" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/novo-modelo.png" alt="Novo Modelo 1Doc" width={700} height={400} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Novo Modelo</p>
            </div>
            <p className={paragraphClass}>
              O campo <strong className={strongClass}>visibilidade</strong> permite que os modelo fiquem disponíveis para toda a organização ou somente para o seu setor.
            </p>
            <p className={paragraphClass}>
              Somente os usuários com o perfil de <strong className={strongClass}>Administrador</strong> poderão criar modelos documentos para toda a organização. Usuários com o perfil <strong className={strongClass}>Nível 1</strong> poderão criar modelos de documentos apenas para o setor no qual está situado.
            </p>
            <p className={paragraphClass}>
              Pronto! Agora para usar os modelos basta clicar no ícone mostrado na imagem abaixo durante a criação de novos documentos ou respostas.
            </p>
            {/* Placeholder para imagem "Usar Modelo" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/usar-modelo.png" alt="Usar Modelo 1Doc" width={500} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Usar Modelo</p>
            </div>
          </article>
        </section>

        <section id={slugficar("Usando a funcionalidade de menções")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Usando a funcionalidade de menções</h2>
          <p className={paragraphClass}>
            Uma das funcionalidades disponíveis na plataforma 1Doc são as menções. Dentro de um documento é possível mencionar tanto outros documentos existentes, contatos e usuários de um determinado setor.
          </p>

          <article id={slugficar("Mencionando documentos")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Mencionando documentos</h3>
            <p className={paragraphClass}>
              Para você referenciar um documento basta digitar o caractere <strong className={strongClass}>#</strong> (hashtag ou jogo da velha) seguido do documento ou número que gostaria de referenciar.
            </p>
            <p className={paragraphClass}>
              Uma lista irá se formar com os dados que você digitou após o caractere <strong className={strongClass}>#</strong> (hashtag ou jogo da velha).
            </p>
                       {/* Placeholder para imagem "Lista Menção Documento" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/lista-mencao-doc.png" alt="Lista Menção Documento 1Doc" width={600} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Lista Menção Documento</p>
            </div>
            <p className={paragraphClass}>
              Somente serão listados os documentos que tramitaram pelo setor no qual seu usuário está.
            </p>
          </article>

          <article id={slugficar("Referenciando pelo nome do documento")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Referenciando pelo nome do documento</h3>
            <p className={paragraphClass}>
              Informe o nome do documento após o caractere <strong className={strongClass}>#</strong> (hashtag ou jogo da velha).
            </p>
            <p className={paragraphClass}>
              Se o que você está procurando não está aparecendo na lista, você pode utilizar esta função de uma forma mais avançada, referenciando os documentos de um determinado módulo (Memorando, Circular, Protocolo, Ofício...) juntamente com o número dele. Informe o nome do documento após o caractere <strong className={strongClass}>#</strong> (hashtag ou jogo da velha) e em seguida o número do documento.
            </p>
          </article>

          <article id={slugficar("Referenciando pelo número do documento")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Referenciando pelo número do documento</h3>
            <p className={paragraphClass}>
              Informe o número do documento após o caractere <strong className={strongClass}>#</strong> (hashtag ou jogo da velha).
            </p>
            <p className={paragraphClass}>
              Após mencionar um documento ele ficará visível para leitura, caso clicado em cima do documento.
            </p>
          </article>

          <article id={slugficar("Mencionando usuários de um setor")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Mencionando usuários de um setor</h3>
            <p className={paragraphClass}>
              Em algumas situações é necessário encaminhar o documento aos cuidados de uma pessoa. Essa ação na plataforma poderá ser realizada através da funcionalidade de menções de usuários.
            </p>
            <p className={paragraphClass}>
              Para você mencionar um usuário basta digitar o caractere <strong className={strongClass}>@</strong> (arroba) seguido do nome da pessoa.
              Uma lista irá se formar com os dados que você digitou.
            </p>
            {/* Placeholder para imagem "Lista Menção Usuário" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/lista-mencao-usuario.png" alt="Lista Menção Usuário 1Doc" width={600} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Lista Menção Usuário</p>
            </div>
            <p className={paragraphClass}>
              Se a pessoa pertencer a mais de um setor, será exibido o nome da pessoa para cada setor no qual ela estiver alocada.
            </p>
            <p className={paragraphClass}>
              Todos os demais usuários que pertencerem ao setor do usuário mencionado terão acesso ao documento, pois ao mencionar um usuário o setor será envolvido automaticamente.
            </p>
          </article>

          <article id={slugficar("Mencionando contatos")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Mencionando contatos</h3>
            <p className={paragraphClass}>
              Para referenciar um contato existente em um documento, basta informar o caractere especial <strong className={strongClass}>$</strong> (cifrão) seguido do nome do contato.
            </p>
            <p className={paragraphClass}>
              Ao referenciar um contato, será gerado um link diretamente para o contato em questão.
            </p>
            <p className={paragraphClass}>
              O contato mencionado não receberá a notificação do documento, essa funcionalidade serve apenas para gerar um link que faz a referência interna.
            </p>
          </article>
        </section>

        <section id={slugficar("Solicitação de Assinatura")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Solicitação de Assinatura</h2>
          <p className={paragraphClass}>
            Uma das maneiras de solicitar a assinatura de um determinado usuário em um documento é informando o caractere especial <strong className={strongClass}>*</strong> (asterisco) seguido do nome do usuário.
          </p>
          {/* Placeholder para imagem "Solicitar Assinatura" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/solicitar-assinatura.png" alt="Solicitar Assinatura 1Doc" width={600} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Solicitar Assinatura</p>
          </div>
          <p className={paragraphClass}>
            Se a pessoa pertencer a mais de um setor, será exibido o nome da pessoa para cada setor no qual ela estiver alocada. Todos os demais usuários que pertencerem ao setor do usuário que foi solicitada a assinatura terão acesso ao documento.
          </p>
        </section>

        <section id={slugficar("Como funciona a contrassenha e como utilizá-la?")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Como funciona a contrassenha e como utilizá-la?</h2>
          <p className={paragraphClass}>
            A contrassenha é uma funcionalidade poderosa da plataforma 1Doc.
            Através dela um gestor pode fornecer um meio de documentos serem gerados em seu nome sem que ele próprio precise redigí-los. Com o uso da contrassenha pelos gestores, quem redige o documento não precisa ser quem de fato assina oficialmente o documento.
          </p>
          {/* Placeholder para imagem "Contrassenha" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/contrassenha.png" alt="Contrassenha 1Doc" width={300} height={300} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Ilustrativa Contrassenha</p>
          </div>
          <p className={paragraphClass}>
            <strong className={strongClass}>Importante:</strong> Apenas Usuários Nível 1 ou Administradores tem acesso a criação de contrassenha.
          </p>
          <p className={paragraphClass}>
            Ao gerar uma contrassenha você fornece uma maneira simples de outros usuários autorizados escrever e enviar documentos que serão gerados em seu nome, com a sua assinatura.
          </p>
          <p className={paragraphClass}>
            Para criar uma contrassenha você deve clicar no menu pessoal, no canto superior direito da tela, e então clicar no item <strong className={strongClass}>Minha conta</strong>.
          </p>
          <p className={paragraphClass}>
            Quando a página <strong className={strongClass}>Minha Conta</strong> carregar, você deve clicar na aba <strong className={strongClass}>Contrassenha</strong>. Uma tela parecida com a tela a seguir deve aparecer:
          </p>
          {/* Placeholder para imagem "Aba Contrassenha" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/aba-contrassenha.png" alt="Aba Contrassenha 1Doc" width={700} height={300} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Aba Contrassenha</p>
          </div>
          <p className={paragraphClass}>
            Após configurar o número de documentos que podem ser emitidos, clique no botão <strong className={strongClass}>Gerar</strong>.
          </p>
          <p className={paragraphClass}>
            Quando a página terminar de carregar, você verá instruções para o uso da sua contrassenha, que só deve ser fornecida para pessoas de confiança.
          </p>
          <p className={paragraphClass}>
            Note que a contrassenha é mostrada na tela apenas uma vez, portanto você precisa anotar ou memorizar o seu código gerado.
          </p>
          <p className={paragraphClass}>
            Caso deseje cancelar a sua contrassenha de forma que nenhum outro documento possa ser emitido com ela, basta clicar no botão <strong className={strongClass}>cancelar contrassenha</strong>.
          </p>

          <article id={slugficar("Utilizando as contra-senhas")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Utilizando as contra-senhas</h3>
            <p className={paragraphClass}>
              Ao iniciar o envio de um novo documento, caso haja alguém no setor com contrassenha cadastrada e ativa, aparecerá a opção <strong className={strongClass}>Alterar remetente com contrassenha</strong>.
            </p>
            {/* Placeholder para imagem "Alterar Remetente Contrassenha" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/alterar-remetente-cs.png" alt="Alterar Remetente Contrassenha 1Doc" width={600} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Alterar Remetente Contrassenha</p>
            </div>
            <p className={paragraphClass}>
              Ao clicar neste botão, aparecerá uma nova janela para digitar o nome do usuário. Escolha a pessoa que vai ser o emissor do documento que você está redigindo. Um campo solicitando uma senha aparecerá e nele você deve colocar a contrassenha fornecida pelo funcionário que será o emissor do documento. Após preencher a senha, clique em <strong className={strongClass}>Autenticar</strong>.
            </p>
            <p className={paragraphClass}>
              Caso a contrassenha esteja correta, uma mudança acontecerá no campo "De" do documento, que agora mostrará que o documento está sendo enviado pelo usuário que gerou e forneceu a contrassenha e que está sendo redigido por quem usou a contrassenha que foi criada.
            </p>
          </article>

          <article id={slugficar("Identificando documentos enviados por meio de contrassenha")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Identificando documentos enviados por meio de contrassenha</h3>
            <p className={paragraphClass}>
              Pode-se listar e consultar facilmente todos os documentos enviados por meio desta funcionalidade através da opção de <strong className={strongClass}>ver extrato de uso</strong>.
            </p>
            {/* Placeholder para imagem "Extrato de Uso Contrassenha" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/extrato-uso-cs.png" alt="Extrato de Uso Contrassenha 1Doc" width={600} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Extrato de Uso Contrassenha</p>
            </div>
          </article>
        </section>

        <section id={slugficar("Sobre anexo de arquivos")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Sobre anexo de arquivos</h2>
          <p className={paragraphClass}>
            Como você sabe, é possível anexar arquivos nos documentos emitidos dentro da plataforma 1Doc.
            Para anexar um arquivo basta clicar no botão <strong className={strongClass}>Anexar</strong> e selecionar os arquivos que gostaria incluir ao documento em questão:
          </p>
          {/* Placeholder para imagem "Botão Anexar" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/botao-anexar.png" alt="Botão Anexar 1Doc" width={600} height={150} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Botão Anexar</p>
          </div>
          <p className={paragraphClass}>
            Você também pode selecionar mais de um arquivo para ser anexado ao mesmo tempo, basta segurar a tecla <kbd>Ctrl</kbd> (Windows) ou <kbd>Command</kbd> (Mac) enquanto seleciona os arquivos.
          </p>
          <p className={paragraphClass}>
            Para remover um anexo não desejado basta clicar no ícone da lixeira ao lado do nome do arquivo. (Apenas quando estiver redigindo o documento).
          </p>

          <article id={slugficar("Restrições")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Restrições:</h3>
            <p className={paragraphClass}>
              Cada documento, por padrão, comporta no máximo 30 arquivos de no máximo 32MB (Megabytes) cada. Você gostaria de poder anexar mais de 30 arquivos e de maior tamanho? Entre em contato pelo chat com suporte para testar a funcionalidade <strong className={strongClass}>Anexos Plus</strong>.
            </p>
          </article>

          <article id={slugficar("Como saber o tamanho máximo de arquivo suportado na Plataforma?")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Como saber o tamanho máximo de arquivo suportado na Plataforma?</h3>
            <p className={paragraphClass}>
              Basta passar o mouse no ícone <strong className={strongClass}>?</strong> (interrogação) que fica perto do botão anexar (conforme print abaixo) que será apresentado um PopUp com as informações:
            </p>
            {/* Placeholder para imagem "Info Tamanho Máximo Anexo" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/info-tamanho-anexo.png" alt="Info Tamanho Máximo Anexo 1Doc" width={600} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Info Tamanho Máximo Anexo</p>
            </div>
            <p className={paragraphClass}>
              Neste caso acima, a funcionalidade <strong className={strongClass}>Anexos Plus</strong> já está disponível.
            </p>
            <p className={paragraphClass}>
              <strong className={strongClass}>Importante:</strong> identificamos que, em alguns casos mesmo o documento apresentando um tamanho menor que 64MB, a plataforma não suporta. Isso ocorre devido ao nível de complexidade do documento, principalmente quando ele contém imagens. Uma forma de contornar é comprimir (dica ao final do artigo) ou particionar este documento em mais de um despacho.
            </p>
            <p className={paragraphClass}><strong className={strongClass}>Vale lembrar:</strong></p>
            <ul className={listClass}>
              <li>Para assinatura: máximo 50 anexos por despacho, tamanho máximo de 64mb (total).</li>
              <li>Sem assinatura: máximo 100 anexos por despacho, tamanho máximo de 64mb (cada anexo).</li>
            </ul>
          </article>

          <article id={slugficar("Extensões suportadas na plataforma")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Extensões suportadas na plataforma:</h3>
            <p className={paragraphClass}>Atualmente, as extensões suportadas pela plataforma 1Doc são:</p>
            <p className="text-sm text-gray-600 bg-gray-100 p-3 rounded-md mb-4 break-all">
              .gif, .jpg, .psd, .svg, .indd, .mp3, .wav, .ogg, .avi, .mpg, .mpeg, .m4v, .png, .mp4, .3gp, .bmp, .csv, .doc, .docx, .msg, .eml, .emlx, .docm, .xlsl, .xlsx, .ppt, .pptx, .pptm, .pages, .numbers, .pdf, .rtf, .dwg, .zip, .rar, .txt, .odt, .ods, .odp, .odb, .odd, .tif, .tiff, .cdr, .odg, .gpx, .p7s, .kmz, .eps, .xml, .bbt, .ret, .dpa, .dwf
            </p>
            <p className={paragraphClass}>
              Arquivos comuns que não podem ser anexados por motivo de segurança: <code className="bg-gray-200 px-1 rounded">.com</code>, <code className="bg-gray-200 px-1 rounded">.exe</code>, <code className="bg-gray-200 px-1 rounded">.bat</code>, <code className="bg-gray-200 px-1 rounded">.msi</code>.
            </p>
            <p className={paragraphClass}>
              Caso necessite anexar algum arquivo com extensão diferente das listadas acima, entre em contato com a equipe de suporte pelo chat para verificar a possibilidade de inclusão.
            </p>
            {/* Placeholder para imagem "Chat Suporte" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/chat-suporte.png" alt="Chat Suporte 1Doc" width={300} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Chat Suporte</p>
            </div>
            <p className={paragraphClass}><strong className={strongClass}>Observação:</strong></p>
            <p className={paragraphClass}>
              Arquivos do tipo .pdf que contenham formulários, também conhecido como PDF editável não tem suporte na plataforma. Após serem assinados digitalmente, os campos preenchidos ficarão em branco.
            </p>
            <p className={paragraphClass}><strong className={strongClass}>Dica extra:</strong></p>
            <p className={paragraphClass}>
              Se o tamanho do seu arquivo de PDF ultrapassar o máximo permitido, você pode tentar comprimí-lo para poder anexar na plataforma. Existem no mercado, alguns sites que fazem isso gratuitamente (não são de responsabilidade da 1Doc):
              Adobe, Small PDF, I Love PDF.
            </p>
          </article>
        </section>

        <section id={slugficar("Como adicionar prazo a um documento")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Como adicionar prazo a um documento</h2>
          <p className={paragraphClass}>
            É comum que os documentos tramitados tenham prazo para cumprimento. Com exceção da Ouvidoria, que contém prazo automático, nos outros documentos os prazos devem ser adicionados manualmente.
          </p>
          <p className={paragraphClass}>
            Para adicionar um indicativo de prazo, após criado o documento, basta utilizar a função disponível no canto superior direito, como na imagem ao lado:
          </p>
          {/* Placeholder para imagem "Adicionar Prazo" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/adicionar-prazo.png" alt="Adicionar Prazo 1Doc" width={300} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Adicionar Prazo</p>
          </div>
          <p className={paragraphClass}>
            Após clicar neste ícone de <strong className={strongClass}>Adicionar prazo/atividade</strong>, será exibida uma janela para descrever do que se trata o prazo/atividade:
          </p>
          {/* Placeholder para imagem "Janela Adicionar Prazo" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/janela-adicionar-prazo.png" alt="Janela Adicionar Prazo 1Doc" width={600} height={400} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Janela Adicionar Prazo</p>
          </div>
          <p className={paragraphClass}>Nesta tela, existem as seguintes opções:</p>
          <ul className={listClass}>
            <li><strong className={strongClass}>Título:</strong> será exibido no calendário e na marcação dentro do documento;</li>
            <li><strong className={strongClass}>Descrição:</strong> será exibida ao abrir a janela de prazo, para dar mais detalhes sobre o prazo/atividade (opcional);</li>
            <li><strong className={strongClass}>Data:</strong> quando o prazo vence;</li>
            <li><strong className={strongClass}>Hora:</strong> qual horário de vencimento do prazo (opcional);</li>
            <li><strong className={strongClass}>Visibilidade:</strong> quem poderá ver esse prazo.</li>
            <li><strong className={strongClass}>Lembrete:</strong> forma que deseja notificar os envolvidos do prazo a vencer.</li>
            <li><strong className={strongClass}>Enviar:</strong> data em que será enviada a notificação de vencimento do prazo aos envolvidos.</li>
          </ul>
          <p className={paragraphClass}>No campo de <strong className={strongClass}>Visibilidade</strong>, estão disponíveis as seguintes opções:</p>
          <ul className={listClass}>
            <li><strong className={strongClass}>Todos envolvidos:</strong> Todos os setores que forem envolvidos neste documento poderão visualizar o prazo. É indicado o uso para quando o prazo é geral, ou seja, independente de quem esteja envolvido, o prazo final já está definido.</li>
            <li><strong className={strongClass}>Todos de setor:</strong> Nesta opção, ao criar um prazo, todas as pessoas do seu setor irão visualizar o prazo. É indicado no caso de delegação de tarefas internas, para definição de prioridades.</li>
            <li><strong className={strongClass}>Somente eu:</strong> Como o próprio nome já deixa claro, somente você verá este prazo. É indicado para a própria organização das atividades a serem desenvolvidas durante a semana, por exemplo.</li>
          </ul>
          <p className={paragraphClass}>
            Em alguns módulos é possível ainda adicionar prazo no momento de criação do documento:
          </p>
          {/* Placeholder para imagem "Adicionar Prazo na Criação" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/prazo-na-criacao.png" alt="Adicionar Prazo na Criação 1Doc" width={600} height={200} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Adicionar Prazo na Criação</p>
          </div>
          <p className={paragraphClass}>
            Para dar baixa em um prazo existente basta selecionar o ícone <strong className={strongClass}>dar baixa</strong>, conforme indicado abaixo:
          </p>
          {/* Placeholder para imagem "Dar Baixa Prazo" */}
          <div className={imageContainerClass}>
            {/* <Image src="/path/to/dar-baixa-prazo.png" alt="Dar Baixa Prazo 1Doc" width={400} height={150} className={imageClass} /> */}
            <p className="text-sm text-gray-500 italic">Placeholder: Imagem Dar Baixa Prazo</p>
          </div>
          <p className={paragraphClass}>
            <strong className={strongClass}>Importante:</strong> Quando o documento for arquivado pelo setor que adicionou o prazo, este será baixado automaticamente. Para que continue vigorando é necessário, através da edição de um prazo, selecionar a opção <strong className={strongClass}>em vigor</strong>.
          </p>

          <article id={slugficar("Como saber que um documento possui um prazo?")} className="scroll-mt-20 mt-8">
            <h3 className={commonSubTitleClass}>Como saber que um documento possui um prazo?</h3>
            <p className={paragraphClass}>
              Na lista de documentos do setor, os documentos que possuírem prazo terão uma indicação visual na coluna de <strong className={strongClass}>Última atividade</strong>, como mostrado abaixo:
            </p>
            {/* Placeholder para imagem "Indicação Prazo Lista" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/indicacao-prazo-lista.png" alt="Indicação Prazo Lista 1Doc" width={700} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Indicação Prazo Lista</p>
            </div>
            <p className={paragraphClass}>
              Já na tela de visualização do documento, será exibido logo abaixo do título do documento, uma caixa indicando os prazos existentes:
            </p>
            {/* Placeholder para imagem "Indicação Prazo Visualização" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/indicacao-prazo-visualizacao.png" alt="Indicação Prazo Visualização 1Doc" width={700} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Indicação Prazo Visualização</p>
            </div>
            <p className={paragraphClass}>
              Se existir mais de um prazo no documento, será exibido em ordem de vencimento, como na imagem abaixo:
            </p>
            {/* Placeholder para imagem "Múltiplos Prazos" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/multiplos-prazos.png" alt="Múltiplos Prazos 1Doc" width={700} height={200} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Múltiplos Prazos</p>
            </div>
            <h4 className="text-lg font-medium mt-6 mb-2 text-gray-700">Como controlar o vencimento de todos os documentos em aberto que contenham prazo?</h4>
            <p className={paragraphClass}>
              A visualização padrão de documentos no 1Doc é no formato de lista, que reflete todas as demandas que estão em aberto no setor, da mesma forma que os papeis se acumulavam sobre a mesa.
            </p>
            <p className={paragraphClass}>
              Com a visualização de calendário, os mesmos documentos em aberto, são dispostos em formato de calendário, indicando aqueles que estão próximos do vencimento em sinalização por cores.
            </p>
            <p className={paragraphClass}>
              Para acessar a visualização de calendário, basta clicar no ícone de <strong className={strongClass}>Calendário</strong>, na lista de documentos ou Inbox:
            </p>
            {/* Placeholder para imagem "Ícone Calendário" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/icone-calendario.png" alt="Ícone Calendário 1Doc" width={400} height={150} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Ícone Calendário</p>
            </div>
            <p className={paragraphClass}>
              Os documentos que tiverem prazo visível ao seu setor serão exibidos desta forma:
            </p>
            {/* Placeholder para imagem "Visualização Calendário Prazos" */}
            <div className={imageContainerClass}>
                {/* <Image src="/path/to/calendario-prazos.png" alt="Visualização Calendário Prazos 1Doc" width={700} height={400} className={imageClass} /> */}
                <p className="text-sm text-gray-500 italic">Placeholder: Imagem Visualização Calendário Prazos</p>
            </div>
            <p className={paragraphClass}>As cores significam o seguinte:</p>
            <ul className={listClass}>
              <li><strong className="text-red-600">Vermelho:</strong> Documento com prazo vencido</li>
              <li><strong className="text-yellow-500">Amarelo:</strong> Documento está com prazo está próximo de vencer</li>
              <li><strong className="text-green-600">Verde:</strong> Documento ainda bastante prazo.</li>
              <li><strong className="text-gray-500">Cinza:</strong> Documento que já foi dado baixa no prazo.</li>
            </ul>
          </article>
        </section>

        <section id={slugficar("Solicitação de assinatura - Usuários Internos e Externos")} className={commonSectionClass}>
          <h2 className={commonTitleClass}>Solicitação de assinatura - Usuários Internos e Externos</h2>
          <p className={paragraphClass}>
            No momento da solicitação de assinatura, na plataforma 1Doc - Gestão de Contratos, aparece a opção para solicitar assinaturas internas e externas.
          </p>
          <ul className={listClass}>
            <li><strong className={strongClass}>Usuários internos:</strong> São todos os usuários que fazem parte de algum setor da sua organização, ou seja, seus colegas que também utilizam a plataforma. São os usuários pagantes da 1Doc.</li>
            <li><strong className={strongClass}>Usuários externos:</strong> Todos os outros usuários que não fazem parte do organograma da sua organização e que vão precisar interagir em um documento.</li>
          </ul>
          <p className={paragraphClass}>
            <strong className={strongClass}>Exemplo:</strong> Consultando o organograma, percebe-se que a usuária "Marina" utiliza a plataforma 1Doc e está alocado no setor chamado "Secretaria de Administração". Se a Marina precisasse assinar um documento na plataforma iríamos considerá-lo como usuário interno. Deste modo ele não receberia e-mail de solicitação de assinatura e faria tal ação internamente via plataforma. Já o contato que irá receber o documento e também assinar, por não fazer parte da estrutura da empresa, seria incluído como contato externo, neste caso representado pela Empresa Geração. Ele receberia o e-mail de solicitação de assinatura express.
          </p>
          <p className={paragraphClass}>
            <strong className={strongClass}>Atenção:</strong> em casos específicos, principalmente quando relacionados ao setor de RH, deve-se considerar se o documento é para o cargo ou para funcionário. Pois ao encaminhar um documento para um cargo, todos os funcionários que ocupam aquele cargo receberão o documento, independente de estarem ou não envolvidos na demanda.
          </p>
        </section>
      </article>
    </div>
  );
}