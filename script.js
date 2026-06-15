const drones = document.getElementById("drones");
const irrigacao = document.getElementById("irrigacao");
const queimada = document.getElementById("queimada");

drones.addEventListener("click", function () {
    alert("Resposta incorreta!");
});

irrigacao.addEventListener("click", function () {
    alert("Parabéns! Você acertou!");
});

queimada.addEventListener("click", function () {
    alert("Resposta incorreta!");
});

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});
