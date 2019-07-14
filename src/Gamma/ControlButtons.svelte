<div>
    <h2>Аккорды</h2>
    <button class={getLadButtonStyle('minor')} on:mousedown={e => onChangeLad(e, 'minor')}>minor</button>
    <button class={getLadButtonStyle('major')} on:mousedown={e => onChangeLad(e, 'major')}>major</button>
    <div>
        {#each state.harmony as chord}
            <button class={getChordButtonStyles(chord)} on:mousedown={e => onChangeChord(e, chord)}>{chord}</button>
        {/each}
    </div>
</div>

<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';
    export let state;

    const { css } = emotion;

    $: getChordButtonStyles = (chord) => {
        if(chord === state.currentChord) {
            return css`
                background: #DDD;
            `}
    };
    $: getLadButtonStyle = (lad) => {
        if(lad === state.currentLad) {
            return css`
                background: #DDD;
            `}
        return css``
    };

    $: onChangeLad = (e, lad) => {
        state.currentLad = lad;
    };
    $: onChangeChord = (e, chord) => {
        state.currentChord = chord;
    };

</script>

<style>

.alias {
    display: flex;
}

</style>
