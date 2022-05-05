import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API;

const get = async (token) => {
	const url = baseUrl + 'clients';

	let response;

	try {
		const res = await axios.get(url, {
			headers: {
				'Authorization': 'Bearer ' + token
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

const create = async (token, data) => {
	const url = baseUrl + 'clients/create';

	let response;

	try {
		const res = await axios.post(url, data, {
			headers: {
				'Authorization': 'Bearer ' + token
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

const update = async (token, data) => {
	const url = baseUrl + 'clients/update';

	let response;

	try {
		const res = await axios.put(url, data, {
			headers: {
				'Authorization': 'Bearer ' + token
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

const remove = async (token, data) => {
	const url = baseUrl + 'clients/delete';

	let response;

	try {
		const res = await axios.put(url, data, {
			headers: {
				'Authorization': 'Bearer ' + token
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

export default {
	get,
	create,
	update,
	remove
}