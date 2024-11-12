import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import GlobalStyles from './styles/GlobalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyles />
    <Toaster
      toastOptions={{
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.6rem',
          fontSize: '1.6rem',
          maxWidth: '50rem',
          padding: '1.6rem 2.4rem',
          color: '#555',
          backgroundColor: '#fff',
          boxShadow: '0 0.6rem 2.4rem rgba(0, 0, 0, 0.3)',
          borderRadius: '12px'
        },
        success: {
          duration: 5000,
          style: {
            color: '#fff',
            backgroundColor: '#15803d'
          }
        },
        error: {
          duration: 8000,
          style: {
            color: '#fff',
            backgroundColor: '#b91c1c'
          }
        }
      }}
    />
  </StrictMode>
);
