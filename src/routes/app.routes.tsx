import { Route, Routes } from 'react-router-dom'
import { Customers } from '../pages/Customers'
import { Dashboard } from '../pages/Dashboard'
import { New } from '../pages/New'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<New />} />
      <Route path="/new/:id" element={<New />} />
    </Routes>
  )
}
