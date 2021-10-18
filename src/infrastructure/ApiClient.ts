//@TODO: add types for parameters and everything
import { ApiMethodTypes } from 'entities/ApiMethodTypes';
import axios from 'axios';

// let token = "";

//Envolving the call method in a Closure.
const ApiClient = ( function(){
	// Private Data;
	const API_URL = "https://api-staging2.zetl.network/api/quotes?"

	const fetchData = async ({
		endpoint,
		method,
		body,
	}: {
		endpoint: string;
		method: ApiMethodTypes;
		body?: any;
	}) => {

		try {
			const response = await axios.request({
				url:`${API_URL}${endpoint}`,
				method,
				headers: { 
					'content-type': 'application/json', 
					Accept: '/' 
				},
				data: JSON.stringify(body)
			});
			  if (response.status === 500) throw new Error(response.data.error);

			  if (response?.headers['content-type'].includes('application/json')) {
				return response.data;
			  }
			  return response.data.json();

		} catch (error:any) {
			throw new Error(error);
		}

	
	}

	return {fetchData};

}());

export default ApiClient;