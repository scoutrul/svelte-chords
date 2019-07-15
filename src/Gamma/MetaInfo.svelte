<div>
    <h1>{$storage.currentChord} {$storage.currentLad}</h1>

    {#each $storage.steps[$storage.currentLad] as step}
        {#if step.roman}
        <div style="display: flex">
            <div class="{cx(steps__cell, getStepStyles(step.roman))}" >{step.roman}</div>
            <div>&nbsp; {step.name} / {step.type}</div>
        </div>
        {/if}
    {/each}

</div>
<script>
    import { storage } from '~/store/index.js';
    import { getStepStyles, steps__cell } from '~/styles/index.js';
    import emotion from 'emotion/dist/emotion.umd.min.js';
    const { cx } = emotion;
</script>

<style>
</style>
