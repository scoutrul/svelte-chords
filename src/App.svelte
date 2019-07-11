<script>
	import Minor from './Minor.svelte';

	let state = {
        name: 'minor',
        harmony: ['A', 'H', 'C', 'D', 'E', 'F', 'G',],
        currentChord: 'A',
        currentLad: 'minor',
		steps: {
			minor: [
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
			],
		major: [
				{
					order: 1,
					roman: 'I',
					type: 'minor',
					name: 'Тоника',
					move: {
						up: 2,
						down: 1,
					} 
				}
				,{
					order: 2,
					roman: 'II',
					type: 'minor',
					name: 'Верхняя вводная',
					move: {
						up: 2,
						down: 2
					} 
				}
				,{
					order: 3,
					roman: 'III',
					type: 'major',
					name: 'Верхняя медианта',
					move: {
						up: 1,
						down: 2
					} 
				},{
					order: 4,
					roman: 'IV',
					type: 'minor',
					name: 'Субдоминанта', 
					move: {
						up: 2,
						down: 1
					} 
				},{
					order: 5,
					roman: 'V',
					type: 'minor',
					name: 'Доминанта',
					move: {
						up: 2,
						down: 2
					} 
				},{
					order: 6,
					roman: 'VI',
					type: 'major',
					name: 'Нижняя медианта',
					move: {
						up: 2,
						down: 2
					} 
				},{
					order: 7,
					roman: 'VII',
					type: 'major',
					name: 'Нижняя вводная',
					move: {
						up: 1,
						down: 2
					} 
				}
			],
		}
    };
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<Minor {state}/>
