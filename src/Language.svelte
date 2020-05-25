<script>
    import { locale } from 'svelte-i18n'
    function changeLocale(value){
		locale.set(value);
	}
</script>

<div id="button-wrapper">
    <button on:click={() => changeLocale('en-US')}>English</button>
    <button on:click={() => changeLocale('fr-FR')}>Français</button>
</div>


<style>
    div {
        text-align: center;
    }

    button {
		margin: 0 0 3em 0;
		font-size: 1.3em;
		border-color: #FFF;
		border-radius: 0;
		background-image: linear-gradient(90deg, #34B374 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: background 400ms ease-in-out;
	}

	button:hover {
		background-position: 0;
		color: #FFF;
		border-color: #34B374;
	}

	button:active {
		background-color: #FFF;
		border-color: #fff;
	}
</style>