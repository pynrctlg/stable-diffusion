'use client';
import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/input";
import { loginSchema } from "@/schema/login";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
export default function Login() {
    const { data:session, status} = useSession();
    console.log(session)
    const pethName = usePathname();
    const onSubmit = async (values, actions) => {
        alert(JSON.stringify(values, null, 2))
        await new Promise((resolve) => setTimeout(resolve, 4000));

        actions.resetForm();
    }
    const { values, handleSubmit, touched, handleChange, errors, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit,
        validationSchema: loginSchema,
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
        }
    ]
    return (
        <div className="min-h-[calc(100vh_-_168px)] container mx-auto max-w-[375px] items-center flex flex-col justify-center">
            <Title addClass="text-[40px] mb-8">Login</Title>
            <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
                {
                    inputs.map((input) => (
                        <Input key={input.id} {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))
                }
                <div className="flex flex-col">
                    <button type="submit" className="btn-primary">Login</button>
                    <button onClick={()=>signIn("github")} type="button" className="btn-primary !bg-secondary mt-2 flex items-center justify-center"><AiFillGithub className="mr-2" />Github</button>
                    {
                        pethName === '/auth/login' ?

                            <Link href="/auth/register">
                                <span className="text-xs underline cursor-pointer text-gray-500">Do you no have account?</span>
                            </Link>
                            :
                            ''
                    }
                </div>
            </form >
        </div >
    )
}