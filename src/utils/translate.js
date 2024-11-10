// src/utils/translate.js
import axios from 'axios';

const API_KEY = 'AIzaSyD966M_byq27DEU6MDfPReIoCAdBGeU74s';

export async function translateText(text, targetLanguage) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
  const response = await axios.post(url, {
    q: text,
    target: targetLanguage,
  });
  return response.data.data.translations[0].translatedText;
}
