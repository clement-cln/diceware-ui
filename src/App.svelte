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
	<div class="head-wrapper">
		<div class="left">
			<span class="helper"></span>
			<img class="logo" src="./assets/dice-logo.png" alt="diceware logo">
		</div>
		<div class="right">
			<h1>Diceware</h1>
			<h2>password generator</h2>
		</div>
	</div>

	<Dices {rolls} {visible}></Dices>
	
	<div>
		<button on:click={handleRoll}>{visible ? 're-' : '' }roll the dices</button>
	</div>
</main>


<style>
	main {
		text-align: center;
		margin: 0;
	}

	.head-wrapper {
		height: 30%;
	}

	.left {
		display: inline-block;
		text-align: right;
	}

	.right {
		display: inline-block;
		padding-left: 1em;
		text-align: left;
	}

	@media only screen and (max-width: 1026px) {
    	.left {
        	display: none;
    	}

		.right {
			display: inline;
			text-align: center;
		}
	}


	.helper {
		display: inline-block;
    	height: 100%;
    	vertical-align: middle;
	}

	.logo {
		display: inline;
		
		margin-right: 0%;
		max-height: 15vh;
	}

	h1 {
		text-transform: uppercase;
		font-size: 9vh;
		font-weight: 100;
		margin: 0.5em 0 0 0;
	}

	h2 {
		font-weight: lighter;
		font-size: 6vh;
		margin-top: 0;
	}

	button {
		margin: 0;
		font-size: 1.5em;
		border-color: #FFF;
		border-radius: 0;
		background-color: #FFF;
		transition: 100ms ease-in;
	}

	button:hover {
		background-position-x: 0;
		color: #34B374;
		border-color: #34B374;
	}

	button:active {
		background-color: #FFF;
		color: #63FFB3;
		border-color: #63FFB3;
	}

</style>