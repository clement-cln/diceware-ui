<svelte:head>
	<script context="module" src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js" on:load={miniglLoaded}></script>
</svelte:head>
<script>
	import { onMount, onDestroy } from 'svelte'
	import Dices from './Dices.svelte'
	import Info from './Info.svelte'
	import Disclaimer from './Disclaimer.svelte'
	import Footer from './Footer.svelte'
	import Language from './Language.svelte'
	import { register, init, getLocaleFromNavigator, isLoading, locale } from 'svelte-i18n'

	let miniglReady = false;
	let mounted = false;

	register('en-US', () => import('./i18n/en-US.json'));
	register('fr-FR', () => import('./i18n/fr-FR.json'));
	register('fr', () => import('./i18n/fr-FR.json'));

	onMount(() => {
		//Hacky way to set initial locale on mobile
		locale.set('en-US');
		mounted = true;
		if(miniglReady){
			loadGradientElement();
		}
	})
	
	init({
  		fallbackLocale: 'en-US',
  		initialLocale: getLocaleFromNavigator(),
	});

	function miniglLoaded(){
		miniglReady = true;
		if(mounted){
			loadGradientElement();
		}
	}

	function loadGradientElement(){
		var gradient = new Gradient();
    	gradient.initGradient("#canvas");
	}

</script>

<main>
	<div>
		<div class="dice-background">
			<canvas id="canvas" />
	   </div>
	   <section>
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
	   </section>
	</div>
</main>

<style>
	.dice-background {
        background-color: #FFFFFF;
        width: 100vw;
        height: 100vh;
        position: absolute;
        overflow: hidden;
        z-index: -2;
        top: 0;
    	left: 0;
    }
    canvas#canvas {
    	z-index: -1;
        position: relative;
        width: 100%;
        height: 60%;
        transform: rotate(48deg) scale(2) translateY(-80%);
        --gradient-color-1: #63FFB3; 
        --gradient-color-2: #FFFFFF; 
        --gradient-color-3: #34B374;  
        --gradient-color-4: #FF7660;
        --gradient-speed: 0.000006;
    }

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

	@media only screen and (max-width: 566px) {
    	.left {
			display: block;
			text-align: center;
			margin-bottom: 1em;
			margin-top: 1em;
    	}

		.right {
			display: none;
		}

		main {
			text-align: justify;
        	text-justify: inter-word;
		}

		.dice-background {
			max-width: 100%;
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