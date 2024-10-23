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