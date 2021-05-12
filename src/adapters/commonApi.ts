export default function getApi(apiUrl: string) {
	return fetch(apiUrl)
		.then((response) => {
			if (response.status === 200) {
				return response.json();
			}
		})
		.catch(() => console.log('An error has occurred'));
}