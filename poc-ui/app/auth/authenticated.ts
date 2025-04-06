import { cookies } from "next/headers";

export default async function authenticated() {
    return !!(await cookies()).get('Authentication');
}