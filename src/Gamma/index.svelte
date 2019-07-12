<div>
    <MetaInfo/>

    <GuitarString key="E" offset="6"/>
    <GuitarString key="E" offset="13"/>
    <GuitarString key="E" offset="9"/>
    <GuitarString key="E" offset="16"/>
    <GuitarString key="E" offset="11"/>
    <GuitarString key="E" offset="6"/>

    <ControlButtons {state}/>
</div>
<script>
    
    import GuitarString from './GuitarString.svelte';
    import ControlButtons from './ControlButtons.svelte';
    import MetaInfo from './MetaInfo.svelte';
    import emotion from 'emotion/dist/emotion.umd.min.js';
    let state = window.state;
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
        VII: css`background: #ffd508`,
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

    $: findKey = (key, order) => {
        let harmony = [...state.harmony, ...state.harmony];
        let indexOf = harmony.indexOf(key);
        return harmony[--order + indexOf];
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
