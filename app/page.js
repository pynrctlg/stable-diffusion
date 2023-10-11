"use client";
import Input from "@/components/form/input";
import Title from "@/components/ui/Title";
import { loginSchema } from "@/schema/login";
import { useFormik } from "formik";
export default function Home() {
  return (
    <div className="w-full h-screen bg-secondary place-items-center place-content-center flex">
      <h1 className="text-white text-6xl">Anasayfa</h1>
    </div>
  );
}
