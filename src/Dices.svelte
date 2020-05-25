<script>
    import { onMount, onDestroy } from 'svelte';
    import { slide } from 'svelte/transition';
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
    import { visible } from './stores.js';
    import { dicesRoll } from './dicesRoll';
    import { locale, _ } from 'svelte-i18n';

    let wordsJson = undefined;
    let password = [];
    let copyPassword;
    let rolls = [];
    let localeWordlist;

    const localeSub = locale.subscribe(async (value) => {
        localeWordlist = value.substring(0,2);
        await loadWordList();
    });

	function handleRoll() {
		rolls = [];
		for(let i = 0; i < 5; i++){
			rolls = [...rolls, dicesRoll()];
		}
	}

    let themes = {
        success: '#34B374',
        warning: '#FF7663'
    }

    async function loadWordList() {
        const res = await fetch(`./assets/wordlists/wordlist-${localeWordlist}.json`);
        wordsJson = await res.json();
    }

    onMount(async () => {
        await loadWordList();
    })

    onDestroy(localeSub);

    function copyToClipboard() {
        copyPassword='';
        try{
            rolls.forEach(roll => {
                copyPassword += wordsJson[roll];
            });
            navigator.clipboard.writeText(copyPassword);
            notifier.success($_('success'));
        }
        catch {
            notifier.warning($_('error'));
        }
    }

    $: visibleToggle = rolls.length === 0 ? visible.set(false) : visible.set(true);

</script>

<NotificationDisplay {themes}/>
{#if $visible}
    <div class="dices-wrapper" transition:slide>
        <label class="dices-label" on:click={copyToClipboard}>
            <img class="lock" src="./assets/lock.png" alt="lock">
            {#if wordsJson !== undefined}
                {#each rolls as roll}
                    <span>{wordsJson[`${roll}`]} </span>
                {/each}
            {:else}
                <p>password loading</p>
            {/if}
        </label>
    </div>
{/if}

<div id="button-wrapper">
    <button on:click={handleRoll}>{$visible ? 're-' : '' }{$_('roll_dices')}</button>
</div>


<style>
    div {
        text-align: center;
    }
    .dices-wrapper {
        margin: 4em auto;
        max-width: 50%;
    }

    .dices-label {
        padding: 0.5em;
        border-radius: 0.3em;
        font-size: 1.5em;
        background-color: #34B374;
        color: #fff;
        cursor: pointer;
    }

    .dices-label:hover {
        background-color: #7DFFBF;
    }

    .dices-label:active {
        background-color: #63FFB3;
    }

    .lock {
        margin-left: 0.5em;
        float:left;
        height: 10%;
    }

    button {
		margin: 0 0 3em 0;
		font-size: 1.5em;
		border-color: #FFF;
		border-radius: 0;
		background-color: #FFF;
		transition: 100ms ease-in;
	}

	button:hover {
		color: #34B374;
		border-color: #34B374;
	}

	button:active {
		background-color: #FFF;
		color: #63FFB3;
		border-color: #63FFB3;
	}
</style>
