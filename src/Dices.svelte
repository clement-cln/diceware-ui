<script>
    import { onMount } from 'svelte'
    import { slide } from 'svelte/transition'
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

    export let rolls;
    export let visible;

    let wordsJson = undefined;
    let password = [];
    let copyPassword;

    let themes = {
        success: '#34B374'
    }

    onMount(async () => {
        const res = await fetch('./assets/eff_large_wordlist.json');
        wordsJson = await res.json();
    })

    function copyToClipboard() {
        copyPassword = '';
        rolls.forEach(roll => {
            copyPassword += wordsJson[roll];
        });
        navigator.clipboard.writeText(copyPassword);
        notifier.success('Password copied to clipboard !');
    }

</script>

<style>
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
</style>

<NotificationDisplay {themes}/>
{#if visible}
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
