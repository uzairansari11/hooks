import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFSwitch = ({ name, label }) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<FormControlLabel
					control={<Switch {...field} value={field.value} />}
					label={label}
				/>
			)}
		/>
	);
};

export default RHFSwitch;
