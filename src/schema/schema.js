import { z } from "zod";
import { pattern } from "../constants/patterns";

export const schema = z.object({
	name: z.string().min(1, { message: "Minimum 1 character required" }),
	email: z
		.string()
		.min(1, { message: "Minimum 1 character required" })
		.refine((text) => pattern.email.test(text), {
			message: "Email is not a valid",
		}),
	states: z.array(z.string()).min(1).max(2),
	languages: z.array(z.string()).min(1).max(2),
	gender: z.string(),
	skills: z.array(z.string()).max(6, { message: "Please select 6 only" }),
	registrationDateAndTime: z.date(),
	formerEmploymentPeriod: z.array(z.date()).min(2).max(2),
	salaryRange: z.array(z.number()).min(2).max(2),
	isTeacher: z.boolean(),
});

export const defaultState = {
	name: "",
	email: "",
	states: [],
	languages: [],
	gender: "",
	skills: [],
	registrationDateAndTime: new Date(),
	formerEmploymentPeriod: [new Date(), new Date()],
	salaryRange: [0, 2000000],
	isTeacher: true,
};
