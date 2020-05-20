<script>
    import { onMount } from 'svelte'

    export let rolls;

    let wordsJson = undefined;
    let password = []

    onMount(async () => {
        const res = await fetch('./assets/eff_large_wordlist.json');
        wordsJson = await res.json();
    })

</script>

{#if wordsJson !== undefined}
    {#each rolls as roll}
        <p>{wordsJson[`${roll}`]}</p>
    {/each}
{:else}
    <p>password loading</p>
{/if}
