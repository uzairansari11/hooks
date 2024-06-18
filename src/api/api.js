import axios from "axios";

// Assuming you get the token from somewhere like localStorage or an auth provider
const token = "your-auth-token-here";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

/* 
If you need to pass the token dynamically, you can create a function to get the headers:
*/
export const getHeaders = () => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};
/**
 * Fetch data from the given URL with optional query parameters.
 * @param {string} url - The URL to fetch data from.
 * @param {Object} [params={}] - The query parameters for the request.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export const fetchData = (url, params = {}) => {
	return axios
		.get(url, { params })
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error fetching data:", error);
			throw error;
		});
};

/**
 * Update data at the given URL with the provided payload.
 * @param {string} url - The URL to update data at.
 * @param {Object} payload - The data to update.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export const updateData = (url, payload) => {
	return axios
		.patch(url, payload)
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error updating data:", error);
			throw error;
		});
};

/**
 * Create new data at the given URL with the provided payload.
 * @param {string} url - The URL to create data at.
 * @param {Object} payload - The data to create.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export const createData = (url, payload) => {
	return axios
		.post(url, payload)
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error creating data:", error);
			throw error;
		});
};

/**
 * Delete data at the given URL.
 * @param {string} url - The URL to delete data from.
 * @returns {Promise} - A promise that resolves to the response data.
 */
export const deleteData = (url) => {
	return axios
		.delete(url)
		.then((response) => response.data)
		.catch((error) => {
			console.error("Error deleting data:", error);
			throw error;
		});
};
