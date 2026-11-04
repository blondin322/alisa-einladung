import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Card } from './pages/Card.tsx'
import { Invitation } from './pages/Invitation.tsx'
import { PhotoSheet } from './pages/PhotoSheet.tsx'
import { party } from './party.ts'

const page = document.getElementById('root')?.dataset.page

function Root() {
  if (page === 'bogen') return <PhotoSheet />
  if (page === 'karte') return <Card />
  if (page === 'erwachsene') {
    return <Invitation timeLabel={party.adultsTimeLabel} adultsMode />
  }
  return <Invitation />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
