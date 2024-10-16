window.addEventListener("scroll", function(){
    let navbar = this.document.querySelector('#navbar')
    navbar.classList.toggle('rolagem', window.scrollY > 200)
})
