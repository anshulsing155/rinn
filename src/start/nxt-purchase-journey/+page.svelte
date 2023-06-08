<script>
	import { handleClick } from "./server.js";
</script>

<input type="button" value="Signed a purchase agreement" on:click={handleClick} />
<input type="button" value="Making offers" on:click={handleClick} />
<input type="button" value="Going to open houses" on:click={handleClick} />
<input
	type="button"
	value="Just researching"
	on:click={handleClick}
/>


<style>
	input {
		display: block;
		margin: 2% auto;
		width: 40%;
		padding: 2% 10%;
		text-align: start;
		border: none;
		border-radius: 20px;
	}
	input:hover {
		background: rgb(238, 174, 202);
		background: radial-gradient(
			circle,
			rgba(238, 174, 202, 1) 0%,
			rgba(148, 187, 233, 1) 100%
		);
		color: aliceblue;
		border-radius: 20px;
		transition: 0.5s;
	}
</style>
