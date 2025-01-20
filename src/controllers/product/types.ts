import { z } from "zod";

export const productSchemaTypes = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    batchId: z.string().min(1, { message: "Batch ID is required" })
});