const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNums = myNumbers.map( (num) => num + 10 )
console.log(newNums);

const newNums2 = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num +1 )   
                .filter( (num) => num >= 40 )   //chaining (two three methods can be used together)  //result of the previous method is passed to this method

console.log(newNums2);


