import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/context/theme-context"
import { AuthProvider } from "./context/auth-context"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
