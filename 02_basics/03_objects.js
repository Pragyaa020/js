// singleton : if we declare an object through constructors then it is singleton (unique)
//but if declared through literals it is not singleton,can have multiple instances

//Object.create  //constructor method


//object literals

const mySym=Symbol("key1")


const JsUser={      //non-singleton object
    name:"Pragya",
    "full name":"Pragya Jaiswal",
    [mySym]:"Mykey1",
    age:18,
    location:"Patna",
    email:"pragya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]


}
console.log(JsUser.email) 
console.log(JsUser["email"]);

//console.log(JsUser.full name)  //not possible since declared using double quotes
console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym)   //wont give symbol like this, its type is string (if symbol is not declared correctly in the object)
console.log(JsUser[mySym]);

//to change value
JsUser.email="pragya@chatgpt.com"
//to lock values
//Object.freeze(JsUser)
JsUser.email="pragya@fire.com"  ///wil not be propogated,no error
console.log(JsUser);
//now we need to unfreeze for further changes so we comment the freezing part
JsUser.greeting=function(){
    console.log("Hello Js User");
    
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js User,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

