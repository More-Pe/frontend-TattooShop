const URL = 'http://localhost:4000/api'

export const RegisterUser = async (credentials) => {
	const request = await fetch(`${URL}/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	const result = await request.json();
	console.log(result);

	return result;
};

export const LoginUser = async (credentials) => {
	const request = await fetch(`${URL}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	const result = await request.json();
	console.log(result);

	return result;
};