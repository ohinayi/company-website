const overlay = document.querySelector(".overlay");
const bar = document.querySelector(".bars");
const times = document.querySelector(".times");
const sidebar = document.querySelector(".side-bar");
const openNav = () =>{
    overlay.classList.add('show')
    bar.classList.add('hide');
    sidebar.classList.add('open-nav')
}
const closeNav = () =>{
    overlay.classList.remove('show')
    bar.classList.remove('hide');
    sidebar.classList.remove('open-nav')


}

ScrollReveal({ reset: true }).reveal('#intro', {delay: 200})
ScrollReveal({reset: true}).reveal('#about', {delay: 200})
// scrollreveal({reset: true}).reveal('.title1', {delay: 200})
// scrollreveal({reset: true}).reveal('.aims')
// scrollreveal({reset: true}).reveal('.aim:nth-child(1)',{ delay : 300})
// scrollreveal({reset: true}).reveal('.aim:nth-child(2)', { delay : 300})
// scrollreveal({reset: true}).reveal('.aim:nth-child(3)', { delay : 300})

// scrollreveal({reset: true}).reveal('.us', { delay : 300})
ScrollReveal({reset: true}).reveal('#services .card:nth-child(2)', { delay : 300})
ScrollReveal({reset: true}).reveal('#services .card:nth-child(1)',{ delay : 300})
ScrollReveal({reset: true}).reveal('#services .card:nth-child(3)', { delay : 300})
ScrollReveal({reset: true}).reveal('#services .card:nth-child(4)', { delay : 300})
ScrollReveal({reset: true}).reveal('#contact', { delay : 300})

bar.addEventListener("click", openNav)
overlay.addEventListener("click", closeNav)
times.addEventListener("click", closeNav)


const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.animate-scroll');
function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });
  
    scroll(loop);
  }
loop()

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}