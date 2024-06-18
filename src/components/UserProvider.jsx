import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { defaultState, schema } from "../schema/schema";
import User from "./User";
import { DevTool } from "@hookform/devtools";
const UserContextProvider = () => {
	const methods = useForm({
		mode: "all",
		resolver: zodResolver(schema),
		defaultValues: defaultState,
	});
	return (
		<FormProvider {...methods}>
			<User />
			<DevTool control={methods.control} />
		</FormProvider>
	);
};

export default UserContextProvider;
