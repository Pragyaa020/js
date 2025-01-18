function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("G");
    console.log("Y");
    console.log("A");
    
}

//sayMyName   reference of function
//sayMyName()  execution of function

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
    
}

addTwoNumbers(3,4)
addTwoNumbers(3,"4")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

//parameters->input in a sunction when it is declared
//arguments->input given when function is called
//in the above example,number1,number2 are parameteres and 3,4 are arguments

const result=addTwoNumbers(3,5)
console.log("Results: ",result);  //since function is not returning

function addTwoNumbers2(number1,number2) {
   
    return number1+number2
    
}

const result2=addTwoNumbers2(3,5)
console.log("Results: ",result2);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Pragya"))
console.log(loginUserMessage())  //gives undefined  

//////////// so we change the function to check for undefined using if-else

//  function loginUserMessage(username){
//     if(username===undefined){  //or if(!username)
//         console.log("Please enter a username");
//         return;
        
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

///////////to avoid a situation where parameter is never undefined we can define a default value of the parameter

// function loginUserMessage(username="sam"){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())
// console.log(loginUserMessage("Pragya"))

function calculateCartPrice(...num1){   //rest operator
return num1
    
}
console.log(calculateCartPrice(200,400,500));  //no matter how many arguments I send ,they will be made into an array and send as parameter

function calculateCartPrice2(val1,val2,...num1){   //rest operator
    return num1
        
    }
console.log(calculateCartPrice2(200,400,500,2000)); 

const user={
    username:"Pragya",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user);
handleObject({
    username:"sam",
    price:399

})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([578,890]));

