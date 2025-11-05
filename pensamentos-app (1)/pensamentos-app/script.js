// nova mudanca

// kkk
const formulario = document.querySelector("#formulario-registro")
const textarea = document.querySelector("#input-pensamento")
const containerPosts = document.querySelector("#container-posts")
const contadorPosts = document.querySelector("#contador-posts")
const ultimoPensamento = document.querySelector("#ultimo-pensamento")
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia")

const btnFeliz = document.querySelector('feliz')
const btnNeutro = document.querySelector('neutro')
const btnTriste = document.querySelector('triste')

let totalPosts = 1 

function atualizarContador() {
  if (totalPosts === 1) {
    contadorPosts.textContent = `${totalPosts} post`
  } else {
    contadorPosts.textContent = `${totalPosts} posts`
  }
}


function verificarListaVazia() {
  const temPosts = containerPosts.children.length > 0
  mensagemListaVazia.style.display = temPosts ? "none" : "block"
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault() 
  const texto = textarea.value.trim()

  if (texto === "") {
    alert("Digite algo antes de registrar!")
    return
  }

  const article = document.createElement("article")
  article.classList.add("item-post")

  const agora = new Date()
  const dataFormatada = agora.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  })

  article.innerHTML = `
    <div class="conteudo-post">
      <p class="texto-post">${texto}</p>
      <p class="data-post">Registrado em: ${dataFormatada}</p>
    </div>
    <button class="button-excluir">X</button>
  `

  containerPosts.appendChild(article)

  totalPosts++
  atualizarContador()


  ultimoPensamento.innerHTML = `<strong>${texto}</strong>`


  verificarListaVazia()

  textarea.value = ""

  const botaoExcluir = article.querySelector(".button-excluir")
  botaoExcluir.addEventListener("click", function () {
    article.remove()
    totalPosts--
    atualizarContador()
    verificarListaVazia()
  })
})


btnFeliz.addEventListener("click", () =>
  document.body.setAttribute("data-context", "feliz")
)
btnNeutro.addEventListener("click", () =>
  document.body.setAttribute("data-context", "neutro")
)
btnTriste.addEventListener("click", () =>
  document.body.setAttribute("data-context", "triste")
)

