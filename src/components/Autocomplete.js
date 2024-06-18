import {
	Box,
	Typography,
	Autocomplete,
	TextField,
	Checkbox,
} from "@mui/material";
import React, { useState } from "react";

export const users = [
	{
		firstName: "John",
		lastName: "Doe",
		username: "johndoe",
		email: "johndoe@example.com",
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		username: "janesmith",
		email: "janesmith@example.com",
	},
	{
		firstName: "Alice",
		lastName: "Johnson",
		username: "alicejohnson",
		email: "alicejohnson@example.com",
	},
	{
		firstName: "Bob",
		lastName: "Brown",
		username: "bobbrown",
		email: "bobbrown@example.com",
	},
];

const AutocompleteComponent = () => {
	const [value, setValue] = useState([]);
	return (
		<Box m={4}>
			<Typography>Autocomplete Field Handling</Typography>
			<Box>
				<Autocomplete
					options={users}
					renderInput={(params) => (
						<TextField
							{...params}
							aria-label="User-Autocomplete"
							label="Select Users"
						/>
					)}
					multiple
					getOptionLabel={(option) => option.email}
					onChange={(event, newValue) => {
						setValue(newValue.map((item) => item.username));
					}}
					value={value.map((username) =>
						users.find((user) => user.username === username)
					)}
					isOptionEqualToValue={(option, value) =>
						option.username === value.username
					}
					renderOption={(props, option, { selected }) => {
						return (
							<li {...props} key={option.username} checked={selected}>
								<Checkbox style={{ marginRight: 8 }} checked={selected} />
								{option.email}
							</li>
						);
          } }
          disableCloseOnSelect
				/>
			</Box>
		</Box>
	);
};

export default AutocompleteComponent;
