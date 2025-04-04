"use server";

import { FormError } from "@/app/common/form-error.interface";
import { post } from "@/app/util/fetch";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(_prevState: FormError, formData: FormData) {
    const { error } = await post("auth/login", formData);
    if(error){
        return { error };
    }
    redirect("/");
}

const setAuthCookie = async (response: Response) => {
    const setCookieHeader = response.headers.get("Set-Cookie");
    if(setCookieHeader){
        const token = setCookieHeader.split(";")[0].split("=")[1];
        (await cookies()).set({
            name: 'Authentication',
            value: token,
            secure: true,
            httpOnly: true,
            expires: new Date(jwtDecode(token).exp! * 1000),
        });
    }
}