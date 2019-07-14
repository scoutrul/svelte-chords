{@html renderString(key, offset)}

<script>
    import { steps__styles, steps__cell, steps__first, steps__container } from '~/styles/index.js';
    import { getStepStyles } from '~/styles/index.js';
    export let state;
    export let key;
    export let offset;

    $: findKey = (key, order) => {
        let harmony = [...state.harmony, ...state.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
    };

    $: renderString = (key = 'A', stepOffset = 1) => {
        let steps = [];
        if (state.currentLad === 'minor') {// TODO
            steps = [...state.steps.minor];
        }
        else {
            steps = [...state.steps.major];
        }
        let allHalfs = steps.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        for(let i = allHalfs*2; i >= allHalfs - stepOffset; i--){
            shifted = steps.shift();
            steps = [...steps, shifted]
        }

        let string = '';
        let first = true;
            string += `<div class="${steps__container}">`;
        for (let step of steps) {
            string += `<div class="${steps__cell} ${getStepStyles(step.roman)} ${first ? steps__first : '' }">${findKey(key, step.order)}</div>`;
            first = false;
        }
        string += '</div>'
        return string
    }

</script>

<style>

</style>
