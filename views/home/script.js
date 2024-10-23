window.addEventListener("scroll", function(){
    let navbar = this.document.querySelector('.navbar')
    navbar.classList.toggle('rolagem', window.scrollY > 400)
})


// Seleciona o elemento do item "Energias Renováveis" e o menu principal
const energiasRenovaveisItem = document.querySelector('.dropdown'); // Item do menu dropdown
const navbar = document.getElementById('navbar'); // Navbar onde será adicionada a classe

// Função para adicionar a classe .rolagem ao passar o mouse
energiasRenovaveisItem.addEventListener('mouseenter', () => {
    navbar.classList.add('rolagem'); // Adiciona a classe .rolagem
});

// Função para remover a classe .rolagem quando o mouse sai
energiasRenovaveisItem.addEventListener('mouseleave', () => {
    navbar.classList.remove('rolagem'); // Remove a classe .rolagem
});