// src/components/LanguageSwitcher.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' },
];

const LanguageSwitcher = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <Box sx={{ position: 'absolute', top: 20, left: 20, display: 'flex', gap: 2 }}>
      {languages.map((language) => (
        <Typography
          key={language.code}
          onClick={() => onLanguageChange(language.code)}
          sx={{
            cursor: 'pointer',
            fontWeight: selectedLanguage === language.code ? 'bold' : 'normal',
            color: '#000',
          }}
        >
          {language.label}
        </Typography>
      ))}
    </Box>
  );
};

export default LanguageSwitcher;
