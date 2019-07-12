<Gamma />

<script>
  import Gamma from "./Gamma/index.svelte";

  let state = {
    name: "Chords",
    harmony: ["A", "A#", "H", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"],
    lads: [
      {
        name: "minor",
        hamma: [2, 1, 2, 2, 1, 2, 2]
      },
      {
        name: "major",
        hamma: [2, 2, 1, 2, 2, 2, 1]
      }
    ],
    currentChord: "A",
    currentLad: "minor",
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
    }
  };
  window.state = state;
</script>

<style>
  h1 {
    color: purple;
  }
</style>
