// src/pages/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { Box, Button, Typography, TextField, Link, Checkbox, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
      alert('Logged in successfully!');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Signed in with Google!');
    } catch (error) {
      setError('Google sign-in failed. Please try again.');
    }
  };

  const handleFacebookSignIn = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert('Signed in with Facebook!');
    } catch (error) {
      setError('Facebook sign-in failed. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          Sign In
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Box display="flex" alignItems="center" mt={1}>
            <Checkbox />
            <Typography variant="body2">Remember me</Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#333' },
              marginY: 2,
              padding: 1.2,
            }}
          >
            Sign In
          </Button>
        </form>

        {error && (
          <Typography color="error" align="center" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}

        <Link href="#" underline="none" display="block" align="center" sx={{ color: '#000', mb: 2 }}>
          Forgot your password?
        </Link>

        <Divider sx={{ my: 2 }}>or</Divider>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleGoogleSignIn}
          startIcon={<GoogleIcon />}
          sx={{
            borderColor: '#4285F4',
            color: '#4285F4',
            mb: 1,
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#f1f3f4' },
          }}
        >
          Sign in with Google
        </Button>

        <Button
          variant="outlined"
          fullWidth
          onClick={handleFacebookSignIn}
          startIcon={<FacebookIcon />}
          sx={{
            borderColor: '#1877F2',
            color: '#1877F2',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#f1f3f4' },
          }}
        >
          Sign in with Facebook
        </Button>

        <Box textAlign="center" mt={2}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link href="/signup" underline="none" sx={{ color: '#007bff', fontWeight: 'bold' }}>
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
