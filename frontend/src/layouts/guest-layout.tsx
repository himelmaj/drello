import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '../context/auth-context'

const GuestLayout = () => {
    const { user } = useAuthContext()
    return !user ? <Outlet /> : <Navigate to="/login" />
}

export default GuestLayout