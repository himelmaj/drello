import { Routes, Route, Navigate } from "react-router-dom"
import Home from "@/pages/home"
import Login from "./pages/login"
import Register from "./pages/register"
import AuthLayout from "./layouts/auth-layout"
import GuestLayout from "./layouts/guest-layout"

const App = () => {
  return (
      <Routes >
        <Route element={<GuestLayout />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<AuthLayout />} >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
  )
}

export default App