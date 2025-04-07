<section id="API-Luminous-BookStore"> 
  <br></br>
  <div align="center">
    <img alt="Luminous Logo" src="assets/Luminous - Logo.svg" width="50%">
  </div>
  <br></br>
  <div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/Node%20js-339933?style=flat&logo=nodedotjs&logoColor=white">&nbsp;&nbsp;
    <img alt="Static Badge" src="https://img.shields.io/badge/Express%20js-000000?style=flat&logo=express&logoColor=white">&nbsp;&nbsp;
    <img alt="Static Badge" src="https://img.shields.io/badge/Mongo%20DB-white?style=flat&logo=mongodb&logoColor=%2347A248">&nbsp;&nbsp;
    <img alt="Static Badge" src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white">&nbsp;&nbsp;
  </div>
</section>

<section id="Indice">
  <h2>Índice</h2>
  <ul>
    <li><a href="#API-Luminous-BookStore">API Luminous BookStore</a></li>
    <li><a href="#Descricao-do-projeto">Descrição do projeto</a></li>
    <li><a href="#Status-do-projeto">Status do projeto</a></li>
    <li><a href="#Endpoints-da-API">Endpoints da API</a></li>
    <li><a href="#Acesso-ao-projeto">Acesso ao projeto</a></li>
    <li><a href="#Tecnicas-e-Tecnologias-aplicadas">Técnicas e Tecnologias aplicadas</a></li>
    <li><a href="#Licenca">Licença</a></li>
  </ul>
</section>

<section id="Descricao-do-projeto">
  <h2>📚 Descrição do projeto</h2>
  <p>A <strong>Luminous Bookstore API</strong> é uma aplicação backend desenvolvida com <strong>Node.js</strong>, utilizando o framework <strong>Express</strong> e o banco de dados <strong>MongoDB</strong>. Seu objetivo é gerenciar um catálogo de livros de forma simples e eficiente, oferecendo operações <strong>CRUD</strong> completas através da rota <code>/books</code>.</p>

  <p>Entre os principais recursos implementados atualmente, destacam-se:</p>
  <ul>
    <li><strong>Testes unitários</strong> com o framework <strong>Jest</strong>, garantindo maior confiabilidade do código;</li>
    <li><strong>Arquitetura MVC (Model-View-Controller)</strong>, proporcionando organização, separação de responsabilidades e facilidade na manutenção e evolução do projeto;</li>
    <li><strong>Validações e tratamento de erros</strong> aplicados por meio de middlewares personalizados, assegurando consistência nos dados enviados à API.</li>
  </ul>

  <p>Essa API pode ser utilizada como base para projetos maiores ou como apoio a aplicações frontend voltadas para o mercado editorial, livrarias virtuais ou sistemas de gerenciamento de livros.</p>
</section>

<section id="Status-do-projeto">
  <h2>📌 Status do Projeto</h2>
  <p>Atualmente, a <strong>Luminous Bookstore API</strong> encontra-se em fase de desenvolvimento ativo. A primeira versão já implementa operações CRUD para a rota <code>/books</code>, além de testes unitários com <strong>Jest</strong> e suporte à paginação.</p>

  <p>Entre as funcionalidades já implementadas ou planejadas para as próximas versões, destacam-se:</p>
  <ul>
    <li>Criação de endpoints dedicados para <code>/authors</code> e <code>/publishers</code>, permitindo o gerenciamento completo de autores e editoras;</li>
    <li>Implementação de <strong>testes de integração</strong> com o banco de dados, visando validar o comportamento completo das funcionalidades em cenários reais;</li>
    <li>Adição de <strong>validações mais robustas</strong> para garantir a integridade dos dados enviados à API;</li>
    <li>Tratamento de erros padronizado, já iniciado com o <code>bookValidationMiddleware</code>, e que será expandido para cobrir outros módulos da aplicação com mensagens de erro claras e coerentes;</li>
    <li>Documentação da API com <strong>Swagger</strong> para facilitar a visualização e uso dos endpoints por outros desenvolvedores;</li>
    <li>Melhorias na cobertura de testes e estrutura para facilitar a manutenção e escalabilidade do código.</li>
  </ul>

  <p>A API segue evoluindo com foco em boas práticas, testes e organização, buscando ser uma base sólida e didática para projetos modernos com Node.js.</p>
</section>

<section id="Endpoints-da-API">
  <h2>🔗 Endpoints da API</h2>

  <p>Abaixo estão os endpoints disponíveis na versão atual da API:</p>

  <h3>/books</h3>
  <ul>
    <li><code>GET /books</code> — Lista todos os livros com suporte à paginação;</li>
    <li><code>GET /books/:id</code> — Retorna os detalhes de um livro específico;</li>
    <li><code>POST /books</code> — Cadastra um novo livro no sistema;</li>
    <li><code>PUT /books/:id</code> — Atualiza os dados de um livro existente;</li>
    <li><code>DELETE /books/:id</code> — Remove um livro do catálogo.</li>
  </ul>

  <p><strong>Obs.:</strong> novos endpoints serão adicionados futuramente para rotas <code>/authors</code> e <code>/publishers</code>.</p>
</section>

<section id="Acesso-ao-projeto">
  <h2>📁 Acesso ao projeto</h2>
  <p>Você pode acessar o código-fonte da <strong>Luminous Bookstore API</strong> diretamente por meio deste repositório ou, se preferir, baixe o projeto como arquivo <code>.zip</code> pelo botão verde "Code" no topo da página do repositório.</p>

  <h3>🛠️ Abrir e rodar o projeto</h3>

  <p>1. Clone ou baixe o repositório no seu computador, é recomendável que você tenha o Node.js instalado 
  na versão 20.11.0 e utilize o VSCode como seu editor de código.</p>

  ```
  cd api-bookstore
  ```

  <p>2. Instale as dependências do projeto</p>

  ```
  npm install
  ```
  <p>3. Crie o arquivo .env e adicione suas variáveis de ambiente</p>

  ```
  MONGO_URI=YOUR_MONGO_URI
  PORT=YOUT_MONGO_PORT
  ```

  <p>4. Inicie o servidor da api com o comando...</p>

  ```
  npm run dev
  ```

  <p>5. Você pode executar os testes executando o seguinte comando...</p>

  ```
  npm run test
  ```
</section>

<section id="Tecnicas-e-Tecnologias-aplicadas">
  <h3>Técnicas e Tecnologias aplicadas</h3>
  <ul>
    <li><code>Node.js</code> - Permite executar código javascript fora do navegador</li>
    <li><code>Express</code> - Framework usado para criação do servidor e gerenciamento das rotas do projeto</li>
    <li><code>MongoDB Atlas</code> - Serviço usado como banco de dados</li>
    <li><code>Mongoose</code> - Biblioteca usada para realizar a conexão com banco de dados</li>
    <li><code>Jest</code> - Framework usado para realizar testes unitários</li>
    <li><code>Eslint e Prettier</code> - Ferramentas usada para Formatação e Estilo de código</li>
    <li><code>MVC (Model-View-Controller)</code> - Padrão de arquitetura utilizado para separar as responsabilidades do projeto</li>
  </ul>
</section>

<section id="Licenca">
  <h2 id="Licenca">📄 Licença</h2>
  
  <p>Este projeto está licenciado sob os termos da licença <strong>MIT</strong>.</p>
</section>

