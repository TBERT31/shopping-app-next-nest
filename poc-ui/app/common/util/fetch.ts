import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors";
import { cookies } from "next/headers";

const getHeaders = async () => ({
    Cookie: (await cookies()).toString(),
});

export const post = async (path: string, formData: FormData) => {
    const res = await fetch(`${API_URL}/${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(await getHeaders()),
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes = await res.json();
    if (!res.ok) {
        return { error: getErrorMessage(parsedRes) };
    }
    return {error: "", res};
}

export const get = async <T>(path: string) => {
    const res = await fetch(`${API_URL}/${path}`, {
        headers: { ...(await getHeaders()) },
    });
    return res.json() as T;
}