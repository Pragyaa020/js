
let a=100
//{}           //scope when comes with a function,if-else
if(true){
    let a=10
const b=20
var c=13
console.log("inner:",a);


}
console.log(a);
//console.log(b);
console.log(c);  //var is being printed even ouside the scope of if-else(block scope) ..this is a problem

//let is available only in block scope

function one() {
    const username="Pragya"
    function two() {
        const website="youtube"
        console.log(username);  //two can access variables of one 
        
    }
    //console.log(website);  //but one cannot access variables of two
    two();
    
}

one();

if(true){
    const username="pragya"
    if(username==="pragya"){
        const website="youtube"
        console.log(username + website);
        
    }

    //console.log(website);  //gives error becuse website is in the scope of above if block only
    
}

//console.log(username);  //gives error becuse username is in the scope of  if block only


//++++++++++++++++++++++++++++++interesting ++++++++++++++++++++
addone(5)    ///can be callled here also
function addone(num) {
    return num+1
    
}


//addTwo(5)   cant be called here if function is declared as expression
const addTwo=function (num) {   //callled as expression
    return num+2
    
}

addTwo(9)


