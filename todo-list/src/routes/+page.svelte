<script module>
	// module-level logic goes here
	// (you will rarely use this)
</script>

<script lang="ts">
	import CreateTodoForm from './CreateTodoForm.svelte';
	import TodoItem from './TodoItem.svelte';

	const { data } = $props();

	const { todos } = $derived(data);

	const completedTodoCount = $derived(todos.filter(todo => todo.completed).length);
</script>

<!-- markup (zero or more items) goes here -->
<main class="p-4">
	<h1 class="text-2xl font-bold">Todos</h1>
	<CreateTodoForm />
	<p>
		{completedTodoCount} von {todos.length} erledigt
	</p>
	{#if todos.length === 0}
		<p>Du hast keine Todos</p>
	{:else}
		{#each todos as todo}
			<TodoItem {todo} />
		{/each}
	{/if}
</main>

<style>
    /* styles go here */
</style>