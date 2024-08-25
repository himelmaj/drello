import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }).max(100, {
        message: 'Password must not be greater than 100 characters long'
    })
})


export const registerSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters long'
    }).max(50, {
        message: 'Name must not be greater than 50 characters long'
    }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters long'
    }).max(100, {
        message: 'Password must not be greater than 100 characters long'
    }),
    password_confirmation: z.string().min(6, {
        message: 'Password confirmation must be at least 6 characters long'
    }).max(100, {
        message: 'Password confirmation must not be greater than 100 characters long'
    }),
}).refine(data => data.password === data.password_confirmation, {
    path: ['password_confirmation'],
    message: "Passwords don't match",
})
