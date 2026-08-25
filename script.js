/* =========================================
   QUIZ AGRO SUSTENTÁVEL
========================================= */


/* =========================================
   PERGUNTAS
========================================= */

const perguntas = [

    {
        categoria: "AGRICULTURA SUSTENTÁVEL",
        pergunta:
            "Qual é um dos principais objetivos da agricultura sustentável?",
        imagem:
            "assets/agricultura-sustentavel.jpg",

        alternativas: [
            "Aumentar o desperdício de recursos naturais.",
            "Produzir de forma eficiente, buscando reduzir impactos ambientais.",
            "Eliminar completamente o uso de tecnologia.",
            "Utilizar o máximo possível de água."
        ],

        correta: 1,

        explicacao:
            "A agricultura sustentável busca conciliar produção, eficiência econômica e conservação dos recursos naturais."
    },


    {
        categoria: "USO DA ÁGUA",
        pergunta:
            "Qual prática pode ajudar a diminuir o desperdício de água na agricultura?",
        imagem:
            "assets/agua-agro.jpg",

        alternativas: [
            "Irrigar sem considerar as necessidades das plantas.",
            "Manter a irrigação ligada durante todo o dia.",
            "Utilizar sistemas de irrigação mais eficientes.",
            "Aumentar a quantidade de água utilizada."
        ],

        correta: 2,

        explicacao:
            "Sistemas de irrigação eficientes podem ajudar a fornecer água de acordo com a necessidade da cultura, reduzindo desperdícios."
    },


    {
        categoria: "BIODIVERSIDADE",
        pergunta:
            "Por que a biodiversidade é importante para o meio rural?",
        imagem:
            "assets/biodiversidade-agro.jpg",

        alternativas: [
            "Porque elimina a necessidade de preservar áreas naturais.",
            "Porque contribui para o equilíbrio dos ecossistemas.",
            "Porque impede qualquer atividade agrícola.",
            "Porque reduz a variedade de espécies."
        ],

        correta: 1,

        explicacao:
            "A biodiversidade contribui para o equilíbrio dos ecossistemas e pode desempenhar funções importantes nos ambientes agrícolas."
    },


    {
        categoria: "TECNOLOGIA",
        pergunta:
            "Como drones e sensores podem contribuir para a agricultura?",
        imagem:
            "assets/tecnologia-agro.jpg",

        alternativas: [
            "Coletando informações que ajudam no monitoramento das áreas.",
            "Aumentando obrigatoriamente o desperdício de água.",
            "Substituindo completamente todos os trabalhadores.",
            "Eliminando a necessidade de planejamento."
        ],

        correta: 0,

        explicacao:
            "Drones e sensores podem coletar informações sobre plantações, solo e condições da área, ajudando na tomada de decisões."
    },


    {
        categoria: "SOLO",
        pergunta:
            "Qual prática pode contribuir para a conservação do solo?",
        imagem:
            "assets/agricultura-sustentavel.jpg",

        alternativas: [
            "Deixar o solo sempre exposto.",
            "Aumentar processos de erosão.",
            "Utilizar práticas que reduzam a erosão.",
            "Retirar toda a vegetação das áreas rurais."
        ],

        correta: 2,

        explicacao:
            "Práticas de conservação ajudam a reduzir a erosão e manter características importantes do solo."
    },


    {
        categoria: "ENERGIA",
        pergunta:
            "Qual destas é uma fonte de energia renovável que pode ser utilizada no meio rural?",
        imagem:
            "assets/tecnologia-agro.jpg",

        alternativas: [
            "Energia solar.",
            "Carvão mineral.",
            "Petróleo.",
            "Diesel."
        ],

        correta: 0,

        explicacao:
            "A energia solar é uma fonte renovável e pode ser utilizada em propriedades rurais para diversas finalidades."
    },


    {
        categoria: "PLANEJAMENTO",
        pergunta:
            "Por que o planejamento é importante para uma produção sustentável?",
        imagem:
            "assets/agricultura-sustentavel.jpg",

        alternativas: [
            "Porque permite utilizar recursos de maneira mais eficiente.",
            "Porque elimina a necessidade de conhecer o solo.",
            "Porque aumenta obrigatoriamente os desperdícios.",
            "Porque impede o uso de tecnologias."
        ],

        correta: 0,

        explicacao:
            "O planejamento permite analisar recursos, necessidades e condições da produção, favorecendo decisões mais eficientes."
    },


    {
        categoria: "ÁGUA",
        pergunta:
            "Qual atitude representa um uso mais consciente da água?",
        imagem:
            "assets/agua-agro.jpg",

        alternativas: [
            "Ignorar vazamentos.",
            "Utilizar água sem planejamento.",
            "Monitorar o consumo e evitar desperdícios.",
            "Aumentar o consumo sempre que possível."
        ],

        correta: 2,

        explicacao:
            "Monitorar o consumo e identificar desperdícios são medidas importantes para utilizar a água de forma responsável."
    },


    {
        categoria: "BIODIVERSIDADE",
        pergunta:
            "Qual atitude favorece a conservação da biodiversidade?",
        imagem:
            "assets/biodiversidade-agro.jpg",

        alternativas: [
            "Destruir áreas de vegetação nativa.",
            "Proteger habitats e áreas de importância ambiental.",
            "Eliminar espécies diferentes.",
            "Substituir toda a diversidade por uma única espécie."
        ],

        correta: 1,

        explicacao:
            "A proteção de habitats e áreas naturais contribui para a conservação de espécies e dos ecossistemas."
    },


    {
        categoria: "TECNOLOGIA",
        pergunta:
            "O que caracteriza a agricultura de precisão?",
        imagem:
            "assets/tecnologia-agro.jpg",

        alternativas: [
            "Uso de informações e tecnologias para melhorar decisões no campo.",
            "Uso obrigatório da mesma quantidade de insumos em toda a propriedade.",
            "Ausência de dados.",
            "Abandono das tecnologias agrícolas."
        ],

        correta: 0,

        explicacao:
            "A agricultura de precisão utiliza dados, sensores, GPS e outras tecnologias para tornar o manejo mais preciso."
    }

];


