"use server";

import { post } from "../common/util/fetch";

export default async function createProduct(formData: FormData) {
    const { error } = await post("products", formData);
    return { error }; // WARNING DO NOT return `res`, as this will cause the client to crash.
}