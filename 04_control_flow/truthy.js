const userEmail="h@hitsh.ai"
if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}

const userEmail2=""
if(userEmail2){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}
const userEmail3=[]
if(userEmail3){
    console.log("Got user email");
    
}else{
    console.log("Don't have user email");
    
}

//falsy values  (values which are assumed as false values)
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//all rest are truthy values 
//some truthy values:
//"0",'false'," ",[],{},function(){}(empty function)

//to check array we follow this step
if(userEmail3.length===0){
    console.log("array is empty");
    
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator(??):null ,undefined

let val1;
val1=5??10 
val1=null??10  //safety check using null

val1=undefined??15  //safety check using undefined
val1=null??10??20  //first value will get printed

console.log(val1);

//ternary operator
const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")

