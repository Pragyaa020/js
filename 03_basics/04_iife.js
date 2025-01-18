//Immediately Invoked Function expressions (IIFE)
//to eliminate the problem of pollution from global scope
(function chai(){     //named iife
    console.log(`DB CONNECTED`);  
    
})() ;   //for iife semicolon is imp because js does not know where to end it

//wrap the function in parenthesis to execute it directly
//syntax :(function)()

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("pragya");

