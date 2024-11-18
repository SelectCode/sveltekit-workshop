<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form action="?/create" class="flex gap-2" method="POST" use:enhance>
	<input name="content" placeholder="Inhalt" />
	<button>
		Todo erstellen
	</button>
</form>