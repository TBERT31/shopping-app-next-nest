"use server";

import { FormError } from "@/app/common/interfaces/form-error.interface";
import { post } from "@/app/common/util/fetch";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTHENTICATION_COOKIE } from "../auth-cookie";

export default async function login(_prevState: FormError, formData: FormData) {
    const { error, res } = await post("auth/login", formData);
    if(error ){
        return { error };
    }
    if(!res){
        return { error: "No response from server" };
    }
    setAuthCookie(res);
    redirect("/");
}

const setAuthCookie = async (response: Response) => {
    const setCookieHeader = response.headers.get("Set-Cookie");
    if(setCookieHeader){
        const token = setCookieHeader.split(";")[0].split("=")[1];
        (await cookies()).set({
            name: AUTHENTICATION_COOKIE,
            value: token,
            secure: true,
            httpOnly: true,
            expires: new Date(jwtDecode(token).exp! * 1000),
        });
    }
}