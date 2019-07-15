import { writable } from 'svelte/store';

let metaState = {
    steps: {
        minor: [
            {
            order: 1,
            roman: "I",
            type: "minor",
            name: "Тоника",
            move: {
                up: 2,
                down: 2
            }
            },
            {
            order: 2,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 3,
            roman: "II",
            type: "minor",
            name: "Верхняя вводная",
            move: {
                up: 1,
                down: 2
            }
            },
            {
            order: 4,
            roman: "III",
            type: "major",
            name: "Верхняя медианта",
            move: {
                up: 2,
                down: 1
            }
            },
            {
            order: 5,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 6,
            roman: "IV",
            type: "minor",
            name: "Субдоминанта",
            move: {
                up: 2,
                down: 2
            }
            },
            {
            order: 7,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 8,
            roman: "V",
            type: "minor",
            name: "Доминанта",
            move: {
                up: 1,
                down: 2
            }
            },
            {
            order: 9,
            roman: "VI",
            type: "major",
            name: "Нижняя медианта",
            move: {
                up: 2,
                down: 1
            }
            },
            {
            order: 10,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 11,
            roman: "VII",
            type: "major",
            name: "Нижняя вводная",
            move: {
                up: 2,
                down: 2
            }
            },
            {
            order: 12,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
        ],
        major: [
            {
            order: 1,
            roman: "I",
            type: "minor",
            name: "Тоника",
            move: {
                up: 2,
                down: 1
            }
            },
            {
            order: 2,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 3,
            roman: "II",
            type: "minor",
            name: "Верхняя вводная",
            move: {
                up: 2,
                down: 2
            }
            },
            {
            order: 4,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 5,
            roman: "III",
            type: "major",
            name: "Верхняя медианта",
            move: {
                up: 1,
                down: 2
            }
            },
            {
            order: 6,
            roman: "IV",
            type: "minor",
            name: "Субдоминанта",
            move: {
                up: 2,
                down: 1
            }
            },
            {
            order: 7,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 8,
            roman: "V",
            type: "minor",
            name: "Доминанта",
            move: {
                up: 2,
                down: 2
            }
            },
            {
            order: 9,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 10,
            roman: "VI",
            type: "major",
            name: "Нижняя медианта",
            move: {
                up: 2,
                down: 2
            }
            },
            {
            order: 11,
            roman: "",
            type: "",
            name: "",
            move: {
                up: 1,
                down: 1
            }
            },
            {
            order: 12,
            roman: "VII",
            type: "major",
            name: "Нижняя вводная",
            move: {
                up: 1,
                down: 2
            }
            }
        ]
    },
    intervals: [
        {   
            order: 1,
            halfs: 0,
            name: "Прима",
        },{ 
            order: 2,
            halfs: 1,
            name: "Малая секунда",
        },{ 
            order: 3,
            halfs: 2,
            name: "Большая секунда",
        },{ 
            order: 4,
            halfs: 3,
            name: "Малая терция",
        },{ 
            order: 5,
            halfs: 4,
            name: "Большая терция",
        },{ 
            order: 6,
            halfs: 5,
            name: "Чистая кварта",
        },{ 
            order: 7,
            halfs: 6,
            name: "Тритон",
        },{ 
            order: 8,
            halfs: 7,
            name: "Чистая квинта",
        },{ 
            order: 9,
            halfs: 8,
            name: "Малая секста",
        },{ 
            order: 10,
            halfs: 9,
            name: "Большая секста",
        },{ 
            order: 11,
            halfs: 10,
            name: "Малая септима",
        },{ 
            order: 12,
            halfs: 11,
            name: "Большая септима",
        },{ 
            order: 13,
            halfs: 12,
            name: "Чистая октава",
        },
    ],
    harmony: ["A", "A#", "H", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    lads: [
      {
        name: "minor",
        gamma: [2, 1, 2, 2, 1, 2, 2]
      },
      {
        name: "major",
        gamma: [2, 2, 1, 2, 2, 2, 1]
      }
    ],
    currentChord: "A",
    currentLad: "minor",
};

function createMeta() {
	const { subscribe, set, update } = writable(metaState);

	return {
		subscribe,
        onChangeLad(lad) { 
            update(state => {
                return {...state, currentLad: lad}
            }
        )},
        onChangeChord(chord){
            update(state => {
                return {...state, currentChord: chord}
            }
        )},
    };
}

export const storage = createMeta();