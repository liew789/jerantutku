import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { SettingsProvider } from './context/SettingsContext'
import { AttractionDetailPage } from './pages/AttractionDetailPage'
import { AttractionsPage } from './pages/AttractionsPage'
import { FoodDetailPage } from './pages/FoodDetailPage'
import { FoodPage } from './pages/FoodPage'
import { HomePage } from './pages/HomePage'
import { SettingsPage } from './pages/SettingsPage'
import { WeekendPage } from './pages/WeekendPage'

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="food" element={<FoodPage />} />
            <Route path="food/:id" element={<FoodDetailPage />} />
            <Route path="attractions" element={<AttractionsPage />} />
            <Route path="attractions/:id" element={<AttractionDetailPage />} />
            <Route path="weekend" element={<WeekendPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  )
}
