let score="33abc"

console.log(typeof score);

let valueInNumber= Number(score);
console.log(typeof valueInNumber );
console.log( valueInNumber );

//if score= NULL valueinnumber becomes 0
//if score=undefined valueinnumber becomes nan
//if score=true valueinnumber=true ,score=false valueinnumber=0

let isLoggedIn=9

let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//if isloggedIn=empty string,booleanIsLoggedIn=false
//if isLoggedIn=string,booleanIsLoggedIn=true
//if isLoggedIn=integer other than 0,booleanIsLoggedIn=true


let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));

//**************Operations**********

let value=3
let negValue=-value
console.log(negValue)

let str1="hello"
let str2=" pragya"

let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2")

console.log(true)
console.log(+true) //converts into integer
//console.log(true+)  gives error

console.log(+"")  //converts bool empty string into 0

let num1,num2,num3

num1=num2=num3=2+2  //not preferred

let gameCounter=100
gameCounter++
console.log(gameCounter)


