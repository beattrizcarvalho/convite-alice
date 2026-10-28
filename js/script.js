
const botao = document.getElementById("abrirConvite");
const detalhes = document.getElementById("detalhesConvite");
const capa = document.querySelector(".capa");

botao.addEventListener("click", function () {
    capa.style.display = "none";
    detalhes.style.display = "block";
});

/* Confirmação de presença pelo WhatsApp */

const confirmarPresenca = document.getElementById("confirmarPresenca");

confirmarPresenca.addEventListener("click", function () {
    const numero = "5511919311868";

    const mensagem = "Olá! 🌷🦋 Gostaria de confirmar minha presença no aniversário de 1 aninho da Alice, dia 05 de dezembro, às 12h! 💗";

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(link, "_blank");
});

/* Abrir e fechar sugestões de presentes */

const botaoPresentes = document.getElementById("sugestoesPresentes");
const listaPresentes = document.getElementById("listaPresentes");

botaoPresentes.addEventListener("click", function () {
    listaPresentes.hidden = !listaPresentes.hidden;
});

/* Abertura animada do envelope */

const abrirEnvelope = document.getElementById("abrirEnvelope");
const telaEnvelope = document.getElementById("telaEnvelope");
const convitePrincipal = document.querySelector("main");

if (abrirEnvelope && telaEnvelope && convitePrincipal) {

    // Esconde o convite enquanto o envelope está fechado
    convitePrincipal.style.display = "none";

    abrirEnvelope.addEventListener("click", function () {

        // Ativa a animação do envelope
        abrirEnvelope.classList.add("aberto");

        // Espera a animação terminar
        setTimeout(function () {

            // Esconde o envelope
            telaEnvelope.style.display = "none";

            // Mostra nosso convite floral
            convitePrincipal.style.display = "flex";

        }, 1500);

    });
}


/* Voltar ao envelope inicial */

const voltarEnvelope = document.getElementById("voltarEnvelope");

voltarEnvelope.addEventListener("click", function () {
    // Esconde o convite
    convitePrincipal.style.display = "none";

    // Fecha o envelope para a próxima abertura
    abrirEnvelope.classList.remove("aberto");

    // Mostra novamente a tela inicial
    telaEnvelope.style.display = "flex";

    // Volta para o topo da página
    window.scrollTo(0, 0);
});