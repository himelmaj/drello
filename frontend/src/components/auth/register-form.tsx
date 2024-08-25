import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import useAuthContext from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerSchema } from "@/lib/schemas"

const RegisterForm = () => {

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    })

    const { register } = useAuthContext();

    const onSubmit = (formData: z.infer<typeof registerSchema>) => {
        console.log(formData)
        register(formData)
    }

    return (
        <div className=" mx-auto p-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col gap-2">

                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" {...field} />
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

                    <FormField control={form.control} name="password_confirmation" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field}  className=" rounded-none "/>
                            </FormControl>
                            <FormMessage>{form.formState.errors.password_confirmation?.message}</FormMessage>
                        </FormItem>
                    )} />

                    <Button type="submit" className=" rounded-none ">Register</Button>
                </form>
            </Form>
        </div>
    )
}

export default RegisterForm
