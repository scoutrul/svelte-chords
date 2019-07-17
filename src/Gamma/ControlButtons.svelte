<div>
    <h2>Аккорды</h2>
    <button class={getLadButtonStyle('minor')} on:mousedown={e => storage.onChangeLad('minor')}>minor</button>
    <button class={getLadButtonStyle('major')} on:mousedown={e => storage.onChangeLad('major')}>major</button>
    <div>
        {#each $storage.harmony as key}
            <button class={getChordButtonStyles(key)} on:mousedown={e => storage.onChangeKey(key)}>{key}</button>
        {/each}
    </div>
</div>

<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';
    import { storage } from '~/store/index.js';

    const { css } = emotion;

    $: getChordButtonStyles = (key) => {
        if(key === $storage.currentKey) {
            return css`
                background: #DDD;
            `}
    };
    $: getLadButtonStyle = (lad) => {
        if(lad === $storage.currentLad) {
            return css`
                background: #DDD;
            `}
        return css``
    };

</script>

<style>

.alias {
    display: flex;
}

</style>
