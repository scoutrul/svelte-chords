<div>
    <h1>{state.currentChord} {state.currentLad}</h1>

    {#each state.steps[state.currentLad] as step}
        <div style="display: flex">
            <div class="{steps__cell} {getStepStyles(step.roman)}" >{step.roman}</div>
            <div>&nbsp; {step.name} / {step.type}</div>
        </div>
    {/each}

</div>
<script>

    import emotion from 'emotion/dist/emotion.umd.min.js';
    import { getStepStyles, steps__cell, stepStyles } from '~/styles/index.js';
    export let state;

</script>

<style>
</style>
