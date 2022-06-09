import React from 'react';
import axios from 'axios';

const getUsers = async () => {
	const response = await axios
		.get(`http://api-ocm.southeastasia.cloudapp.azure.com:1337/api/users`)
		.then((res) => res.data)
		.catch((e) => console.log(e));
	return response;
};

export { getUsers };
