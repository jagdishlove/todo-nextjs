"use server";
import { revalidatePath } from "next/cache";
import prisma from "@/app/utils/prisma";

export async function create(formData: FormData) {
  try {
    const input = formData.get("input") as string;
    if (!input.trim()) {
      return;
    }
    const data = await prisma.todo.create({
      data: {
        title: input,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo item:", error);
    // Handle the error as needed, e.g., return an error response
    throw error;
  }
}
export async function removeTodo(formData: FormData) {
  try {
    const inputId = formData.get("inputId") as string;
    const data = await prisma.todo.delete({
      where: { id: inputId },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo item:", error);
    // Handle the error as needed, e.g., return an error response
    throw error;
  }
}
