// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Récupérer les données du formulaire
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Validation côté client
      if (!validateForm(data)) {
        e.preventDefault();
        return;
      }
      
      // Si la validation passe, laisser Netlify gérer la soumission
      // Afficher un message de chargement
      showLoadingMessage();
    });
  }
});

function validateForm(data) {
  const errors = [];
  
  // Validation du nom
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères');
  }
  
  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push('Veuillez entrer une adresse email valide');
  }
  
  // Validation du message
  if (!data.message || data.message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères');
  }
  
  // Validation de la politique de confidentialité
  if (!data.privacy) {
    errors.push('Vous devez accepter la politique de confidentialité');
  }
  
  if (errors.length > 0) {
    showErrorMessage(errors);
    return false;
  }
  
  return true;
}

function showLoadingMessage() {
  // Supprimer les anciens messages
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Créer un message de chargement
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'form-message loading';
  loadingDiv.innerHTML = `
    <div class="message-content">
      <svg class="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-dasharray="31.416" stroke-dashoffset="31.416">
          <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
          <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
        </circle>
      </svg>
      <div>
        <h3>Envoi en cours...</h3>
        <p>Veuillez patienter pendant l'envoi de votre message.</p>
      </div>
    </div>
  `;
  
  // Insérer le message avant le formulaire
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(loadingDiv, form);
  
  // Désactiver le bouton de soumission
  const submitBtn = form.querySelector('button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';
  }
}

function showSuccessMessage() {
  // Créer un message de succès
  const successDiv = document.createElement('div');
  successDiv.className = 'form-message success';
  successDiv.innerHTML = `
    <div class="message-content">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div>
        <h3>Message envoyé avec succès !</h3>
        <p>Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    </div>
  `;
  
  // Insérer le message avant le formulaire
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(successDiv, form);
  
  // Supprimer le message après 5 secondes
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

function showErrorMessage(errors) {
  // Supprimer les anciens messages d'erreur
  const existingError = document.querySelector('.form-message.error');
  if (existingError) {
    existingError.remove();
  }
  
  // Créer un message d'erreur
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-message error';
  errorDiv.innerHTML = `
    <div class="message-content">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2"/>
        <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
      </svg>
      <div>
        <h3>Erreur dans le formulaire</h3>
        <ul>
          ${errors.map(error => `<li>${error}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  
  // Insérer le message avant le formulaire
  const form = document.getElementById('contactForm');
  form.parentNode.insertBefore(errorDiv, form);
  
  // Supprimer le message après 8 secondes
  setTimeout(() => {
    errorDiv.remove();
  }, 8000);
}
