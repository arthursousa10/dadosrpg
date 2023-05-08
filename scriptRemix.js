const botaoLancarDados = document.getElementById("botao-lancar-dados");
const resultadoLancamento = document.getElementById("resultado-lancamento");

function lancarDados() {
    let resultado1 = Math.floor(Math.random()* 20) + 1;
    let resultado2 = Math.floor(Math.random()* 20) + 1;
    let SomaResultados = resultado1 + resultado2;
    resultadoLancamento.innerHTML = `
    <p>O resutado do lançamento dos dados foi:</p>
    <div>
      <img src="dado ${resultado1}.png" alt="Dado${resultado1}">
      <img src="dado ${resultado2}.png" alt="Dado${resultado2}">
    </div>
    <p> A soma dos resultados é: ${SomaResultados}</p>
    `;
}

botaoLancarDados.addEventListener("click", lancarDados);