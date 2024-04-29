"use server";

import { revalidatePath } from "next/cache";
// import postgres from "postgres";
import { z } from "zod";

export async function signBook(prevState: { message: string }, formData: FormData) {
    const schema = z.object({
        name: z.string(),
        message: z.string()
    });

    const parse = schema.safeParse({
        name: formData.get("name"),
        message: formData.get("message"),
    });

    if (!parse.success) return { message: "Failed to add record" };

    const data = parse.data;

    try {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Sleep for 5 seconds

        // Perform any other operations after the sleep

        revalidatePath("/");
        return { message: 'Added record' };
    } catch (e) {
        return { message: "Failed to add record" };
    }
}
