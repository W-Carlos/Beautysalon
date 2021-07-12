/* abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function() {
    if(this.window.scrollY >= navHeight) {
        // adiciona a classe .scroll quando o scroll e maior que a altura do header
        header.classList.add('scroll')
    }else {
        // remove a classe .scroll quando o scroll for menor que o header
        header.classList.remove('scroll')
    }
})

/* Depoimentos carousel swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true

  });

  /* ScrollReveal: Mostrar elementos quando der scroll na página */
  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

  scrollReveal.reveal(
      `#home .image, #home .text,
       #about .image, #about .text,
       #services header, #services .card,
       #testimonials header, #testimonials .testimonials,
       #contact .text, #contact .links
      `, 
    { interval: 100 })