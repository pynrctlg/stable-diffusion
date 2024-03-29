"use client";
import Input from "@/components/form/input";
import Title from "@/components/ui/Title";
import { registerSchema } from "@/schema/register";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Register() {
    const [error, setError] = useState('');
    const router = useRouter();

    const onSubmit = async (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        setError('');
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signUp({
            email:values.email,
            password: values.password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`
            }
        })

        if (error) {
            setError(error.message)
        }

        if (!error) {
            router.push('/verify');
        }
        // await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();

    };
    const { values, handleSubmit, touched, handleChange, errors, handleBlur } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
                confirmPassword: "",
            },
            onSubmit,
            validationSchema: registerSchema,
        });

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Your Email Adress',
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Your Password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        },
        {
            id: 3,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Your Password',
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword
        }
    ]
    return (
        <div className="w-full h-screen bg-secondary place-items-center place-content-center flex">
            <div className="w-96 py-10 bg-white p-8 rounded-md">
                <Title addClass="text-5xl text-center text-gray-600 mb-5">Register</Title>
                <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                    <div className="flex flex-col">
                        <button type="submit" className="btn-primary">
                            Register
                        </button>
                        <div className="text-right text-sm">
                            Already have an account? <Link className="mt-3 inline-block underline" href="/login">Sign in</Link>
                        </div>
                    </div>
                </form>
            </div>
            {
                error && (
                    <div className="error">
                        {error}
                    </div>
                )
            }
        </div>

    );
}
