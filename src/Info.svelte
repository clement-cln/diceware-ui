<script>
    import { _ } from 'svelte-i18n'
</script>

<div class="info-wrapper">
    <p>{$_('info_start')} <a href='https://www.eff.org/dice' target="_blank">EFF</a> {$_('info_end')}</p>
    <p>{$_('info_warning')}</p>
</div>

<style>
    .info-wrapper{
        margin: 1em;
    }
</style>