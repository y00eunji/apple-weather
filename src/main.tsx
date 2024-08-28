import App from '@/app/App.tsx';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
