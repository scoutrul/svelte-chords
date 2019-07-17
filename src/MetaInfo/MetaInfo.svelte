<h1>{$storage.currentChord}</h1>
<div style="display: flex;">
    <div style="display: flex; flex-direction: column;">
        <h2>Ступени</h2>
        {#each $storage.pitches[$storage.currentLad] as {roman, name, type}}
            {#if roman}
            <div style="display: flex">
                <div class="{cx(steps__cell, getStepStyles(roman))}" >{roman}</div>
                <div>&nbsp; {name} / {type}</div>
            </div>
            {/if}
        {/each}
    </div>
    <div style="display: flex; flex-direction: column; padding-left: 40px">
        <h2>Интервалы</h2>
        {#each $storage.intervals as { name, halfs}}
            <div style="display: flex">
                <div style="flex: 1">
                    {@html renderIntervals(halfs)}
                </div>
                <div>{name} ({halfs})</div>
            </div>
        {/each}
    </div>
</div>

<script>
    import { storage } from '~/store/index.js';
    import { getStepStyles, steps__cell } from '~/styles/index.js';
    import emotion from 'emotion/dist/emotion.umd.min.js';
    const { cx } = emotion;

    const renderIntervals = (halfsCount) => {
        let string = '<span style="color: #99D">■</span>';
        for(let i = 1; i < $storage.intervals.length; i++ ){
            string += `<span style="${(i == halfsCount) && 'color: #99D'}">■</span>`
        }
        return string
    }
</script>

<style>
</style>
