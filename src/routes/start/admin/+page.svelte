<script>
	
	import { writableArray } from '../store.js';
	const addToArray = () => {
		console.log(writableArray.name)
		$writableArray = [...$writableArray, {
			name: Math.random()
		}];
	};

	
</script>



<button on:click={addToArray}>
	Add item
</button>

{#each $writableArray as item}
<p>
	{item.name}
	
</p>
{/each}
