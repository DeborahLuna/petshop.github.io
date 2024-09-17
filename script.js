// Lista de produtos
const produtos = [
  {
    nome: "Ração Seca 1",
    tipo: "Pequeno Porte",
    preco: 100,
    descricao: "Racão seca para animais de pequeno porte.",
    imagens: [
      "racao-seca-1.jpg",
      "racao-seca-2.jpg",
      "racao-seca-3.jpg",
    ],
  },
  {
    nome: "Ração Úmida 3",
    tipo: "Pequeno Porte",
    preco: 150,
    descricao: "Racão úmida para animais de pequeno porte.",
  },
  {
    nome: "Ração Seca 2",
    tipo: "Grande Porte",
    preco: 100,
    descricao: "Racão seca para animais de grande porte.",
  },
  {
    nome: "Ração Seca 3",
    tipo: "Grande Porte",
    preco: 140,
    descricao: "Racão seca para animais de grande porte.",
  },
  {
    nome: "Ração Seca 4",
    tipo: "Grande Porte",
    preco: 100,
    descricao: "Racão seca para animais de grande porte.",
    imagens: [
      "racao-seca-1.jpg",
      "racao-seca-2.jpg",
      "racao-seca-3.jpg",
    ],
  },
  {
    nome: "Ração Úmida 1",
    tipo: "Grande Porte",
    preco: 180,
    descricao: "Racão úmida para animais de grande porte.",
    imagens: ["racao-umida-1.webp", "racao-umida-2.jpeg"],
  },
  {
    nome: "Ração Úmida 2",
    tipo: "Grande Porte",
    preco: 120,
    descricao: "Racão úmida para animais de grande porte.",
  },
  {
    nome: "Ração Úmida 4",
    tipo: "Grande Porte",
    preco: 160,
    descricao: "Racão úmida para animais de grande porte.",
    imagens: ["racao-umida-1.webp", "racao-umida-2.jpeg"],
  },
];

//Lista de serviços
const servicos = [
  {
    nome: "Banho Pequeno Porte",
    tipo: "Pequeno Porte",
    preco: 100,
    descricao: "Banho para animais de pequeno porte.",
  },
  {
    nome: "Tosa Pequeno Porte",
    tipo: "Pequeno Porte",
    preco: 100,
    descricao: "Tosa para animais de pequeno porte.",
  },
  {
    nome: "Tosa Grande Porte",
    tipo: "Grande Porte",
    preco: 120,
    descricao: "Tosa para animais de grande porte.",
  },
  {
    nome: "Banho Grande Porte",
    tipo: "Grande Porte",
    preco: 120,
    descricao: "Banho para animais de grande porte.",
  },
];

// Função para criar cards de produtos com carrossel de imagens
function criarCardProduto(produto) {
  let imagensCarousel = "";

  // Verifica se o produto possui várias imagens
  if (produto.imagens && produto.imagens.length > 1) {
    imagensCarousel = `
      <div id="carousel-${produto.nome.replace(
        /\s/g,
        ""
      )}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${produto.imagens
            .map(
              (imagem, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              <img src="${imagem}" class="d-block w-100" alt="${produto.nome}">
            </div>
          `
            )
            .join("")}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${produto.nome.replace(
          /\s/g,
          ""
        )}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${produto.nome.replace(
          /\s/g,
          ""
        )}" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>
    `;
  } else {
    // Caso tenha apenas uma imagem ou nenhuma array de imagens
    imagensCarousel = `<img src="${
      produto.imagens ? produto.imagens[0] : "embalagem-racao.png"
    }" class="card-img-top" alt="${produto.nome}">`;
  }

  // Retorno do card com o carrossel ou imagem única
  return `
        <div class="col-6 col-md-3 col-12">
            <div class="card">
                ${imagensCarousel}
                <div class="card-body">
                    <p class="card-text">${produto.nome}</p>
                    <a class="link-detalhes" data-nome="${produto.nome}" onclick="mostrarDetalhesProduto('${produto.nome}')">Ver Detalhes</a>
                    <button class="btn btn-filled">Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    `;
}

// Função para criar cards de servicos
function criarCardServico(servico) {
  return `
        <div class="col-6 col-md-3 col-12">
            <div class="card">
                <img src="dog-bath.png" class="card-img-top" alt="${servico.nome}">
                <div class="card-body">
                    <p class="card-text">${servico.nome}</p>
                    <a class="link-detalhes" data-nome="${servico.nome}" onclick="mostrarDetalhesServico('${servico.nome}')">Ver Detalhes</a>
                    <button class="btn btn-filled" onclick="mostrarAgendamentoServico('${servico.nome}')">Agendar</button>
                </div>
            </div>
        </div>
    `;
}

