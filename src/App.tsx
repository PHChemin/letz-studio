import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CursoPage from '@/pages/CursoPage'
import HomePage from '@/pages/HomePage'

/**
 * Vite `base` may be `./` for Pages; normalize for react-router basename.
 */
function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/' || base === './') return undefined
  return base.replace(/\/$/, '')
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso" element={<CursoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
