// src/pages/LandingPage.js
import React from 'react';
import DynamicTranslation from '../components/DynamicTranslation';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage({ targetLanguage }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h3" gutterBottom>
        <DynamicTranslation textToTranslate="Welcome to AI Doctor" targetLanguage={targetLanguage} />
      </Typography>
      <Button variant="contained" component={Link} to="/signup">
        <DynamicTranslation textToTranslate="Get Started" targetLanguage={targetLanguage} />
      </Button>
    </Box>
  );
}

export default LandingPage;
