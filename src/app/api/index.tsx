import React from 'react';
import axios from 'axios';

const getUsers = async () => {
	const response = await axios
		.get('/users')
		.then((res) => res.data)
		.catch((e) => console.log(e));
	return response;
};

export { getUsers };
