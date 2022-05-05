import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API;

const auth = async (token) => {
	const url = baseUrl + 'auth';

	let response;
	
	try {
		const res = await axios.post(url, {}, {
			headers: {
				'refresh': token
			}
		});

		response = res;
	}
	catch (error) {
		response = error.response;
	}
	finally {
		return response;
	}
}

const login = async (authData) => {
	const url = baseUrl + 'auth/login';

	let response;

	try {
		const { data } = await axios.post(url, authData);
		response = {
			isError: false,
			response: data,
			message: 'success'
		}
	}
	catch(error) {
		response = {
			isError: true,
			response: error.response,
			message: error.response.data.message
		}
	}
	finally {
		return response;
	}
}

export default {
	auth,
	login
}