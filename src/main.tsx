import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from './components/Router';
import AppRouter from './AppRouter';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  </StrictMode>
);
