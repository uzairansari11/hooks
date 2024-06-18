import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFRadioButton = ({ name, options, label }) => {
	const { control } = useFormContext();
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field, fieldState: { error } }) => (
					<FormControl {...field} error={!!error}>
						<FormLabel>{label}</FormLabel>
						<RadioGroup>
							{options.map((option) => (
								<FormControlLabel
									key={option.id}
									value={option.value}
									control={<Radio checked={field.value === option.value} />}
									label={option.label}
								/>
							))}
						</RadioGroup>
						<FormHelperText>{error?.message }</FormHelperText>
					</FormControl>
				)}
			/>
		</>
	);
};

export default RHFRadioButton;