// Exibir produtos filtrados por categoria
function exibirProdutosPorCategoria(tipo) {
  const produtosSelecionados = produtos.filter((p) => p.tipo === tipo);
  const container = document.getElementById("produtosSelecionados");
  container.innerHTML = produtosSelecionados.map(criarCardProduto).join("");
}

// Exibir servicos filtrados por categoria
function exibirServicosPorCategoria(tipo) {
  const servicosSelecionados = servicos.filter((s) => s.tipo === tipo);
  const container = document.getElementById("servicosSelecionados");
  container.innerHTML = servicosSelecionados.map(criarCardServico).join("");
}

// Exibir todos os produtos
function exibirTodosProdutos() {
  const container = document.getElementById("todosProdutos");
  container.innerHTML = produtos.map(criarCardProduto).join("");
}

// Exibir todos os servicos
function exibirTodosServicos() {
  const container = document.getElementById("todosServicos");
  container.innerHTML = servicos.map(criarCardServico).join("");
}

// Função para mostrar os detalhes do produto
function mostrarDetalhesProduto(nomeProduto) {
  // Oculta todas as outras seções
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("d-none");
  });

  // Exibe a seção de detalhes do produto
  const detalhesProdutoSection = document.getElementById("detalhesProduto");
  detalhesProdutoSection.classList.remove("d-none");

  // Preenche os detalhes do produto na seção de detalhes
  document.querySelector("#detalhesProduto h1").textContent = nomeProduto;

  const produto = produtos.find((p) => p.nome === nomeProduto);
  if (produto) {
    document.querySelector(
      "#detalhesProduto .product-description"
    ).textContent = `Descrição de ${produto.nome}`;
    document.querySelector(
      "#detalhesProduto .product-price"
    ).textContent = `R$${produto.preco},00`;
  }
}

// Função para mostrar os detalhes do serviço
function mostrarDetalhesServico(nomeServico) {
  // Oculta todas as outras seções
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("d-none");
  });

  // Exibe a seção de detalhes do serviço
  const detalhesServicoSection = document.getElementById("detalhesServico");
  detalhesServicoSection.classList.remove("d-none");

  // Preenche os detalhes do serviço na seção de detalhes
  document.querySelector("#detalhesServico h1").textContent = nomeServico;

  const servico = servicos.find((s) => s.nome === nomeServico);
  if (servico) {
    document.querySelector(
      "#detalhesServico .service-description"
    ).textContent = `Descrição de ${servico.nome}`;
    document.querySelector(
      "#detalhesServico .service-price"
    ).textContent = `R$${servico.preco},00`;
  }
}

function mostrarAgendamentoServico(nomeServico) {
  // Oculta todas as outras seções
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("d-none");
  });

  // Exibe a seção de agendamento do serviço
  const agendamentoSection = document.getElementById("agendamento");
  agendamentoSection.classList.remove("d-none");

  // Preenche o nome do serviço na secão de agendamento
  document.querySelector("#agendamento h1").textContent = nomeServico;
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  // Obtém todos os links de navegação
  const navLinks = document.querySelectorAll("nav a");

  // Adiciona um listener de evento a cada link de navegação
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Previne o comportamento padrão do link

      // Obtém o ID da seção que o link aponta
      const targetId = this.getAttribute("href").substring(1);

      // Oculta todas as seções
      document.querySelectorAll("section").forEach((section) => {
        section.classList.add("d-none");
      });

      // Exibe a seção correspondente
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("d-none");
      }
    });
  });

  // Exibe a seção inicial (opcional, por exemplo, "produtos")
  const initialSection = document.getElementById("produtos");
  if (initialSection) {
    initialSection.classList.remove("d-none");
  }

  exibirProdutosPorCategoria("Pequeno Porte");
  exibirTodosProdutos();

  // Alternar entre categorias
  document.getElementById("smallPets").addEventListener("click", function () {
    exibirProdutosPorCategoria("Pequeno Porte");
  });

  document.getElementById("largePets").addEventListener("click", function () {
    exibirProdutosPorCategoria("Grande Porte");
  });

  exibirServicosPorCategoria("Pequeno Porte");
  exibirTodosServicos();

  // Alternar entre categorias
  document
    .getElementById("pequenosPets")
    .addEventListener("click", function () {
      exibirServicosPorCategoria("Pequeno Porte");
    });

  document.getElementById("grandesPets").addEventListener("click", function () {
    exibirServicosPorCategoria("Grande Porte");
  });
});
