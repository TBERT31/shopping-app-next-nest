"use server";

import { API_URL } from "@/app/constants/api";
import { redirect } from "next/navigation";

export default async function createUser(
    _prevState: any,
    formData: FormData,
) {
    const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        body: formData,
    });

    const parsedRes = await res.json();
    if(!res.ok){
        console.log(parsedRes);
        return {error: ""};
    }
    redirect("/");
}