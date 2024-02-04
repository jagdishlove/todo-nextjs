"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/app/utils/prisma";

export async function create(request: any) {
  try {
    // const input = formData.get("input") as string;
    console.log("request", request);

    const data = await prisma.todo.create({
      data: {
        title: request,
      },
    });
  } catch (error) {
    console.error("Error creating todo item:", error);
    // Handle the error as needed, e.g., return an error response
    throw error;
  }
}

