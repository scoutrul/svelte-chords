<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';
    
    export let state = {};
    let lad = "minor";

    const { css } = emotion;
    const steps__cell = css`
        display: flex;
        align-content: center;
        justify-content: center;
        width: 80px;
        background: #F4F4F4;
        outline: 1px solid #ccc;
    `;
    const steps__cell_blank = css`
            background: #FFF;
        `;
    
    const stepStyles = {
        I: css`background: #9dfffe`,
        II: css`background: #fd9cfd`,
        III: css`background: #cccdfd`,
        IV: css`background: #fffe9f`,
        V: css`background: #9eff9d`,
        VI: css`background: #ff9d9e`,
        VII: css`background: #EFEFEF`,
    };
    $: getChordButtonStyles = (chord) => {
        if(chord === state.currentChord) {
            return css`
                background: #DDD;
            `
        }
    };
    $: getLadButtonStyle = (lad) => {
        if(lad === state.currentLad) {
            return css`
                background: #DDD;
            `
        }
        return css``
    };

    function onChangeLad(e, lad) {
        state.currentLad = lad;
    };
    function onChangeChord(e, chord) {
        state.currentChord = chord;
    };

    function findKey(key, order) {
        let harmony = [...state.harmony, ...state.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
    };
    function getStepStyles(roman) {
        return stepStyles[roman];
    };
    function renderString(key = 'A', stepOffset = 1){
        let steps = [...state.steps.minor];
        let allHalfs = steps.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        for(let i = allHalfs*2; i >= allHalfs - stepOffset; i--){
            shifted = steps.shift();
            steps = [...steps, shifted];
        }

        let string = '';
        for (let step of steps) {
            string += `<div class="${steps__cell} ${getStepStyles(step.roman)}">${findKey(key, step.order)}</div>`;
            if(step.move.up === 2){
                string += `<div class="${steps__cell} ${steps__cell_blank}"></div>`
            }
        }
        return string
    }
// TSD
// тоника субдоминанта доминанта
// устойчивые ступени I III V
// тоническое трезвучие I IV V (главные ступени)
// субдоминантовое трезвучие IV VI I
// доминантовое трезвучие V VII II
</script>

<h1>{state.currentChord} {state.currentLad}</h1>

{#each state.steps.minor as step}
<div class="alias">
    <div class="{steps__cell} {getStepStyles(step.roman)}" >{step.roman}</div>
    <div>&nbsp; {step.name} / {step.type}</div>
</div>
{/each}


<div class="steps">
    {@html renderString('E', 1)}
</div>
<div class="steps">
    {@html renderString('E', 5)}
</div>
<div class="steps">
    {@html renderString('E', 3)}
</div>
<div class="steps">
    {@html renderString('E', 7)}
</div>
<div class="steps">
    {@html renderString('E', 4)}
</div>
<div class="steps">
    {@html renderString('E', 1)}
</div>

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

<style>
.steps {
    display: flex;
    margin: 20px 0;
}

.alias {
    display: flex;
}

</style>
