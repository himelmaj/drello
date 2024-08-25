import axios from '@/lib/axios'
import { useState, createContext, PropsWithChildren, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
    user: any;
    errors: any[];
    register: (data: any) => Promise<void>;
    login: (data: any) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const myAccount = async () => await axios.get('/api/user').then(res => setUser(res.data))

    const register = async ({ ...data }) => {
        await csrf()

        try {
            await axios.post('/register', data)
            navigate('/')
        } catch (e: any) {
            if (e.response.status !== 422) setErrors(e.response.data.errors)
        }
    }

    const login = async ({ ...data }) => {
        await csrf()
        try {
            await axios.post('/login', data)
            navigate('/')
        } catch (e: any) {
            if (e.response.status !== 422) setErrors(e.response.data.errors)
        }

    }

    const logout = async () => {
        await axios.post('/logout').then(() => {
            setUser(null)
            navigate('/login')
        })
    }

    return <AuthContext.Provider value={{ user, errors, register, login, logout }}>{children}</AuthContext.Provider>
}

export default function useAuthContext() {
    const context = useContext(AuthContext)
    if (context === undefined) throw new Error('useAuthContext must be used within an AuthProvider')
    return context
}