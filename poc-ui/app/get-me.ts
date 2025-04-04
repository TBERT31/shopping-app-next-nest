"use server"

import { API_URL } from "./constants/api";

export default async function getMe() {
    const me = await fetch(`${API_URL}/users/me`);
    return me.json();
}