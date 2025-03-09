'use client';
import { useEffect } from 'react';
import { loadGoogleTranslate } from '@/utils/google-translate';

const TranslationWidget = () => {
  useEffect(() => {
    // Vérifie si le widget existe déjà
    if (!document.getElementById('google_translate_element').hasChildNodes()) {
    loadGoogleTranslate();
    }
    
    // Cleanup function pour éviter les doublons
    return () => {
      // Supprime l'ancien script s'il existe
      const oldScript = document.querySelector('script[src*="translate.google.com"]');
      if (oldScript) {
        oldScript.remove();
      }
};
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="fixed top-20 right-4 z-50"
    />
  );
};

export default TranslationWidget;