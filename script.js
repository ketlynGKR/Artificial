const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Para onde você gostaria de viajar?",
        alternativas: [
            {
                texto: "Para fora do Brasil",
                afirmacao: "No início você queria ir para fora do Brasil. "
            },
            {
                texto: "No Brasil",
                afirmacao: "Você não quis ir para fora do Brasil."
            }
        ]
    },
    {
        enunciado: "Com quem você iria?",
        alternativas: [
            {
                texto: "Com sua familia.",
                afirmacao: "Você decidiu ir com sua familia."
            },
            {
                texto: "Com seus amigos.",
                afirmacao: "Você decidiu ir com seus amigos."
            }
        ]
    },
    {
        enunciado: "Vocês foram para restaurante, o que você pediu?",
        alternativas: [
            {
                texto: "Yakiniku",
                afirmacao: "No restaurante você escolheu Yakiniku."
            },
            {
                texto: "Não escolhi nada.",
                afirmacao: "No restaurante você não escolheu nada."
            }
        ]
    },
    {
        enunciado: "Após sair do restaurante você encontra 100 reais no chão, o que você faz?",
        alternativas: [
            {
                texto: "Nada. Ignoro e sigo o meu caminho.",
                afirmacao: "Você ignorou os 100 reais."
            },
            {
                texto: "Pego para mim.",
                afirmacao: "Você pegou os 100 reais."
            }
        ]
    },
    {
        enunciado: "Após isso você encontrou uma loja de roupas, o que você fez? ",
        alternativas: [
            {
                texto: "Entrei e fiz a festa, comprei de tudo.",
                afirmacao: "Você entrou na loja e foi feliz."
            },
            {
                texto: "Passei reto.",
                afirmacao: "Você não entrou na loja e foi direto para casa. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();