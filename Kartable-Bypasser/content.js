// Fichier content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "removeOverlays") {
    // Récupérer les éléments HTML qui représentent les overlays
    var overlay1 = document.querySelector(".modal__container");
    var overlay2 = document.querySelector(".modal--headless");
    
    // Si les overlays sont présents sur la page, les supprimer
    if (overlay1) {
      overlay1.parentNode.removeChild(overlay1);
    }
    if (overlay2) {
      overlay2.parentNode.removeChild(overlay2);
    }
  }
});
