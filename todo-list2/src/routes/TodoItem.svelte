<script lang="ts">
	import type { Todo } from '$lib/todo';
	import { enhance } from '$app/forms';

	const { todo } = $props<{ todo: Todo }>();
	let form: HTMLFormElement;
</script>


<form action="?/update" bind:this={form} class="flex gap-2 items-center" method="POST" use:enhance>
	<input checked={todo.completed} name="completed" oninput={() => {form.requestSubmit();}} type="checkbox" />
	<input hidden name="id" value={todo.id}>
	<a href={todo.id}>
		{todo.content}
	</a>
</form>
