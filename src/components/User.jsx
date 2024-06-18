import React from "react";
import { useFormContext } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import RHFAutoComplete from "./RHFAutoComplete";
import { users } from "./Autocomplete";
import RHFToggleButtonGroup from "./RHFToggleButtonGroup";
import RHFRadioButton from "./RHFRadioButton";
import RHFCheckbox from "./RHFCheckbox";
import RHFSlider from "./RHFSlider";
import RHFSwitch from "./RHFSwitch";
import RHFTextField from "./RHFTextField";
const User = () => {
	const { handleSubmit } = useFormContext();
	const onSubmit = (data) => console.log(data);
	return (
		<Stack
			sx={{ gap: 2 }}
			m={4}
			component={"form"}
			onSubmit={handleSubmit(onSubmit)}
		>
			<RHFTextField name={"name"} label="Name" />
			<RHFTextField name={"email"} label="Email" />
			<RHFAutoComplete name="states" options={users} label="states" />
			<RHFToggleButtonGroup
				name="languages"
				options={[
					{ id: 1, label: "Hindi", value: "hindi" },
					{ id: 2, label: "English", value: "English" },
					{ id: 3, label: "German", value: "German" },
				]}
			/>
			<RHFRadioButton
				name="gender"
				label={"Gender"}
				options={[
					{ id: 1, value: "male", label: "Male" },
					{ id: 2, value: "female", label: "Female" },
					{ id: 3, value: "trans", label: "Trans" },
				]}
			/>
			<RHFCheckbox
				name="skills"
				label={"Skills"}
				const
				options={[
					{ id: 1, label: "JavaScript", value: "javascript" },
					{ id: 2, label: "React", value: "react" },
					{ id: 3, label: "Node.js", value: "nodejs" },
					{ id: 4, label: "Python", value: "python" },
					{ id: 5, label: "Django", value: "django" },
					{ id: 6, label: "SQL", value: "sql" },
					{ id: 7, label: "NoSQL", value: "nosql" },
					{ id: 8, label: "HTML", value: "html" },
					{ id: 9, label: "CSS", value: "css" },
					{ id: 10, label: "TypeScript", value: "typescript" },
					{ id: 11, label: "Java", value: "java" },
					{ id: 12, label: "C#", value: "csharp" },
					{ id: 13, label: "C++", value: "cplusplus" },
					{ id: 14, label: "Go", value: "go" },
					{ id: 15, label: "Rust", value: "rust" },
					{ id: 16, label: "Kubernetes", value: "kubernetes" },
					{ id: 17, label: "Docker", value: "docker" },
					{ id: 18, label: "AWS", value: "aws" },
					{ id: 19, label: "Azure", value: "azure" },
					{ id: 20, label: "GCP", value: "gcp" },
				]}
			/>
			{/* <RHFDateTimePicker name="registration" label="Registration Date" /> */}
			<RHFSlider name="salaryRange" label={"Salary Range"} />
			<RHFSwitch name="isTeacher" label="Are you a teacher?" />
			<Button type="submit">submitForm</Button>
		</Stack>
	);
};

export default User;
// const User = () => {
// 	const {
// 		register,
// 		formState: { errors },
// 		handleSubmit,
// 	} = useForm({
// 		mode: "all",
// 	});
// 	const submitForm = () => {
// 		console.log("submitted");
// 	};
// 	return (
// 		<form onSubmit={handleSubmit(submitForm)}>
// 			<input
// 				{...register("email", {
// 					required: { value: true, message: "This email is required" },
// 					maxLength: { value: 10, message: "Max 10 characters allowed" },
// 				})}
// 			/>
// 			<p>{errors?.email?.message}</p>
// 		</form>
// 	);
// };

// export default User;
