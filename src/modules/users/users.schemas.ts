import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

const createUserUserBodySchema = z.object({
  email: z.string().email(),
  name: z.string(),
  applicationId: z.string().uuid(),
  password: z.string().min(6),
  initialUser: z.boolean().optional(),
});

export type CreateUserBody = z.infer<typeof createUserUserBodySchema>;

export const createUserJsonSchema = {
  body: zodToJsonSchema(createUserUserBodySchema, "createUserUserBodySchema"),
};

const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
  applicationId: z.string(),
});

export type LoginBody = z.infer<typeof loginBodySchema>;

export const loginJsonSchema = {
  body: zodToJsonSchema(loginBodySchema, "loginBodySchema"),
};

const assignRoleToUserBodySchema = z.object({
  userId: z.string().uuid(),
  roleId: z.string().uuid(),
  // applicationId: z.string().uuid(),
});

export type AssignRoleToUserBody = z.infer<typeof assignRoleToUserBodySchema>;

export const assignRoleToUserJsonSchema = {
  body: zodToJsonSchema(
    assignRoleToUserBodySchema,
    "assignRoleToUserBodySchema"
  ),
};
