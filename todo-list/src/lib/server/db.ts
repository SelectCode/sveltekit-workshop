import type { Todo } from '$lib/todo';

let currentId = 0;
const todos: Todo[] = [
	{
		id: currentId++,
		content: 'Learn SvelteKit',
		completed: false
	}
];

async function emulateIO() {
	await new Promise((resolve) => setInterval(resolve, 500));
}

export async function getTodos() {
	await emulateIO();
	return todos;
}

export async function createTodo(todo: Pick<Todo, 'content'>) {
	await emulateIO();
	todos.push({
		completed: false,
		content: todo.content,
		id: currentId++
	});
}

export async function updateTodo(
	updatedTodo: Partial<Pick<Todo, 'content' | 'completed'>> & Pick<Todo, 'id'>
) {
	await emulateIO();
	for (const todo of todos) {
		if (todo.id === updatedTodo.id) {
			todo.content = updatedTodo.content ?? todo.content;
			todo.completed = updatedTodo.completed ?? todo.completed;
			break;
		}
	}
}

export async function getTodoById(id: number) {
	await emulateIO();
	return todos.find((todo) => todo.id === id);
}
