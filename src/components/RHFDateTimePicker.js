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
			render={(field) => (
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateTimePicker label={label} {...field} />
				</LocalizationProvider>
			)}
		/>
	);
};

export default RHFDateTimePicker;
