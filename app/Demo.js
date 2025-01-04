function Unique(arr) {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
      const x = arr[i];
      if (count[x]) {
        count[x]++;
      } else {
        count[x] = 1;
      }
    }
    return count;
  }
  const Arr = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E', 'F'];
  console.log(Unique(Arr));
  

  const array1 = [1, 2, 3, 4, 5];

const shuffledArray = array1.sort(() => Math.random()-0.5);

console.log(shuffledArray);

//Algorithm
const fisherYatesShuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
  }
};

const array = ['A', 'B', 'C', 'D'];
const deck=array.flatMap((x)=>Array(8).fill(x));// map will create nested array for every callback 
fisherYatesShuffle(deck); //flatmap will flatten into single array

console.log(deck);
