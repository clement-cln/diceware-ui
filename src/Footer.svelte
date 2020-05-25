<script>
    import {_ } from 'svelte-i18n';
</script>

<footer>
	<p><a href="https://github.com/Deweytle/diceware-ui" target="_blank"><img src="./assets/github.png" alt="github"></a></p>
	<p>{$_('lock_credits')} <a href="https://thenounproject.com/" target="_blank">the noun project</a></p>
</footer>

<style>
    footer {
		color:lightgrey;
		text-align: center;
		font-size: 0.8em;
	}

	footer img {
		height: 30px;
	}
</style>