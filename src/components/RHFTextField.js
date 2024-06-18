import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFTextField = ({ name, ...props }) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<TextField
					error={!!error}
					helperText={error?.message}
					{...field}
          { ...props }
          required
				/>
			)}
		/>
	);
};

export default RHFTextField;
