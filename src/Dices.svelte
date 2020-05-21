<script>
    import { onMount } from 'svelte'
    import { slide } from 'svelte/transition'

    export let rolls;

    let wordsJson = undefined;
    let password = [];
    let copyPassword;

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
    }

</script>

<style>
    .dices-wrapper {
        margin: 4em auto;
        max-width: 40%;
    }

    .dices-label {
        padding: 0.5em;
        border-radius: 0.3em;
        font-size: 1.5em;
        background-color: #34B374;
        color: #fff;
        cursor: pointer;
    }
</style>

<div class="dices-wrapper" transition:slide>
    <label class="dices-label" on:click={copyToClipboard}>
        {#if wordsJson !== undefined}
            {#each rolls as roll}
                <span>{wordsJson[`${roll}`]} </span>
            {/each}
        {:else}
            <p>password loading</p>
        {/if}
    </label>
</div>

