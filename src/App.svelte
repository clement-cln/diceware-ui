<script>
	import { onMount, onDestroy } from 'svelte'
	import { dicesRoll } from './dicesRoll'
	import Dices from './Dices.svelte'

	let rolls = [];

	function handleRoll() {
		rolls = [];
		for(let i = 0; i < 5; i++){
			rolls = [...rolls, dicesRoll()];
		}
	}

	$: visible = rolls.length === 0 ? false : true;

</script>

<main>
	<h1>Diceware</h1>
	<h2>password generator</h2>

	{#if visible}
		<Dices {rolls}></Dices>
	{/if}
	<button on:click={handleRoll}>{visible ? 're-' : '' }roll the dices</button>
</main>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0;
	}

	h1 {
		text-transform: uppercase;
		font-size: 6em;
		font-weight: 100;
		margin: 0.5em 0 0 0;
	}

	h2 {
		font-weight: lighter;
		font-size: 3.3em;
		margin-top: 0;
	}

	button {
		font-size: 1.5em;
		border-color: #FFF;
		border-radius: 0;
		background-color: #FFF;
		transition: 200ms ease-in;
	}

	button:hover {
		background-position-x: 0;
		color: #34B374;
		border-color: #34B374;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>