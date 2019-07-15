<div>
    {@html renderString(key, offset)}
</div>

<script>
    import { storage } from '~/store/index.js';
    import { steps__styles, steps__cell, steps__first, steps__container, getStepStyles } from '~/styles/index.js';
    import emotion from 'emotion/dist/emotion.umd.min.js';
    const { cx } = emotion;
    export let key;
    export let offset;

    $: findKey = (key, order) => {
        let harmony = [...$storage.harmony, ...$storage.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
    };

    $: renderString = (key = 'A', stepOffset = 1) => {
        let steps =  [...$storage.steps[$storage.currentLad]];
      
        let allHalfs = steps.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        for(let i = allHalfs*2; i >= allHalfs - stepOffset; i--){
            shifted = steps.shift();
            steps = [...steps, shifted]
        }

        let string = `<div class="${steps__container}">`;
        let isFirst = true;
        for (let step of steps) {
            string += `<div class="${cx(steps__cell, isFirst ? steps__first : '', getStepStyles(step.roman))}">${findKey(key, step.order)}</div>`;
            isFirst = false;
        }
        return string += '</div>';
    }

</script>

<style>

</style>
