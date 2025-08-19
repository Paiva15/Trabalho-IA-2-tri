const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que responde dúvidas e gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
    alternativas: [
      { texto: "Isso é assustador!", afirmacao: "Você tem receio da IA." },
      { texto: "Isso é maravilhoso!", afirmacao: "Você está empolgado com a IA." }
    ]
  },
  {
    enunciado: "Essa IA começa a ser usada em salas de aula. Como você reage?",
    alternativas: [
      { texto: "Ela vai substituir professores.", afirmacao: "Você teme pela educação." },
      { texto: "Ela pode ajudar estudantes a aprender mais rápido.", afirmacao: "Você vê potencial positivo na educação." }
    ]
  },
  {
    enunciado: "A IA agora participa de decisões políticas. O que você pensa?",
    alternativas: [
      { texto: "Isso é perigoso, pode manipular pessoas.", afirmacao: "Você desconfia do uso político da IA." },
      { texto: "Pode ser útil se usada com ética.", afirmacao: "Você confia no uso responsável da IA." }
    ]
  }
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

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada.afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Fim da missão!";
  caixaAlternativas.textContent = "";
  textoResultado.textContent = historiaFinal;
}

mostraPergunta();
