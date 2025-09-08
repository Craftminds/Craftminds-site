// Gestionnaire de version pour forcer les mises à jour
(function() {
  'use strict';
  
  const VERSION = '1.0.0';
  const VERSION_KEY = 'craftminds_version';
  const FORCE_RELOAD_KEY = 'force_reload';
  
  // Vérifie si une nouvelle version est disponible
  function checkVersion() {
    const currentVersion = localStorage.getItem(VERSION_KEY);
    const forceReload = localStorage.getItem(FORCE_RELOAD_KEY);
    
    console.log('🔍 Version check:', {
      current: currentVersion,
      new: VERSION,
      forceReload: forceReload
    });
    
    // Si c'est une nouvelle version ou si on force le reload
    if (currentVersion !== VERSION || forceReload === 'true') {
      console.log('🔄 Nouvelle version détectée - Rechargement forcé');
      
      // Marquer la nouvelle version
      localStorage.setItem(VERSION_KEY, VERSION);
      localStorage.removeItem(FORCE_RELOAD_KEY);
      
      // Forcer le rechargement de la page
      window.location.reload(true);
      return;
    }
    
    // Marquer la version actuelle
    localStorage.setItem(VERSION_KEY, VERSION);
  }
  
  // Force le rechargement pour la prochaine visite
  function forceNextReload() {
    localStorage.setItem(FORCE_RELOAD_KEY, 'true');
    console.log('🔄 Rechargement forcé programmé pour la prochaine visite');
  }
  
  // Ajoute un paramètre de version à tous les liens
  function addVersionToLinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('http') && !href.includes('#')) {
        const separator = href.includes('?') ? '&' : '?';
        link.setAttribute('href', `${href}${separator}v=${VERSION}`);
      }
    });
  }
  
  // Force le refresh des ressources
  function forceResourceRefresh() {
    // CSS
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('fonts.googleapis.com')) {
        const cleanHref = href.split('?')[0];
        link.setAttribute('href', `${cleanHref}?v=${VERSION}&t=${Date.now()}`);
      }
    });
    
    // JS
    const scriptLinks = document.querySelectorAll('script[src]');
    scriptLinks.forEach(script => {
      const src = script.getAttribute('src');
      if (src && !src.includes('http')) {
        const cleanSrc = src.split('?')[0];
        script.setAttribute('src', `${cleanSrc}?v=${VERSION}&t=${Date.now()}`);
      }
    });
  }
  
  // Initialisation
  function init() {
    checkVersion();
    addVersionToLinks();
    forceResourceRefresh();
    
    // Exposer les fonctions globalement
    window.forceReload = forceNextReload;
    window.checkVersion = checkVersion;
    
    console.log('✅ Version manager initialisé - Version:', VERSION);
  }
  
  // Démarrer immédiatement
  init();
})();
