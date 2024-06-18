import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const RHFDateTimePicker = ({ name, label }) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, ...restField } }) => (
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateRangePicker
						label={label}
						{...restField}
						value={Array.isArray(value) ? value : [null, null]}
					/>
				</LocalizationProvider>
			)}
		/>
	);
};

export default RHFDateTimePicker;
