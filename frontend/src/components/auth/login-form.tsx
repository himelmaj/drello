
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useAuthContext from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { loginSchema } from "@/lib/schemas"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const LoginForm = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const { login } = useAuthContext();

    const onSubmit = (formData: z.infer<typeof loginSchema>) => {
        login({
            formData
        })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                    </FormItem>
                )} />

                <FormField control={form.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                    </FormItem>
                )} />
                <Button type="submit">Login</Button>
            </form>
        </Form>
    )
}

export default LoginForm