// La navbar est maintenant gérée par CSS responsive uniquement

// Empêcher le scroll horizontal sur mobile/tablette
function preventHorizontalScroll() {
  if (window.innerWidth <= 1024) {
    // Empêcher le scroll horizontal
    document.addEventListener('scroll', function(e) {
      if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
      }
    });
    
    // Empêcher le scroll horizontal avec les gestes tactiles
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = Math.abs(currentX - startX);
      const diffY = Math.abs(currentY - startY);
      
      // Si le mouvement horizontal est plus important que le vertical, empêcher
      if (diffX > diffY) {
        e.preventDefault();
      }
    }, { passive: false });
    
    // Forcer la largeur complète
    document.body.style.width = '100vw';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    
    const mainContainer = document.querySelector('.main-container');
    if (mainContainer) {
      mainContainer.style.width = '100vw';
      mainContainer.style.maxWidth = '100vw';
      mainContainer.style.overflowX = 'hidden';
    }
  }
}

// Appliquer immédiatement et au redimensionnement
document.addEventListener('DOMContentLoaded', function() {
  preventHorizontalScroll();
});
window.addEventListener('resize', function() {
  preventHorizontalScroll();
});

// Système de scroll horizontal pour desktop uniquement
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

// Initialiser avec scroll horizontal sur desktop uniquement
function initScrollMode() {
  if (window.innerWidth > 1024) {
    toggleHorizontalScroll(true);
  } else {
    toggleHorizontalScroll(false);
  }
}

// Initialiser au chargement
initScrollMode();

// Réinitialiser au redimensionnement
window.addEventListener('resize', function() {
  initScrollMode();
  preventHorizontalScroll();
});

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
