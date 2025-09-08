// Cache buster pour forcer la mise à jour des fichiers CSS/JS
(function() {
  'use strict';
  
  // Génère un timestamp unique basé sur la date/heure actuelle
  function getCacheBuster() {
    return new Date().getTime() + Math.random() * 1000;
  }
  
  // Met à jour tous les liens CSS avec le cache buster
  function updateCSSLinks() {
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    const cacheBuster = getCacheBuster();
    
    cssLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('fonts.googleapis.com')) {
        // Supprime l'ancien paramètre de cache s'il existe
        const cleanHref = href.split('?')[0];
        link.setAttribute('href', `${cleanHref}?v=${cacheBuster}`);
      }
    });
  }
  
  // Met à jour tous les scripts avec le cache buster
  function updateScriptLinks() {
    const scriptLinks = document.querySelectorAll('script[src]');
    const cacheBuster = getCacheBuster();
    
    scriptLinks.forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.includes('http')) {
        // Supprime l'ancien paramètre de cache s'il existe
        const cleanSrc = src.split('?')[0];
        script.setAttribute('src', `${cleanSrc}?v=${cacheBuster}`);
      }
    });
  }
  
  // Fonction principale
  function initCacheBuster() {
    // Vérifie si on est en mode développement (localhost)
    const isDevelopment = window.location.hostname === 'localhost' || 
                         window.location.hostname === '127.0.0.1' ||
                         window.location.hostname.includes('192.168');
    
    if (isDevelopment) {
      updateCSSLinks();
      updateScriptLinks();
      console.log('Cache buster activé pour le développement');
    }
  }
  
  // Initialise le cache buster au chargement de la page
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCacheBuster);
  } else {
    initCacheBuster();
  }
  
  // Expose la fonction pour un usage manuel si nécessaire
  window.forceCacheRefresh = function() {
    updateCSSLinks();
    updateScriptLinks();
    console.log('Cache forcé à la main');
  };
})();
