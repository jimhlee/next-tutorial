'use server'

import { prisma } from "@/lib/prisma";
import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import bcrypt from 'bcryptjs'
import { error } from "console";

export async function registerUser(data: RegisterSchema) {
  const validated = registerSchema.safeParse(data);

  if (!validated.success) {
    throw new Error(validated.error.errors[0].message);

  }

  const {name, email, password} = validated.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    // where email property is unique. `
    // the property is the same as the param so this is all we need
    where: {email}
  })

  if (existingUser) return {error: 'User already exists'}

  return prisma.user.create({
    data: {
      name,
      email,
      passwordHash: hashedPassword
    }
  })
}