import type { Actions, PageServerLoad } from './$types';
import { createTodo, getTodos, updateTodo } from '$lib/server/db';

export const load: PageServerLoad = async () => {
	const todos = await getTodos();
	return { todos };
};

export const actions: Actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const content = formData.get('content') as string;

		await createTodo({
			content
		});
	},
	update: async ({ request }) => {
		const formData = await request.formData();
		const completed = formData.get('completed');
		const id = formData.get('id') as string;

		await updateTodo({
			completed: completed === 'on',
			id: parseInt(id)
		});
	}
};
