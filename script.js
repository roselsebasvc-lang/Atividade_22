// 1. Roteador de Métodos HTTP
// Cenário: Quando criamos uma API, uma mesma URL pode realizar ações diferentes dependendo do "método" enviado pelo cliente (GET para buscar, POST para salvar, etc.).
// Tarefa: Crie uma variável const metodoHttp e atribua a ela uma string (ex: "GET", "POST", "PUT", "DELETE"). Use um switch para simular o comportamento da API:
// - Se for "GET": imprima "Buscando dados no banco de dados..."
// - Se for "POST": imprima "Criando um novo registro..."
// - Se for "PUT": imprima "Atualizando os dados do registro..."
// - Se for "DELETE": imprima "Registro removido com sucesso."
// - Padrão (default): imprima "Erro: Método não permitido para esta rota."

const metodoHttp = prompt("Digite a string:");

switch (metodoHttp) {
  case "GET":
    console.log("Buscando dados no banco de dados...");
    break;

  case "POST":
    console.log("Criando um novo registro...");
    break;

  case "PUT":
    console.log("Atualizando os dados do registro...");
    break;

  case "DELETE":
    console.log("Registro removido com sucesso.");
    break;

  default:
    console.log("Erro: Método não permitido para esta rota.");
    break;
}


// 2. Seletor de Banco de Dados por Ambiente
// Cenário: Aplicações reais rodam em diferentes ambientes (no computador do programador, no servidor de testes ou no servidor real para os clientes). O sistema precisa saber em qual banco de dados se conectar dependendo de onde está rodando.
// Tarefa: Crie uma variável const ambiente (ex: "dev", "test", "prod"). Use um switch/case para definir a conexão:
// - "dev" (Desenvolvimento): imprima "Conectando ao banco de dados local (SQLite)."
// - "test" (Testes): imprima "Conectando ao banco de dados em memória."
// - "prod" (Produção): imprima "Conectando ao banco de dados oficial na nuvem (PostgreSQL)."
// - Padrão: imprima "CRÍTICO: Ambiente não reconhecido. Encerrando o servidor."


const ambiente = prompt("Digite a aplicação:");

switch (ambiente) {
  case "dev":
    console.log("Conectando ao banco de dados local (SQLite).");
    break;

  case "test":
    console.log("Conectando ao banco de dados em memória.");
    break;

  case "prod":
    console.log("Conectando ao banco de dados oficial na nuvem (PostgreSQL).");
    break;

  default:
    console.log("CRÍTICO: Ambiente não reconhecido. Encerrando o servidor.");
    break;
}


// 3. Processador de Comandos do Terminal (CLI)
// Cenário: Você está criando um script de terminal (como as ferramentas do Docker ou do próprio Node) e precisa processar os comandos que o usuário digita na tela preta.
// Tarefa: Crie uma variável const comando (ex: "start", "stop", "restart", "status"). Use um switch para ditar a ação do sistema. Dica para a turma: Agrupe casos (fall-through) se a ação for a mesma!
// - "start" ou "restart": imprima "Iniciando o servidor de aplicação..." (As duas ações devem cair na mesma mensagem).
// - "stop": imprima "Desligando o servidor com segurança..."
// - "status": imprima "O servidor está rodando na porta 3000."
// - Padrão: imprima "Comando não encontrado. Digite 'help' para ver a lista de comandos."

const comando = prompt("Digitar a o nome da ferramenta:");

switch (comando) {
  case "start":
  case "restart":
    console.log("Iniciando o servidor de aplicação...");
    break;

  case "stop":
    console.log("Desligando o servidor com segurança...");
    break;

  case "status":
    console.log("O servidor está rodando na porta 3000.");
    break;

  default:
    console.log("Comando não encontrado. Digite 'help' para ver a lista de comandos.");
    break;
}


// 4. Tratamento de Códigos de Status HTTP (Status Codes)
// Cenário: Ao consumir uma API externa, sua aplicação recebe um código numérico indicando se a requisição deu certo ou qual tipo de erro aconteceu. O sistema precisa exibir uma mensagem amigável para o usuário final.
// Tarefa: Crie uma variável const statusCode (ex: 200, 201, 400, 401, 404, 500). Use um switch para traduzir o código da resposta (agrupando códigos semelhantes quando fizer sentido).
// Condições:
// - 200 ou 201: imprima "Sucesso: Requisição processada corretamente."
// - 400: imprima "Erro na requisição: Verifique os dados enviados."
// - 401 ou 403: imprima "Acesso negado: Você não tem permissão ou precisa fazer login."
// - 404: imprima "Não encontrado: O recurso solicitado não existe."
// - 500: imprima "Erro interno no servidor: Tente novamente mais tarde."
// - Padrão (default): imprima "Código de status desconhecido."

const statusCode = +prompt("Digitar o número da requisição"));

