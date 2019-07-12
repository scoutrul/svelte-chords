<div class="steps">
    {@html renderString(key, offset)}
</div>

<script>
    import emotion from 'emotion/dist/emotion.umd.min.js';
        
    let state = window.state;
    export let key;
    export let offset;

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

    $: findKey = (key, order) => {
        let harmony = [...state.harmony, ...state.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
    };
    $: getStepStyles = (roman) => {
        return stepStyles[roman];
    };
    $: renderString = (key = 'A', stepOffset = 1) => {
        let steps = [];
        if (state.currentLad === 'minor') {
            steps = [...state.steps.minor];
        }
        else {
            steps = [...state.steps.major];
        }
        let allHalfs = steps.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        for(let i = allHalfs*2; i >= allHalfs - stepOffset; i--){
            shifted = steps.shift();
            steps = [...steps, shifted];
        }

        let string = '';
        for (let step of steps) {
            string += `<div class="${steps__cell} ${getStepStyles(step.roman)}">${findKey(key, step.order)}</div>`;
        }
        return string
    }

</script>

<style>

.steps {
    display: flex;
    margin: 14px 0;
}

</style>
