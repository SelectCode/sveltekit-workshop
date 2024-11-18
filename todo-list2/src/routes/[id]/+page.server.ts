import type { PageServerLoad } from './$types';
import { getTodoById } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const todo = await getTodoById(parseInt(params.id));
	if (todo == null) {
		error(404, 'Todo not found');
	}
	return { todo };
};
