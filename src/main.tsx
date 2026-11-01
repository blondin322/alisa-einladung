import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './pages/Card.tsx'
import { Invitation } from './pages/Invitation.tsx'

const page = document.getElementById('root')?.dataset.page
const Root = page === 'karte' ? Card : Invitation

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
