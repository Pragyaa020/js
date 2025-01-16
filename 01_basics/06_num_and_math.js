const score=400
const balance=new Number(100)
console.log(score);

console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=1123.456
console.log(otherNumber.toPrecision(4));


const hundreds=100000
console.log(hundreds.toLocaleString());  //us standard by default
console.log(hundreds.toLocaleString('en-IN'));  //for indian standard


//++++++++++ Maths +++++++++++++++  (comes with javascript by default)  (is an object in javascript)

console.log(Math.abs(-4));
console.log(Math.round(5.3));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.3));
console.log(Math.min(4,5,6,7));

console.log(Math.random());  //return a random value between 0 and 1
console.log(Math.random()*10);  //multipiles random value with 10 to get a value greater than 1
console.log((Math.random()*10)+1);  //but random value can also be 0.0something ,so to get a number greater than 1 ,we add 1

//trick 
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)) + min)   //math.floor to get the shortest integer