switch (statusCode) {
  case 200:
  case 201:
    console.log("Sucesso: Requisição processada corretamente.");
    break;

  case 400:
    console.log("Erro na requisição: Verifique os dados enviados.");
    break;

  case 401:
  case 403:
    console.log("Acesso negado: Você não tem permissão ou precisa fazer login.");
    break;

  case 404:
    console.log("Não encontrado: O recurso solicitado não existe.");
    break;

  case 500:
    console.log("Erro interno no servidor: Tente novamente mais tarde.");
    break;

  default:
    console.log("Código de status desconhecido.");
    break;
}


// 5. Controle de Permissões de Usuário (RBAC - Role-Based Access Control)
// Cenário: Em um painel administrativo (como um sistema escolar ou CRM), cada perfil de usuário tem acesso a um conjunto específico de funcionalidades após o login.
// Tarefa: Crie uma variável const perfilUsuario (ex: "admin", "editor", "aluno", "visitante"). Use um switch para exibir o nível de permissão liberado no sistema.
// Condições:
// - "admin": imprima "Acesso Total: Gerenciar usuários, configurações e conteúdos."
// - "editor": imprima "Acesso Intermediário: Criar e editar conteúdos publicados."
// - "aluno" ou "visitante": imprima "Acesso Somente Leitura: Visualizar materiais disponíveis."
// - Padrão (default): imprima "Perfil inválido: Conta bloqueada por segurança."

const perfilUsuario = prompt("Fazer logim");

switch (perfilUsuario) {
  case "admin":
    console.log("Acesso Total: Gerenciar usuários, configurações e conteúdos.");
    break;

  case "editor":
    console.log("Acesso Intermediário: Criar e editar conteúdos publicados.");
    break;

  case "aluno":
  case "visitante":
    console.log("Acesso Somente Leitura: Visualizar materiais disponíveis.");
    break;

  default:
    console.log("Perfil inválido: Conta bloqueada por segurança.");
    break;
}


// 6. Processador de Eventos de Webhook de Pagamento
// Cenário: Quando um cliente paga um boleto, Pix ou cartão em um e-commerce, o gateway de pagamento (como Stripe ou Mercado Pago) envia um evento automático (webhook) avisando o que ocorreu com a transação.
// Tarefa: Crie uma variável const eventoPagamento (ex: "payment.approved", "payment.pending", "payment.failed", "payment.refunded"). Use um switch para atualizar o status do pedido.
// Condições:
// - "payment.approved": imprima "Pagamento confirmado! Liberando envio do produto."
// - "payment.pending": imprima "Aguardando compensação do pagamento..."
// - "payment.failed": imprima "Falha no pagamento: Notificando cliente para tentar outro cartão."
// - "payment.refunded": imprima "Estorno realizado: Cancelando pedido e devolvendo estoque."
// - Padrão (default): imprima "Evento ignorado pelo sistema."

const eventoPagamento = prompt("Realizar o pagamento:");

switch (eventoPagamento) {
  case "payment.approved":
    console.log("Pagamento confirmado! Liberando envio do produto.");
    break;

  case "payment.pending":
    console.log("Aguardando compensação do pagamento...");
    break;

  case "payment.failed":
    console.log("Falha no pagamento: Notificando cliente para tentar outro cartão.");
    break;

  case "payment.refunded":
    console.log("Estorno realizado: Cancelando pedido e devolvendo estoque.");
    break;

  default:
    console.log("Evento ignorado pelo sistema.");
    break;
}

// 7. Roteador de Extensões de Arquivos para Upload
// Cenário: Um sistema de armazenamento em nuvem analisa a extensão do arquivo enviado pelo usuário para decidir em qual pasta salvá-lo ou se deve bloquear o envio por segurança.
// Tarefa: Crie uma variável const extensaoArquivo (ex: ".jpg", ".png", ".pdf", ".mp4", ".exe"). Use um switch (aproveitando o agrupamento de casos) para classificar o arquivo.
// Condições:
// - ".jpg", ".png" ou ".gif": imprima "Arquivo de imagem detectado. Salvando na galeria..."
// - ".pdf" ou ".docx": imprima "Documento detectado. Salvando na pasta de arquivos..."
// - ".mp4" ou ".mov": imprima "Vídeo detectado. Enviando para processamento de mídia..."
// - ".exe" ou ".bat": imprima "Bloqueado: Arquivos executáveis não são permitidos por segurança."
// - Padrão (default): imprima "Formato não suportado pelo sistema."

const extensaoArquivo = prompt("Escolher o arquivo");

switch (extensaoArquivo) {
  case ".jpg":
  case ".png":
  case ".gif":
    console.log("Arquivo de imagem detectado. Salvando na galeria...");
    break;

  case ".pdf":
  case ".docx":
    console.log("Documento detectado. Salvando na pasta de arquivos...");
    break;

  case ".mp4":
  case ".mov":
    console.log("Vídeo detectado. Enviando para processamento de mídia...");
    break;

  case ".exe":
  case ".bat":
    console.log("Bloqueado: Arquivos executáveis não são permitidos por segurança.");
    break;

  default:
    console.log("Formato não suportado pelo sistema.");
    break;
}
