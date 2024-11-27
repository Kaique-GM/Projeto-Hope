window.addEventListener("scroll", function(){
    let navbar = this.document.querySelector('#navbar')
    navbar.classList.toggle('rolagem', window.scrollY > 10)
})


const accordions = document.querySelectorAll('.esolar-duvidas__accordion');


document.querySelectorAll('.esolar-duvidas__accordion-header button').forEach(button => {
    button.addEventListener('click', () => {
        // Alterna a classe 'active' no corpo do acordeão
        const accordionBody = button.parentElement.nextElementSibling;
        accordionBody.classList.toggle('active');

        // Alterna a classe 'opened' no botão para ajustar o estilo
        button.classList.toggle('opened');
    });
});

function preencherFormularioSimulacao(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão.

    // Seleciona os elementos do formulário
    const potenciaSelect = document.getElementById("potencia");
    const consumoInput = document.getElementById("consumo");
    const erroMensagem = document.getElementById("erroMensagem");
    // Obtém os valores do formulário
    const potenciaPlaca = parseInt(potenciaSelect.value); // Potência em Watts
    const consumoMensal = parseFloat(consumoInput.value); // Consumo em kWh

    // Verifica se o consumo mensal é válido
    if (isNaN(consumoMensal) || consumoMensal <= 0 || isNaN(potenciaPlaca)) {
        // Exibe a mensagem de erro
        erroMensagem.style.display = "flex";
        return; 
    }

    // Converte a potência de W para kW e calcula a quantidade de placas necessárias
    const potenciaPlacaKW = potenciaPlaca / 1000; // Converte para kW
    const horasSol = 5; // Estimativa de horas de sol por dia
    const consumoDiario = consumoMensal / 30; // Consumo médio diário em kWh


    const placasNecessarias = Math.ceil(consumoDiario / (potenciaPlacaKW * horasSol));
    // Seleciona a seção do formulário
    const form = document.querySelector('.forminvestimento__content');

    // Verifica se o resultado já foi criado
    const resultadoExistente = document.querySelector('.forminvestimento__resultado');
    if (resultadoExistente) return; // Impede que o resultado seja recriado.

   // Esconde o formulário
   form.style.display = 'none';

   // Cria o container do resultado
   const resultadoContainer = document.createElement('div');
   resultadoContainer.classList.add('forminvestimento__resultado');
   resultadoContainer.innerHTML = `
    <button class="forminvestimento__voltar" onclick="voltarAoFormulario()"><i class="fa-solid fa-arrow-left"></i></button>
       <h2>Quantidade de placas necessárias</h2>
       <p>Com base no consumo informado, você precisará de <strong>${placasNecessarias}</strong> placas solares 
       com uma potência de ${potenciaPlaca}W.</p>
   `;

   // Adiciona o container do resultado no lugar do formulário
   form.parentElement.appendChild(resultadoContainer);
}

// Função para voltar ao formulário
function voltarAoFormulario() {
    const form = document.querySelector('.forminvestimento__content');
    const resultadoContainer = document.querySelector('.forminvestimento__resultado');
    const erroMensagem = document.getElementById("erroMensagem");
    // Remove a tela de resultado
    resultadoContainer.remove();

    erroMensagem.style.display = "none";

    // Exibe novamente o formulário
    form.style.display = 'block';
}

/*function preencherFormularioSimulacao(event) {
    event.preventDefault(); // Evita o comportamento padrão do botão.

    // Seleciona a seção do formulário
    const form = document.querySelector('.forminvestimento__content');

    // Verifica se o resultado já foi criado
    const resultadoExistente = document.querySelector('.forminvestimento__resultado');
    if (resultadoExistente) return; // Impede que o resultado seja recriado.

    // Esconde o formulário
    form.style.display = 'none';

    // Cria o container do resultado
    const resultadoContainer = document.createElement('div');
    resultadoContainer.classList.add('forminvestimento__resultado');
    resultadoContainer.innerHTML = `
        <h2>Quantidade de placas</h2>
        <p>Aqui será exibido o cálculo do investimento.</p>
        
    `;

    // Adiciona o container do resultado no lugar do formulário
    form.parentElement.appendChild(resultadoContainer);
} */
