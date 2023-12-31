import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";
import { ALL_PERMISSIONS } from "../../config/permissions";

const createRoleSchema = z.object({
  name: z.string(),
  permissions: z.array(z.enum(ALL_PERMISSIONS)),
  // applicationId: z.string().uuid(),
});

export type CreateRoleBody = z.infer<typeof createRoleSchema>;

export const createRoleJsonSchema = {
  body: zodToJsonSchema(createRoleSchema, "createRoleSchema"),
};