/* =========================================
   VARIÁVEIS
========================================= */

let perguntaAtual = 0;
let pontos = 0;
let acertos = 0;
let respostasErradas = [];


/* =========================================
   ELEMENTOS
========================================= */

const comecarHero =
    document.getElementById("comecarHero");

const comecarQuiz =
    document.getElementById("comecarQuiz");

const quizArea =
    document.getElementById("quizArea");

const quizIntroducao =
    document.querySelector(".quiz-introducao");

const numeroPergunta =
    document.getElementById("numeroPergunta");

const pontuacao =
    document.getElementById("pontuacao");

const barraProgresso =
    document.getElementById("barraProgresso");

const imagemPergunta =
    document.getElementById("imagemPergunta");

const categoriaPergunta =
    document.getElementById("categoriaPergunta");

const textoPergunta =
    document.getElementById("textoPergunta");

const alternativas =
    document.getElementById("alternativas");

const feedback =
    document.getElementById("feedback");

const proxima =
    document.getElementById("proxima");

const resultado =
    document.getElementById("resultado");

const resultadoIcone =
    document.getElementById("resultadoIcone");

const resultadoTitulo =
    document.getElementById("resultadoTitulo");

const resultadoMensagem =
    document.getElementById("resultadoMensagem");

const resultadoPontos =
    document.getElementById("resultadoPontos");

const resultadoAcertos =
    document.getElementById("resultadoAcertos");

const resultadoPorcentagem =
    document.getElementById("resultadoPorcentagem");

const reiniciar =
    document.getElementById("reiniciar");

const revisao =
    document.getElementById("revisao");

const listaErros =
    document.getElementById("listaErros");

const voltarQuiz =
    document.getElementById("voltarQuiz");


/* =========================================
   INICIAR QUIZ
========================================= */

function iniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    acertos = 0;

    respostasErradas = [];

    pontuacao.textContent = "0";

    resultado.classList.add("escondido");

    revisao.classList.add("escondido");

    quizIntroducao.classList.add("escondido");

    quizArea.classList.remove("escondido");

    carregarPergunta();

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   CARREGAR PERGUNTA
========================================= */

function carregarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    const progresso =
        ((perguntaAtual) / perguntas.length) * 100;

    barraProgresso.style.width =
        `${progresso}%`;

    imagemPergunta.src =
        pergunta.imagem;

    imagemPergunta.alt =
        pergunta.categoria;

    categoriaPergunta.textContent =
        pergunta.categoria;

    textoPergunta.textContent =
        pergunta.pergunta;

    alternativas.innerHTML = "";

    feedback.textContent = "";

    feedback.className = "feedback";

    proxima.classList.add("escondido");


    pergunta.alternativas.forEach(
        (alternativa, indice) => {

            const botao =
                document.createElement("button");

            botao.className =
                "alternativa";

            botao.textContent =
                alternativa;

            botao.addEventListener(
                "click",
                () => verificarResposta(indice)
            );

            alternativas.appendChild(botao);

        }
    );

}


/* =========================================
   VERIFICAR RESPOSTA
========================================= */

