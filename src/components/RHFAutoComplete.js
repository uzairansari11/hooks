import { Autocomplete, Checkbox, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const RHFAutoComplete = ({ name, options, label }) => {
  const { control } = useFormContext();
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange, ref } ,fieldState:{error}}) => {
				return (
					<Autocomplete
						options={options}
						getOptionLabel={(option) => option.email}
						label=""
						value={value?.map((username) =>
							options.find((option) => option.username === username)
						)}
						onChange={(_event, newValue) => {
							onChange(newValue.map((option) => option.username));
						}}
						multiple={true}
						isOptionEqualToValue={(option, newValue) =>
							option.username === newValue.username
						}
						disableCloseOnSelect
						renderInput={(params) => (
							<TextField
								{...params}
								inputRef={ref}
								error={!!error}
								helperText={error?.message}
								label={label}
							/>
						)}
						renderOption={(props, option, { selected }) => {
							return (
								<li {...props} key={option.username}>
									<Checkbox style={{ marginRight: 8 }} checked={selected} />
									{option.email}
								</li>
							);
						}}
					/>
				);
			}}
		/>
	);
};

export default RHFAutoComplete;
