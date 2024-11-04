window.addEventListener("scroll", function(){
    let navbar = this.document.querySelector('#navbar')
    navbar.classList.toggle('rolagem', window.scrollY > 100)
})


const accordions = document.querySelectorAll('.esolar-duvidas__accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.esolar-duvidas__accordion-body');
        body.classList.toggle('active');
    })
})

function preencherFormularioSimulacao() {
    // Seleciona os elementos do formulário
    const potenciaSelect = document.getElementById("potencia");
    const consumoInput = document.getElementById("consumo");
    const resultadoDiv = document.getElementById("resultado");

    // Obtém os valores do formulário
    const potenciaPlaca = parseInt(potenciaSelect.value); // Potência em Watts
    const consumoMensal = parseFloat(consumoInput.value); // Consumo em kWh

    // Verifica se o consumo mensal é válido
    if (isNaN(consumoMensal) || consumoMensal <= 0) {
        resultadoDiv.textContent = "Por favor, insira um consumo mensal válido.";
        return;
    }

    // Converte a potência de W para kW e calcula a quantidade de placas necessárias
    const potenciaPlacaKW = potenciaPlaca / 1000; // Converte para kW
    const horasSol = 5; // Estimativa de horas de sol por dia
    const consumoDiario = consumoMensal / 30; // Consumo médio diário em kWh

    const placasNecessarias = Math.ceil(consumoDiario / (potenciaPlacaKW * horasSol));

    // Exibe o resultado
    resultadoDiv.textContent = `Quantidade de placas necessárias: ${placasNecessarias}`;
}