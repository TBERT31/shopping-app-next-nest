"use server";

import { revalidateTag } from "next/cache";
import { post } from "../../common/util/fetch";

export default async function createProduct(formData: FormData) {
    const { error } = await post("products", formData);
    revalidateTag("products")
    return { error }; // WARNING DO NOT return `res`, as this will cause the client to crash.
}