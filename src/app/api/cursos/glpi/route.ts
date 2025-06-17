import { NextResponse } from 'next/server';

const glpiData = {
  id: "glpi",
  titulo: "Documentação GLPI",
  capitulos: [
    {
      id: "o-que-e-o-glpi",
      titulo: "1 - O QUE É O GLPI",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "O GLPI, abreviatura para Gestion Libre de Parc Informatique, “é um sistema desenvolvido com o intuito de fornecer uma poderosa ferramenta para gerenciamento de TI e parques computacionais, tendo como principais funcionalidades o gerenciamento de HelpDesk e Inventário de equipamentos de informática de forma integrada.” Com esse sistema, o usuário poderá abrir o próprio chamado e manter um acompanhamento do mesmo de forma rápida, eficiente e interativa.",
        },
      ],
    },
    {
      id: "processo-de-atendimento",
      titulo: "2 - PROCESSO DE ATENDIMENTO",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "O GLPI permite a interação entre o usuário e o técnico perante a abertura de um chamado, garantindo que eles possam estar cientes de todas as tarefas realizadas mantendo um acompanhamento de todo processo.",
        },
      ],
    },
    {
      id: "objetivo",
      titulo: "3 - OBJETIVO",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "O presente manual tem por objetivo orientar os usuários sobre os procedimentos para abertura, acompanhamento, pesquisa de satisfação e validação dos chamados.",
        },
      ],
    },
    {
      id: "utilizando-o-sistema-glpi",
      titulo: "4 - UTILIZANDO O SISTEMA GLPI",
      conteudo: [
        {
          tipo: "subtopico",
          titulo: "LOGIN",
          conteudo: [
            {
              tipo: "paragrafo",
              texto:
                "Em um navegador web, acesse suporte.pjf.mg.gov.br.\nLogin: seu e-mail da PJF.\nSenha: a senha do e-mail da PJF.",
            },
            {
              tipo: "imagem",
              src: "/assets/icons/glpi/Login.png",
              alt: "Tela de Login do GLPI",
            },
            {
              tipo: "paragrafo",
              texto:
                "Caso o usuário não tenha o e-mail corporativo será necessário solicitar através do email suporte@pjf.mg.gov.br e ao recebê-lo mudar o método de login para “Base de Dados do GLPI”.",
            },
          ],
        },
        {
          tipo: "subtopico",
          titulo: "TELA INICIAL",
          conteudo: [
            {
              tipo: "paragrafo",
              texto:
                "Após efetuar o Login, o usuário será redirecionado para a tela inicial do sistema, onde terá à sua disposição as opções de “Criar chamado”, “Chamados”, “Reservas”, “FAQ” e acompanhar os chamados que já se encontram abertos.",
            },
            {
              tipo: "imagem",
              src: "/assets/icons/glpi/AbrirChamado.png",
              alt: "Tela Inicial do GLPI",
            },
          ],
        },
      ],
    },
    {
      id: "abrindo-um-chamado",
      titulo: "5 - ABRINDO UM CHAMADO",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "Ao fazer login, você será automaticamente encaminhado para a tela de abertura de chamados, clique em uma das opções Criar um Chamado.",
        },
        {
          tipo: "imagem",
          src: "/assets/icons/glpi/CriarChamado.png",
          alt: "Opção Criar um Chamado no GLPI",
        },
        {
          tipo: "imagem",
          src: "/assets/icons/glpi/CriarChamado2.png",
          alt: "Formulário de abertura de chamado no GLPI",
        },
        {
          tipo: "paragrafo",
          texto:
            "Para que o chamado seja encaminhado ao setor responsável, preencha todos os campos, incluindo os obrigatórios – aqueles que possuem um asterisco ao lado (*).",
        },
        {
          tipo: "lista",
          itens: [
            {
              titulo: "Tipo",
              texto: "Determina o tipo do seu chamado, podendo ser requisição ou incidente.",
              subitens: [
                {
                  subtitulo: "Requisição",
                  texto: "É toda e qualquer solicitação, contato, pedido de informação ou dúvida para acessar um serviço de Tecnologia da Informação. Ex.: Alterar a senha de um usuário; Dúvidas sobre utilização do sistema; Treinamentos; Trocar o cartucho de uma impressora; etc.",
                },
                {
                  subtitulo: "Incidente",
                  texto: "Caracteriza-se por ser uma interrupção ou falha inesperada na qualidade de um serviço de Tecnologia da Informação. Ex.: O sistema não está respondendo; A tela do sistema está indisponível; A internet está lenta; A impressora parou de funcionar; etc.",
                },
              ],
            },
            {
              titulo: "Categoria",
              texto: "A categoria é de extrema importância para que seu chamado seja delegado corretamente para o técnico responsável. Caso não haja uma categoria específica para o seu problema, escolha a que mais se assemelhe a ele e insira na descrição do chamado quais são suas necessidades.",
            },
            {
              titulo: "Localização",
              texto: "Local onde o computador se encontra. Caso não esteja disponível sua localização no sistema, favor informá-la no campo descrição.",
            },
            {
              titulo: "Observadores",
              texto: "Caso usuário queira que mais alguém acompanhe o chamado.",
            },
            {
              titulo: "Descrição",
              texto: "Faça uma descrição detalhada do seu problema, com todas as informações necessárias para que ele possa ser compreendido e solucionado da melhor forma.",
            },
            {
              titulo: "Arquivo",
              texto: "Você poderá anexar um documento. Podendo ser algo relacionado ao chamado que ajude a identificar o problema. Ex: Print de tela.",
            },
          ],
        },
        {
          tipo: "paragrafo",
          texto:
            'Por fim, clique no botão "Enviar mensagem" para abrir seu chamado. Ele será recebido e direcionado ao técnico que ficará responsável pelo mesmo.',
        },
        {
          tipo: "subtopico",
          titulo: "STATUS DE UM CHAMADO",
          conteudo: [
            {
              tipo: "paragrafo",
              texto: "No decorrer do processamento do seu chamado, ele poderá ter os seguintes status:",
            },
            {
              tipo: "lista",
              itens: [
                { titulo: "Novo", texto: "Chamado aberto sem técnico ou programador atribuído." },
                { titulo: "Processando (atribuído)", texto: "Chamado atribuído ao técnico responsável." },
                { titulo: "Processando (Planejado)", texto: "Chamado foi atribuído, porém será atendido conforme planejamento técnico." },
                { titulo: "Pendente", texto: "Status que sinaliza a dependência de terceiros." },
                { titulo: "Solucionado", texto: "Chamado solucionado, porém aguardando aprovação do usuário." },
                { titulo: "Fechado", texto: "Chamado solucionado e aprovado pelo usuário." },
              ],
            },
          ],
        },
        {
          tipo: "subtopico",
          titulo: "ADICIONANDO ACOMPANHAMENTOS",
          conteudo: [
            {
              tipo: "paragrafo",
              texto:
                "Para se comunicar com o técnico responsável pelo seu chamado, você poderá adicionar acompanhamentos ou documentos, informando-o de sua necessidade e lhe fornecendo informações que considerar importantes para a solução do chamado.",
            },
            {
              tipo: "imagem",
              src: "/assets/icons/glpi/AdicionandoAcompanhate.png",
              alt: "Interface para adicionar acompanhamentos no GLPI",
            },
            {
              tipo: "imagem",
              src: "/assets/icons/glpi/AdicionandoAcompanhate2.png",
              alt: "Exemplo de acompanhamento adicionado no GLPI",
            },
            {
              tipo: "paragrafo",
              texto: "Legenda de Cores nos Acompanhamentos:",
            },
            {
              tipo: "lista",
              itens: [
                { titulo: "Cinza", texto: "Acompanhamentos inseridos pelo requerente ou pelo técnico." },
                { titulo: "Verde", texto: "Título e descrição informados pelo requerente no momento da abertura do chamado." },
                { titulo: "Verde", texto: "Aprovação ou recusa da solução final apresentada pelo técnico." },
              ],
            },
            {
              tipo: "paragrafo",
              texto:
                "Aprovando a solução, o chamado será fechado automaticamente. Porém, caso o usuário não aprove ou recuse a solução, o chamado será fechado pelo sistema no prazo de 02 dias.",
            },
            {
              tipo: "paragrafo",
              texto:
                "Em caso de dúvidas sobre a utilização do sistema ou situações críticas, entre em contato com o suporte de informática:",
            },
            {
              tipo: "contato",
              horario: "Segunda a sexta-feira das 08h00min às 12h00min e 14h00min às 18h00min",
              telefone: "3690-7288",
              email: "suporte@pjf.mg.gov.br",
            },
          ],
        },
      ],
    },
    {
      id: "abertura-de-chamados-via-email",
      titulo: "6 - ABERTURA DE CHAMADOS VIA E-MAIL",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "Para os usuários que não possuem e-mail corporativo (@pjf.mg.gov.br) há a possibilidade da abertura dos chamados via e-mail. Para isso, deve-se enviar um e-mail para chamados@pjf.mg.gov.br informando:",
        },
        {
          tipo: "lista",
          itens: [
            { titulo: "Lotação completa", texto: "(secretaria, subsecretaria, departamento, supervisão)" },
            { titulo: "Nome", texto: "" },
            { titulo: "Ramal", texto: "" },
            { titulo: "O problema que está ocorrendo", texto: "" },
            { titulo: "O patrimônio do computador que está com problema", texto: "(se aplicável)" },
          ],
        },
        {
          tipo: "paragrafo",
          texto:
            "Dessa forma será aberto um chamado no GLPI automaticamente e o usuário receberá todas as atualizações do chamado via e-mail.",
        },
      ],
    },
    {
      id: "formularios-de-cadastro",
      titulo: "7 - FORMULÁRIOS DE CADASTRO",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "Para solicitar cadastro no SIFAN, SIAFEM, Netdein, protocolo, e-mail corporativo, liberação de redes sociais, videoconferência, compartilhamento de pastas, cadastro na rede interna e cadastro para acesso remoto é necessário preencher o formulário disponível na guia “Formulários”.",
        },
        {
          tipo: "imagem",
          src: "/assets/icons/glpi/Formularios.png",
          alt: "Formulário de cadastro GLPI",
        },
      ],
    },
    {
      id: "reserva-de-computador",
      titulo: "8 - RESERVA DE COMPUTADOR",
      conteudo: [
        {
          tipo: "paragrafo",
          texto:
            "Para que seja feita a reserva do notebook para eventos é necessário agendamento prévio. O agendamento é feito pelo sistema GLPI, segue o passo a passo para fazer o agendamento. Na página inicial do GLPI acessar a guia “Reserva”.",
        },
        {
          tipo: "paragrafo",
          texto:
            'Procure pela opção "Reservas" no menu principal. Você poderá visualizar a disponibilidade dos itens e criar uma nova reserva especificando o item desejado, data e horário de início e fim.',
        },
        {
          tipo: "imagem",
          src: "/assets/icons/glpi/Formularios2.png",
          alt: "Reserva de computador - parte 1",
        },
        {
          tipo: "imagem",
          src: "/assets/icons/glpi/Formularios3.png",
          alt: "Reserva de computador - parte 2",
        },
        {
          tipo: "imagem",
          src: "/assets/icons/glpi/Formularios4.png",
          alt: "Reserva de computador - parte 3",
        },
      ],
    },
  ],
};

// Handler para requisições GET
export async function GET(request: Request) {
  // O parâmetro 'request' está disponível se a gnt precisar ler algo da requisição,
  // como query params, headers, etc. Para este caso, não estamos usando.
  return NextResponse.json(glpiData);
}

// Galerinha adicionem outros handlers para outros métodos HTTP aqui:
// export async function POST(request: Request) { ... }
// export async function PUT(request: Request) { ... }
