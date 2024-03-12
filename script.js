const produtos = [
    {
        nome: "Hamburguer Smash",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 18.90,
        imagemSrc: "./assets/hamb-1.png"
    },
    {
        nome: "Hamburguer Duplo",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 32.90,
        imagemSrc: "./assets/hamb-2.png"
    },
    {
        nome: "Hamburguer Salad",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 12.90,
        imagemSrc: "./assets/hamb-3.png"
    },
    {
        nome: "Hamburguer Chesse",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 42.90,
        imagemSrc: "./assets/hamb-4.png"
    },
    {
        nome: "Hamburguer Chesse",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 42.90,
        imagemSrc: "./assets/hamb-5.png"
    },
    {
        nome: "Hamburguer Chesse",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 42.90,
        imagemSrc: "./assets/hamb-6.png"
    },
    {
        nome: "Hamburguer Chesse",
        descricao: "Pão levinho de fermentação natural de Trigo, burguer 160g, queijo prato e maionese da casa.",
        preco: 42.90,
        imagemSrc: "./assets/hamb-7.png"
    }
];

// Função para criar elementos de produto dinamicamente
function criarElementoProduto(produto) {
    const divProduto = document.createElement("div");
    divProduto.classList.add("flex", "gap-2");

    const img = document.createElement("img");
    img.src = produto.imagemSrc;
    img.alt = produto.nome;
    img.classList.add("w-28", "h-28", "rounded-md", "hover:scale-110", "hover:-rotate-2", "duration-300");

    const divDescricao = document.createElement("div");

    const nomeProduto = document.createElement("p");
    nomeProduto.classList.add("font-bold");
    nomeProduto.textContent = produto.nome;

    const descricaoProduto = document.createElement("p");
    descricaoProduto.classList.add("text-sm");
    descricaoProduto.textContent = produto.descricao;

    const divPrecoBotao = document.createElement("div");
    divPrecoBotao.classList.add("flex", "items-center", "gap-2", "justify-between", "mt-3");

    const precoProduto = document.createElement("p");
    precoProduto.classList.add("font-bold", "text-lg");
    precoProduto.textContent = `R$${produto.preco.toFixed(2)}`;

    const btnAdicionar = document.createElement("button");
    btnAdicionar.classList.add("bg-gray-900", "px-5", "rounded", "add-to-cart-btn");
    btnAdicionar.setAttribute("data-name", produto.nome);
    btnAdicionar.setAttribute("data-price", produto.preco);
    btnAdicionar.innerHTML = '<i class="fa fa-cart-plus text-lg text-white"></i>';

    divDescricao.appendChild(nomeProduto);
    divDescricao.appendChild(descricaoProduto);

    divPrecoBotao.appendChild(precoProduto);
    divPrecoBotao.appendChild(btnAdicionar);

    divProduto.appendChild(img);
    divProduto.appendChild(divDescricao);
    divProduto.appendChild(divPrecoBotao);

    return divProduto;
}

// Seleciona o container onde os produtos serão adicionados
const containerProdutos = document.getElementById("product-container");

// Loop através do array de produtos e adiciona cada um ao container
produtos.forEach(produto => {
    containerProdutos.appendChild(criarElementoProduto(produto));
});