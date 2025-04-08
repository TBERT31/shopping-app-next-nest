"use server";

import { revalidateTag } from "next/cache";
import { getHeaders, post } from "../../common/util/fetch";
import { API_URL } from "@/app/common/constants/api";

export default async function createProduct(formData: FormData) {
    const { error, data } = await post("products", formData);
    const productImage = formData.get("image");
    if(productImage instanceof File && !error){
        await uploadProductImage(data.id, productImage);
    }
    revalidateTag("products")
    return { error, data }; // WARNING DO NOT return `res`, as this will cause the client to crash.
}

async function uploadProductImage(productId: number, file: File) {
    const formData = new FormData();
    formData.append("image", file);
    await fetch(`${API_URL}/products/${productId}/image`, {
        body: formData,
        method: "POST",
        headers: (await getHeaders()),
    });
}