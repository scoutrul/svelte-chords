<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';

    const { css } = emotion;
    const steps__cell = css`
        display: flex;
        align-content: center;
        justify-content: center;
        width: 80px;
        background: #F4F4F4;
    `;

    const steps__cell_blank = css `
        background: #EEEEEE;
    `;
	let state = {
        name: 'minor',
        steps: [
            {
                order: 1,
                alias: ['Тоника', 'I', 'T'],
                move: {
                    up: 2,
                    down: 2
                } 
            }
            ,{
                order: 2,
                alias: ['верхняя вводная', 'II'],
                move: {
                    up: 1,
                    down: 2
                } 
            }
            ,{
                order: 3,
                alias: ['верхняя медианта', 'III'],
                move: {
                    up: 2,
                    down: 1
                } 
            },{
                order: 4,
                alias: ['субдоминанта', 'IV', 'S'],
                move: {
                    up: 2,
                    down: 2
                } 
            },{
                order: 5,
                alias: ['доминанта', 'V', 'D'],
                move: {
                    up: 1,
                    down: 2
                } 
            },{
                order: 6,
                alias: ['нижняя медианта', 'VI'],
                move: {
                    up: 2,
                    down: 1
                } 
            },{
                order: 7,
                alias: ['нижняя вводная', 'VII'],
                move: {
                    up: 2,
                    down: 2
                } 
            }
        ]
    };

    $: drowGuitarCells = (startStep = 1) => {

        let steps = [...state.steps];
        let allHalfs = steps.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        for(let i = allHalfs*2; i >= allHalfs - startStep; i--){
            shifted = steps.shift();
            steps = [...steps, shifted];
        }

        let string = '';
        for (let step of steps) {
            string += `<div class="${steps__cell}">${step.alias[1]}</div>`;
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
    <div class="alias__rom">{step.alias[1]}</div>
    <div>{step.alias[0]} {step.alias[2] ? step.alias[2] : ''}</div>
</div>
{/each}


<div class="steps">
    {@html drowGuitarCells(1)}
</div>
<div class="steps">
    {@html drowGuitarCells(5)}
</div>
<div class="steps">
    {@html drowGuitarCells(3)}
</div>
<div class="steps">
    {@html drowGuitarCells(7)}
</div>
<div class="steps">
    {@html drowGuitarCells(4)}
</div>
<div class="steps">
    {@html drowGuitarCells(1)}
</div>
<style>
.steps {
    display: flex;
    margin: 20px 0;
}

.alias {
    display: flex;
}
.alias__rom {
    width: 40px;
}
</style>