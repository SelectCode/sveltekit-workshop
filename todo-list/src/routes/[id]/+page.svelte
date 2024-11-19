<script lang="ts">
	const { data } = $props();
	const { todo } = $derived(data);
</script>

<h1>
	{todo.content}
</h1>
