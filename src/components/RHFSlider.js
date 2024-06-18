import { Slider, Typography } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFSlider = ({ name, label }) => {
	const { control } = useFormContext();
	return (
		<Controller
			name={name}
			control={control}
			render={({field}) => (
				<>
					<Typography>{label}</Typography>
					<Slider {...field} valueLabelDisplay={"auto"} />
				</>
			)}
		/>
	);
};

export default RHFSlider;
