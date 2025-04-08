"use server";

import { z } from "zod";
import { createSession, deleteSession } from "../lib/sessions";
import { redirect } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

import { cookies } from "next/headers";

export async function logout() {
  cookies().delete("logged_in");
}
