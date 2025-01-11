//on the basis of how data is stored in memory and how it is accesed there are two datatypes: primitive and non-primitive

// Primitive (call by value (reference of memory is not given,they are copied and given and changes are made in copy only not the original variable))
//7 categories:String,Numebr,boolean,null,undefined,symbol,bigint

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)  //symbol is used to create unique elements

const bigNumber=37689334627672n
console.log(typeof bigNumber )

//in javascript,we assign value to the variable “a” without specifying its type and type of the variable will be
// set dynamically depending on the value that we assigned to the variable.
//That’s why it is possible to assign, for example, string “abc” to the variable a, and later on re-assign another value, for example, Number.
//It means that type of the variable is set dynamically during code execution and moreover this type can change during code execution.
//therefor javascript is a dynamic type language

//Non Primitive (Reference type,direct memory reference is allocated)
//Array,Objects,Functions  (their datatypes are objects only for function it is function object)

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"Pragya",
    age:22,


}

const myFunction =function(){
    console.log("Hello World");
}


//++++++++++++++++++++++++++++
//two types of memory:stack and heap
//stack(primitive),heap(Non-primitive)
//when stack memory is used,we get a copy of variable declared
//when heap memory is used,we get reference of original value

let myname="Pragya"
let anotherName="okok"
console.log(myname)

console.log(anotherName)
//copy is passed in stack,so value is different in both

let user1={
    email:"user@email.com",
    upi:"user@ybl"

}

let user2=user1
user2.email="user2@email.com"

console.log(user1.email)
console.log(user2.email)
//heap gets same refernce so value is changed in both



