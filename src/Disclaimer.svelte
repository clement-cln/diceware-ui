<script>
    import { _ } from 'svelte-i18n'
</script>

<div class="text-wrapper">
    <div id="circle-warning">!</div><div id="warning">{$_('disclaimer')}</div>
</div>

<style>
    .text-wrapper {
        margin: 2em;
    }

    #warning {
        font-size: 1.2em;
        color: #FF7663;
        display: inline;
        margin-left: 1em;
    }

    #circle-warning {
        text-align: center;
        color:#fff;
        font-size: 1.5em;
        height: 30px;
        width: 30px;
        background-color: #FF7663;
        border-radius: 50%;
        display: inline-block;
    }
</style>