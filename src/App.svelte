<script>
	import { onMount, onDestroy } from 'svelte'
	import Dices from './Dices.svelte'
	import Info from './Info.svelte'
	import Disclaimer from './Disclaimer.svelte'
	import Footer from './Footer.svelte'
	import Language from './Language.svelte'
	import { register, init, getLocaleFromNavigator, isLoading, locale } from 'svelte-i18n'

	register('en-US', () => import('./i18n/en-US.json'));
	register('fr-FR', () => import('./i18n/fr-FR.json'))

	onMount(() => {
		//Hacky way to set initial locale on mobile
		locale.set('en-US');
	})
	
	init({
  		fallbackLocale: 'en-US',
  		initialLocale: getLocaleFromNavigator(),
	});
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

	{#if $isLoading}
		<p>...language loading</p>
	{:else}
		<Language></Language>
		<Info></Info>
		<Disclaimer></Disclaimer>
		<Dices></Dices>
		<Footer></Footer>
	{/if}
	
</main>

<style>
	main {
		text-align: center;
  		text-justify: inter-word;
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

		main {
			text-align: justify;
        	text-justify: inter-word;
		}

		div {
			max-width: 80%;
			margin: auto;
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
</style>