const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)  //we get array in array using this
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

const allHeros=marvel_heros.concat(dc_heros)  //concats two arrays and returns a new arrray

console.log(allHeros);

//spread (...) -> makes the elements of an array into individual elements
//preferrd more than concat because allows merging of multiple arrays not only two
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)  //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.  //parameter specifies depth till which it will concatenate
console.log(real_another_array);

console.log(Array.isArray("Pragya"));
console.log(Array.from("Pragya"));
console.log(Array.from({name:"pragya"}));  //gives empty array because it cant make array ..interseting case for interviews

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

