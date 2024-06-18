import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFToggleButtonGroup = ({ name, options }) => {
	const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange, ...restField } }) => (
				<ToggleButtonGroup
					onChange={(event, newValue) => {
						if (newValue.length) {
							onChange(newValue);
						}
					}}
					value={value.length ? value : [options[0].value]}
					{...restField}
				>
					{options.map((option) => (
						<ToggleButton value={option.value} key={option.id}>
							{option.label}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			)}
		/>
	);
};

export default RHFToggleButtonGroup;
