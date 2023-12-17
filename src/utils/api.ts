import axios, { AxiosResponse } from "axios";

const BASE_URL: string = "https://api.themoviedb.org/3";
const TMDB_TOKEN: string = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers: { Authorization: string } = {
	Authorization: "bearer " + TMDB_TOKEN
};

interface ApiParams {
	[key: string]: any;
}

export const fetchDataFromApi = async (
	url: string,
	params?: ApiParams
): Promise<any> => {
	try {
		const { data }: AxiosResponse = await axios.get(BASE_URL + url, {
			headers,
			params
		});
		return data;
	} catch (err: any) {
		console.error(err);
		return err;
	}
};
