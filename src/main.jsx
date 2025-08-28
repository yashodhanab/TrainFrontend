import { StrictMode } from 'react';//catch problems
import { createRoot } from 'react-dom/client';//create root for react
import { BrowserRouter } from 'react-router-dom';//
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(//render root component
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
