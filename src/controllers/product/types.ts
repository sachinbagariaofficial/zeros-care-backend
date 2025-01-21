import { z } from "zod";

export const addProductSchemaTypes = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    batchID: z.string().min(1, { message: "Batch ID is required" }),
    yearOfManufacture: z
        .string({ required_error: "Year of Manufacture date is required" })
        .regex(/^(0[1-9]|1[0-2])\/\d{4}$/, {
            message: "Year of Manufacture must be in MM/YYYY format",
        })
        .transform((value) => {
            const [month, year] = value.split("/");
            return new Date(parseInt(year), parseInt(month) - 1); // Converts to Date
        }),
    expire: z
        .string({ required_error: "Expire date is required" })
        .regex(/^(0[1-9]|1[0-2])\/\d{4}$/, {
            message: "Expire must be in MM/YYYY format",
        })
        .transform((value) => {
            const [month, year] = value.split("/");
            return new Date(parseInt(year), parseInt(month) - 1); // Converts to Date
        }),

    companyName: z.string().min(1, { message: "Company name is required" }),
    packing: z.string().min(1, { message: "Packing is required" }),
    packingType: z.string().min(1, { message: "Packing Type is required" }),
    MRP: z
        .union([
            z.string().regex(/^\d+(\.\d+)?$/, { message: "MRP must be a valid number" }),
            z.number().positive({ message: "MRP must be a positive number" }),
        ])
        .transform((value) => (typeof value === "string" ? parseFloat(value) : value)),
    rate: z
        .union([
            z.string().regex(/^\d+(\.\d+)?$/, { message: "Rate must be a valid number" }),
            z.number().positive({ message: "Rate must be a positive number" }),
        ])
        .transform((value) => (typeof value === "string" ? parseFloat(value) : value)),
});


