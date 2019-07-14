<div>
    <MetaInfo {state}/>

    <GuitarString {state} key="E" offset="6"/>
    <GuitarString {state} key="E" offset="13"/>
    <GuitarString {state} key="E" offset="9"/>
    <GuitarString {state} key="E" offset="16"/>
    <GuitarString {state} key="E" offset="11"/>
    <GuitarString {state} key="E" offset="6"/>

    <ControlButtons {state}/>
</div>
<script>
    
    import GuitarString from './GuitarString.svelte';
    import ControlButtons from './ControlButtons.svelte';
    import MetaInfo from './MetaInfo.svelte';
   
    export let state;

</script>

<style>
</style>
