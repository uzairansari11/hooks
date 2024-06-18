import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFCheckbox = ({ name, label, options }) => {
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange }, fieldState: { error } }) => (
				<FormControl error={!!error}>
					<FormLabel>{label}</FormLabel>
					<FormGroup>
						{options.map((option) => (
							<FormControlLabel
								control={<Checkbox />}
								label={option.label}
								checked={value.includes(option.value)}
								onChange={() => {
									if (value.includes(option.value)) {
										onChange(
											value.filter((item) => item.value !== option.value)
										);
									} else {
										onChange([...value, option.value]);
									}
								}}
								key={option.id}
							/>
						))}
          </FormGroup>
          <FormHelperText>{error?.message }</FormHelperText>
				</FormControl>
			)}
		></Controller>
	);
};

export default RHFCheckbox;
