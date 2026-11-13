import '@fontsource-variable/plus-jakarta-sans'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Global styles load first so a component's own CSS can override the shared utilities.
import './styles/tokens.css'
import './styles/global.css'
import './styles/utilities.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
