import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/reset.css';
import './styles/tailwind.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const QUERY_CLIENT_CONFIG = new QueryClient({});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={QUERY_CLIENT_CONFIG}>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#fff',
            color: '#363636',
            fontWeight: 'bold',
            fontFamily: 'Pretendard',
            fontSize: '1.4rem',
          },
        }}
      />
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
