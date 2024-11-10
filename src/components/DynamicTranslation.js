// src/components/DynamicTranslation.js
import React, { useEffect, useState } from 'react';
import { translateText } from '../utils/translate';

function DynamicTranslation({ textToTranslate, targetLanguage }) {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    async function fetchTranslation() {
      const translated = await translateText(textToTranslate, targetLanguage);
      setTranslatedText(translated);
    }
    fetchTranslation();
  }, [textToTranslate, targetLanguage]); // Dependency array to re-run if input text or language changes

  return <div>{translatedText}</div>;
}

export default DynamicTranslation;
