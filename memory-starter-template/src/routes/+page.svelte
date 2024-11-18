<script lang="ts">
	import { CircleHelp } from 'lucide-svelte';

	type Card = {
		id: number;
		image: string;
		matched: boolean;
	};

	function shuffleArray<T>(array: T[]) {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	const { data } = $props();
	const { images } = data;
	const duplicatedImages = [...images, ...images];

	let cards = $state(
		duplicatedImages.map((image, index) => ({
			id: index,
			image,
			matched: false
		}))
	);
	shuffleArray(cards);
	let turnedCards: Card[] = $state([]);


	function handleClick(card: Card) {
		if (turnedCards.length === 2 || card.matched || turnedCards.includes(card)) {
			return;
		}
		turnedCards.push(card);
		if (turnedCards.length === 2) {
			const [first, second] = turnedCards;
			if (first.image === second.image) {
				first.matched = true;
				second.matched = true;
				turnedCards = [];
			} else {
				setTimeout(() => {
					turnedCards = [];
				}, 1000);
			}
		}
	}
</script>

<div class="h-screen flex items-center justify-center">
	<div class="grid grid-cols-4 grid-rows-4 gap-4">
		{#each cards as card}
			<button onclick={() => handleClick(card)}
							class="rounded-lg w-[150px] h-[150px] border flex items-center justify-center overflow-hidden"
							disabled={card.matched || turnedCards.includes(card)}>
				{#if turnedCards.includes(card) || card.matched}
					<img src={card.image} alt="Memory card" />
				{:else}
					<CircleHelp size="48" />
				{/if}
			</button>
		{/each}
	</div>
</div>
