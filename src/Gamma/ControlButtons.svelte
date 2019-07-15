<div>
    <h2>Аккорды</h2>
    <button class={getLadButtonStyle('minor')} on:mousedown={e => storage.onChangeLad('minor')}>minor</button>
    <button class={getLadButtonStyle('major')} on:mousedown={e => storage.onChangeLad('major')}>major</button>
    <div>
        {#each $storage.harmony as chord}
            <button class={getChordButtonStyles(chord)} on:mousedown={e => storage.onChangeChord(chord)}>{chord}</button>
        {/each}
    </div>
</div>

<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';
    import { storage } from '~/store/index.js';

    const { css } = emotion;

    $: getChordButtonStyles = (chord) => {
        if(chord === $storage.currentChord) {
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
