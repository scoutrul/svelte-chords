<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';
    const { css } = emotion;
	let state = {
        name: 'minor',
        harmony: ['A', 'H', 'C', 'D', 'E', 'F', 'G',],
        currentChord: 'A',
        steps: [
            {
                order: 1,
                roman: 'I',
                type: 'minor',
                name: 'Тоника',
                move: {
                    up: 2,
                    down: 2
                } 
            }
            ,{
                order: 2,
                roman: 'II',
                type: 'minor',
                name: 'Верхняя вводная',
                move: {
                    up: 1,
                    down: 2
                } 
            }
            ,{
                order: 3,
                roman: 'III',
                type: 'major',
                name: 'Верхняя медианта',
                move: {
                    up: 2,
                    down: 1
                } 
            },{
                order: 4,
                roman: 'IV',
                type: 'minor',
                name: 'Субдоминанта', 
                move: {
                    up: 2,
                    down: 2
                } 
            },{
                order: 5,
                roman: 'V',
                type: 'minor',
                name: 'Доминанта',
                move: {
                    up: 1,
                    down: 2
                } 
            },{
                order: 6,
                roman: 'VI',
                type: 'major',
                name: 'Нижняя медианта',
                move: {
                    up: 2,
                    down: 1
                } 
            },{
                order: 7,
                roman: 'VII',
                type: 'major',
                name: 'Нижняя вводная',
                move: {
                    up: 2,
                    down: 2
                } 
            }
        ]
    };
    const steps__cell = css`
        display: flex;
        align-content: center;
        justify-content: center;
        width: 80px;
        background: #F4F4F4;
        outline: 1px solid #ccc;
    `;
    $: getChordButtonStyles = (chord) => {
        if(chord === state.currentChord) {
            return css`
                background: #DDD;
            `
        }
        // return stepStyles[state.steps[state.harmony.indexOf(chord)].roman]
    };

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

    $: onChord = (e, chord) => {
        state.currentChord = chord;
    };
    $: findKey = (key, order) => {
        let harmony = [...state.harmony, ...state.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
    };
    $: getStepStyles = (roman) => {
        return stepStyles[roman];
    };
    $: renderString = (key = 'A', startStep = 1) => {
        let steps = [...state.steps];
        let allHalfs = steps.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        for(let i = allHalfs*2; i >= allHalfs - startStep; i--){
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

<h1>{state.name}</h1>

{#each state.steps as step}
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
    <div>
        {#each state.harmony as chord}
            <button class={getChordButtonStyles(chord)} on:click={e => onChord(e, chord)}>{chord} {state.name}</button>
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
