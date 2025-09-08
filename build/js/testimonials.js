// Gestion du carousel des témoignages
let currentTestimonialIndex = 0;
let testimonials = [];

document.addEventListener('DOMContentLoaded', async function() {
  // Charger les témoignages depuis le JSON
  await loadTestimonials();
  
  // Initialiser le carousel
  showTestimonial(0);
  
  // Auto-rotation seulement s'il y a plusieurs témoignages
  if (testimonials.length > 1) {
    setInterval(() => {
      changeTestimonial(1);
    }, 5000);
  }
});

async function loadTestimonials() {
  try {
    console.log('Chargement des témoignages...');
    const response = await fetch('data/testimonials.json');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Données chargées:', data);
    
    testimonials = data.testimonials;
    console.log('Témoignages:', testimonials);
    
    // Générer le HTML dynamiquement
    generateTestimonialsHTML();
  } catch (error) {
    console.error('Erreur lors du chargement des témoignages:', error);
    // Fallback avec des témoignages par défaut
    testimonials = [
      {
        id: 1,
        name: "Enzo Monnier",
        company: "CraftMinds",
        role: "Fondateur",
        date: "8 septembre 2025",
        photo: "",
        quote: "On vient tout juste de déployer le site mais nous allons vite remplir cette section !",
        rating: 5
      }
    ];
    console.log('Utilisation du fallback:', testimonials);
    generateTestimonialsHTML();
  }
}

function generateTestimonialsHTML() {
  console.log('Génération du HTML pour', testimonials.length, 'témoignages');
  
  const photoContainer = document.querySelector('.testimonial-photo');
  const textContainer = document.querySelector('.testimonial-text');
  const dotsContainer = document.querySelector('.carousel-dots');
  const carouselControls = document.querySelector('.carousel-controls');
  
  if (!photoContainer || !textContainer) {
    console.error('Conteneurs non trouvés:', { photoContainer, textContainer });
    return;
  }
  
  // Générer les images
  photoContainer.innerHTML = testimonials.map((testimonial, index) => `
    <img src="${testimonial.photo}" alt="${testimonial.name}" class="testimonial-image ${index === 0 ? 'active' : ''}" data-index="${index}">
  `).join('');
  
  // Générer les citations
  textContainer.innerHTML = testimonials.map((testimonial, index) => `
    <div class="testimonial-quote ${index === 0 ? 'active' : ''}" data-index="${index}">
      <p>"${testimonial.quote}"</p>
      <div class="testimonial-author">
        <h4>${testimonial.name}</h4>
        <span>${testimonial.role} - ${testimonial.company}</span>
        <span class="testimonial-date">${testimonial.date}</span>
      </div>
    </div>
  `).join('');
  
  // Si un seul témoignage, masquer les contrôles du carousel
  if (testimonials.length === 1) {
    if (carouselControls) {
      carouselControls.style.display = 'none';
    }
  } else {
    // Générer les points seulement s'il y a plusieurs témoignages
    if (dotsContainer) {
      dotsContainer.innerHTML = testimonials.map((_, index) => `
        <span class="dot ${index === 0 ? 'active' : ''}" onclick="currentTestimonial(${index})"></span>
      `).join('');
    }
  }
  
  console.log('HTML généré avec succès');
}

function showTestimonial(index) {
  const images = document.querySelectorAll('.testimonial-image');
  const quotes = document.querySelectorAll('.testimonial-quote');
  const dots = document.querySelectorAll('.dot');
  
  // Masquer toutes les images et citations
  images.forEach(img => img.classList.remove('active'));
  quotes.forEach(quote => quote.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // Afficher l'image et la citation correspondantes
  if (images[index]) images[index].classList.add('active');
  if (quotes[index]) quotes[index].classList.add('active');
  if (dots[index]) dots[index].classList.add('active');
}

function changeTestimonial(direction) {
  const totalTestimonials = testimonials.length;
  currentTestimonialIndex += direction;
  
  if (currentTestimonialIndex >= totalTestimonials) {
    currentTestimonialIndex = 0;
  } else if (currentTestimonialIndex < 0) {
    currentTestimonialIndex = totalTestimonials - 1;
  }
  
  showTestimonial(currentTestimonialIndex);
}

function currentTestimonial(index) {
  currentTestimonialIndex = index;
  showTestimonial(currentTestimonialIndex);
}