function verificarResposta(indiceEscolhido) {

    const pergunta =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".alternativa");

    botoes.forEach(
        botao => {
            botao.disabled = true;
        }
    );


    botoes[pergunta.correta]
        .classList.add("correta");


    if (indiceEscolhido === pergunta.correta) {

        pontos++;

        acertos++;

        pontuacao.textContent =
            pontos;

        feedback.textContent =
            "✓ Resposta correta! " +
            pergunta.explicacao;

        feedback.classList.add(
            "mostrar",
            "acerto"
        );

    } else {

        botoes[indiceEscolhido]
            .classList.add("errada");

        feedback.textContent =
            "✗ Resposta incorreta. " +
            pergunta.explicacao;

        feedback.classList.add(
            "mostrar",
            "erro"
        );


        respostasErradas.push({

            pergunta: pergunta.pergunta,

            respostaEscolhida:
                pergunta.alternativas[indiceEscolhido],

            respostaCorreta:
                pergunta.alternativas[pergunta.correta],

            explicacao:
                pergunta.explicacao

        });

    }


    proxima.classList.remove("escondido");

}


/* =========================================
   PRÓXIMA PERGUNTA
========================================= */

function proximaPergunta() {

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        finalizarQuiz();

    }

}


/* =========================================
   FINALIZAR QUIZ
========================================= */

function finalizarQuiz() {

    quizArea.classList.add("escondido");

    resultado.classList.remove("escondido");

    barraProgresso.style.width =
        "100%";


    const porcentagem =
        Math.round(
            (acertos / perguntas.length) * 100
        );


    resultadoPontos.textContent =
        pontos;

    resultadoAcertos.textContent =
        acertos;

    resultadoPorcentagem.textContent =
        `${porcentagem}%`;


    if (acertos <= 4) {

        resultadoIcone.textContent =
            "🌱";

        resultadoTitulo.textContent =
            "Você está começando!";

        resultadoMensagem.textContent =
            "Você já começou a conhecer o tema. Aproveite a revisão das respostas para aprender ainda mais sobre Agro Sustentável.";

    } else if (acertos <= 7) {

        resultadoIcone.textContent =
            "🌿";

        resultadoTitulo.textContent =
            "Bom trabalho!";

        resultadoMensagem.textContent =
            "Você já possui uma boa compreensão sobre sustentabilidade no agronegócio. Continue aprendendo!";

    } else if (acertos <= 9) {

        resultadoIcone.textContent =
            "🌳";

        resultadoTitulo.textContent =
            "Excelente resultado!";

        resultadoMensagem.textContent =
            "Você demonstrou bastante conhecimento sobre práticas sustentáveis no agronegócio.";

    } else {

        resultadoIcone.textContent =
            "🏆";

        resultadoTitulo.textContent =
            "Mestre do Agro Sustentável!";

        resultadoMensagem.textContent =
            "Parabéns! Você acertou todas as perguntas e demonstrou excelente conhecimento sobre sustentabilidade no agronegócio.";

    }


    mostrarErros();

}


/* =========================================
   MOSTRAR ERROS
========================================= */

function mostrarErros() {

    listaErros.innerHTML = "";

    if (respostasErradas.length === 0) {

        listaErros.innerHTML = `
            <div class="erro-item"
                style="border-left-color:#80a83c">

                <h3>🏆 Nenhum erro!</h3>

                <p>
                    Você acertou todas as perguntas.
                    Excelente conhecimento!
                </p>

            </div>
        `;

    } else {

        respostasErradas.forEach(
            (erro, indice) => {

                const item =
                    document.createElement("div");

                item.className =
                    "erro-item";

                item.innerHTML = `

                    <h3>
                        Pergunta ${indice + 1}
                    </h3>

                    <p>
                        <strong>
                            ${erro.pergunta}
                        </strong>
                    </p>

                    <p>
                        Sua resposta:
                        ${erro.respostaEscolhida}
                    </p>

                    <p class="resposta-correta">
                        ✓ Resposta correta:
                        ${erro.respostaCorreta}
                    </p>

                    <p>
                        ${erro.explicacao}
                    </p>
                `;

                listaErros.appendChild(item);

            }
        );

    }


    revisao.classList.remove("escondido");

}


/* =========================================
   EVENTOS
========================================= */

comecarHero.addEventListener(
    "click",
    iniciarQuiz
);

comecarQuiz.addEventListener(
    "click",
    iniciarQuiz
);

proxima.addEventListener(
    "click",
    proximaPergunta
);

reiniciar.addEventListener(
    "click",
    iniciarQuiz
);

voltarQuiz.addEventListener(
    "click",
    iniciarQuiz
);


/* =========================================
   ANIMAÇÃO AO APARECER
========================================= */

const observador =
    new IntersectionObserver(
        elementos => {

            elementos.forEach(
                elemento => {

                    if (elemento.isIntersecting) {

                        elemento.target.classList.add(
                            "aparecer"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


document
    .querySelectorAll(
        ".tema, .mini-card, .fonte"
    )
    .forEach(
        elemento => {

            observador.observe(elemento);

        }
    );