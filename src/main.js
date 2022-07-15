window.addEventListener('scroll',onScroll)

onScroll()

function onScroll() {
  showNavOnScroll();
  showBackToTopbuttomScroll();
  activeteMenuAtCurrentSections();
 
}


function activeteMenuAtCurrentSections() {

  const targetLine = scrollY +innerHeight /2

  // Verificar se a seção passou da linha
  
  const sectionTop = home.offsetTop;
  

}


function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopbuttonScroll() {
  if (scrollY > 1400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}




ScrollReveal({
  origin: 'top',
  distance:'30px',
  duration:700,
  
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card, 
#about, 
#about header,
#about .content`
);