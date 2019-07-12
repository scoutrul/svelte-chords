<div>
    <h1>{window.state.currentChord} {window.state.currentLad}</h1>

    {#each window.state.steps[window.state.currentLad] as step}
        <div class="alias">
            <div class="{steps__cell} {getStepStyles(step.roman)}" >{step.roman}</div>
            <div>&nbsp; {step.name} / {step.type}</div>
        </div>
    {/each}

</div>
<script>

    import emotion from 'emotion/dist/emotion.umd.min.js';

    const { css } = emotion;
    const steps__cell = css`
        display: flex;
        align-content: center;
        justify-content: center;
        width: 80px;
        background: #F4F4F4;
        outline: 1px solid #ccc;
    `;
    
    const stepStyles = {
        I: css`background: #9dfffe`,
        II: css`background: #fd9cfd`,
        III: css`background: #cccdfd`,
        IV: css`background: #fffe9f`,
        V: css`background: #9eff9d`,
        VI: css`background: #ff9d9e`,
        VII: css`background: #ffd508`,
    };

    function getStepStyles(roman) {
        return stepStyles[roman];
    };

// TSD
// тоника субдоминанта доминанта
// устойчивые ступени I III V
// тоническое трезвучие I IV V (главные ступени)
// субдоминантовое трезвучие IV VI I
// доминантовое трезвучие V VII II
</script>

<style>

.alias {
    display: flex;
}

</style>
