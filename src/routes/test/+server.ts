import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	console.log({ method: 'GET' });
	return json({ message: 'get success' });
};

export const POST: RequestHandler = async ({ request }) => {
	const { name } = (await request.json()) as { name: string };
	console.log({ method: 'POST', name });
	return json({ message: 'post success' });
};
