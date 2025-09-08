// Masquer la navbar sur mobile et tablette
function hideNavbarOnMobile() {
  if (window.innerWidth <= 1024) {
    const navbar = document.querySelector('#navbar-container');
    if (navbar) {
      navbar.style.display = 'none';
      navbar.style.visibility = 'hidden';
    }
  }
}

// Appliquer immédiatement et au redimensionnement
document.addEventListener('DOMContentLoaded', hideNavbarOnMobile);
window.addEventListener('resize', hideNavbarOnMobile);

// Conversion du scroll vertical en scroll horizontal pour les 4 premières sections
let currentSection = 0;
const totalSections = 4; // Hero + 3 sections de services
let isScrolling = false;
let horizontalScrollEnabled = true;

// Fonction pour activer/désactiver le scroll horizontal
function toggleHorizontalScroll(enable) {
  horizontalScrollEnabled = enable;
  if (enable) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';
  }
}

// Initialiser avec scroll horizontal
toggleHorizontalScroll(true);

window.addEventListener('wheel', function(e) {
  // Si on est dans les sections horizontales
  if (horizontalScrollEnabled) {
    e.preventDefault();
    
    if (isScrolling) return;
    
    const container = document.querySelector('.main-container');
    
    // Déterminer la direction du scroll
    if (e.deltaY > 0 && currentSection < totalSections - 1) {
      // Scroll vers le bas = avancer
      currentSection++;
      isScrolling = true;
    } else if (e.deltaY < 0 && currentSection > 0) {
      // Scroll vers le haut = reculer
      currentSection--;
      isScrolling = true;
    } else if (e.deltaY > 0 && currentSection === totalSections - 1) {
      // Arrivé à la dernière section horizontale, passer au scroll vertical
      toggleHorizontalScroll(false);
      return;
    }
    
    if (isScrolling) {
      // Appliquer la transformation
      const translateX = currentSection * -100;
      container.style.transform = `translateX(${translateX}vw)`;
      
      // Réactiver le scroll après l'animation
      setTimeout(() => {
        isScrolling = false;
      }, 800);
    }
  } else {
    // Scroll vertical normal - vérifier si on remonte vers les sections horizontales
    if (e.deltaY < 0 && window.pageYOffset === 0) {
      e.preventDefault();
      toggleHorizontalScroll(true);
      currentSection = totalSections - 1;
      const container = document.querySelector('.main-container');
      container.style.transform = `translateX(-${currentSection * 100}vw)`;
    }
  }
}, { passive: false });

// Observer pour détecter quand on arrive aux sections verticales
const testimonials = document.querySelector('.testimonials');
if (testimonials) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && horizontalScrollEnabled) {
        // On arrive aux témoignages, activer le scroll vertical
        toggleHorizontalScroll(false);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(testimonials);
}
