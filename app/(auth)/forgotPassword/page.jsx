"use client";
import Input from "@/components/form/input";
import Title from "@/components/ui/Title";
import { loginSchema } from "@/schema/login";
import { useFormik } from "formik";
import Link from "next/link";
export default function ForgotPassword() {
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
        }
    ];
    return (
        <div className="w-full h-screen bg-secondary place-items-center place-content-center flex">
            <div className="w-96 py-10 bg-white p-8 rounded-md">
                <Title addClass="text-5xl text-center text-gray-600 mb-5">Forgot Password</Title>
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
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
