import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const name = 'svelte',
		{ url } = request,
		input = `${url}test`,
		postRes = await fetch(input, {
			method: 'POST',
			body: JSON.stringify({ name })
		}),
		getRes = await fetch(input);
	console.log({ postRes, getRes });
};
