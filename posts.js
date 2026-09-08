const posts = [
    {
        id: 1,
        title: "A importância da prevenção",
        category: "Prevenção",
        icon: "🛡️",
        description:
            "Entenda por que hábitos preventivos e acompanhamento regular podem ajudar a cuidar melhor da saúde.",
        readTime: "4 min",
        color: "blue"
    },

    {
        id: 2,
        title: "Alimentação equilibrada no dia a dia",
        category: "Alimentação",
        icon: "🥗",
        description:
            "Veja algumas ideias para construir uma rotina alimentar mais equilibrada e variada.",
        readTime: "5 min",
        color: "green"
    },

    {
        id: 3,
        title: "Cuidando da saúde mental",
        category: "Saúde mental",
        icon: "🧠",
        description:
            "Conheça atitudes simples de autocuidado e saiba quando pode ser importante buscar ajuda profissional.",
        readTime: "6 min",
        color: "purple"
    },

    {
        id: 4,
        title: "Movimente seu corpo",
        category: "Atividade física",
        icon: "🏃",
        description:
            "Descubra como incluir mais movimento na rotina respeitando seus limites e condições.",
        readTime: "4 min",
        color: "orange"
    },

    {
        id: 5,
        title: "Por que dormir bem importa?",
        category: "Sono",
        icon: "😴",
        description:
            "O sono participa de diferentes processos importantes para o funcionamento do organismo.",
        readTime: "5 min",
        color: "indigo"
    },

    {
        id: 6,
        title: "Primeiros cuidados em situações comuns",
        category: "Primeiros cuidados",
        icon: "🩹",
        description:
            "Informações gerais sobre como agir com segurança diante de algumas situações comuns.",
        readTime: "7 min",
        color: "red"
    }
];


const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");


// Cria os cards dos conteúdos
function renderPosts(postsToRender) {

    postsContainer.innerHTML = "";

    if (postsToRender.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    postsToRender.forEach(post => {

        const article = document.createElement("article");

        article.className = "post-card";

        article.innerHTML = `
            <div class="post-image ${post.color}">
                <span>${post.icon}</span>
            </div>

            <div class="post-content">

                <span class="post-category">
                    ${post.category}
                </span>

                <h3>
                    ${post.title}
                </h3>

                <p>
                    ${post.description}
                </p>

                <div class="post-footer">
                    <span>📖 ${post.readTime}</span>

                    <button
                        class="read-button"
                        onclick="showPost(${post.id})"
                    >
                        Ler conteúdo →
                    </button>
                </div>

            </div>
        `;

        postsContainer.appendChild(article);
    });
}


// Busca por título, categoria e descrição
function searchPosts() {

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    const filteredPosts = posts.filter(post => {

        return (
            post.title.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm) ||
            post.description.toLowerCase().includes(searchTerm)
        );

    });

    renderPosts(filteredPosts);
}


// Filtro por categoria
function filterByCategory(category) {

    const filteredPosts = posts.filter(
        post => post.category === category
    );

    searchInput.value = "";

    renderPosts(filteredPosts);

    document
        .getElementById("conteudos")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Mostra uma mensagem quando o usuário seleciona um artigo
function showPost(id) {

    const post = posts.find(post => post.id === id);

    if (!post) return;

    alert(
        `${post.title}\n\n` +
        `${post.description}\n\n` +
        `Este conteúdo faz parte do projeto educativo CUIDA+.\n\n` +
        `Para orientações específicas sobre sua saúde, procure um profissional de saúde.`
    );
}


// Eventos da busca
searchInput.addEventListener(
    "input",
    searchPosts
);


// Eventos dos botões de categoria
document.querySelectorAll(".category-card").forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        filterByCategory(category);

    });

});


// Carrega todos os posts ao abrir o site
renderPosts(posts);
