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
        let { currentKey } = $storage; 
        //todo  отрисовать ступени относительно аккорда
        
        let harmony = [...$storage.harmony, ...$storage.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
    };

    $: renderString = (key = 'A', stepOffset = 1) => {
        let pitches =  [...$storage.pitches[$storage.currentLad]];

        let gammaHalfs = pitches.reduce((acc, curr) => acc + curr.move.up, 0);

        let shifted ;
        // начать с тоники
        for(let i = gammaHalfs*2; i >= gammaHalfs - stepOffset; i--){
            shifted = pitches.shift();
            pitches = [...pitches, shifted]
        }

        let string = `<div class="${steps__container}">`;
        let isFirst = true;
        for (let step of pitches) {
            string += `<div class="${cx(steps__cell, isFirst ? steps__first : '', getStepStyles(step.roman))}">${findKey(key, step.order)}</div>`;
            isFirst = false;
        }
        return string += '</div>';
    }

</script>

<style>

</style>
