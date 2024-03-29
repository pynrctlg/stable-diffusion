"use client";
import Input from "@/components/form/input";
import Title from "@/components/ui/Title";
import { loginSchema } from "@/schema/login";
import { useFormik } from "formik";
import Link from "next/link";
export default function Login() {
    const onSubmit = async (values, actions) => {
        alert(JSON.stringify(values, null, 2));
        await new Promise((resolve) => setTimeout(resolve, 4000));

        actions.resetForm();
    };
    const { values, handleSubmit, touched, handleChange, errors, handleBlur } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            onSubmit,
            validationSchema: loginSchema,
        });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Your Email Adress",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
    ];
    return (
        <div className="w-full h-screen bg-secondary place-items-center place-content-center flex">
            <div className="w-96 py-10 bg-white p-8 rounded-md">
                <Title addClass="text-5xl text-center text-gray-600 mb-5">Login</Title>
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
                            Login
                        </button>
                        <div className="flex justify-between mt-3 text-sm">
                            <Link className="inline-block underline" href="/forgotPassword">Forgot password?</Link>
                            <Link className="inline-block underline" href="/register">Create account</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
