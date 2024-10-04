window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 200)
})

window.addEventListener("scroll", function(){
    let logo = this.document.querySelector('#logo')
    logo.classList.toggle('rolagem', window.scrollY > 0)
})
