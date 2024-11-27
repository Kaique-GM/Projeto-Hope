function menuShow() { 
    let menuMobile = document.querySelector('.navbar__mobile'); 
    let menuIcon = document.querySelector('.fa-solid'); // Seleciona o ícone atual.

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); // Fecha o menu.
        menuIcon.classList.remove('fa-xmark'); // Remove o ícone "X".
        menuIcon.classList.add('fa-bars'); // Adiciona o ícone de hambúrguer.
    } else {
        menuMobile.classList.add('open'); // Abre o menu.
        menuIcon.classList.remove('fa-bars'); // Remove o ícone de hambúrguer.
        menuIcon.classList.add('fa-xmark'); // Adiciona o ícone "X".
    }
}