const user={
    username:"Pragya",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website` );  //this refers to current context
        console.log(this);
        
    }


}

user.welcomeMessage()
user.username="sam";
user.welcomeMessage()

console.log(this);   //here it gives empty object but in browser it gives global object...window


function chai(){
    console.log(this);  //here it will give many things when called

    let username="pragya"
    console.log(this.username);  //does not work in functions alone
    

}

chai()

const chai2=()=>{
    let username="Pragya"
    console.log(this.username);
    console.log(this)  //in arrow function this gives empty object
    
}
chai2();

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(3,4));

//implicit return
const addthree=(num1,num2,num3)=> (num1+num2+num3)
//when we use curly bracket then we need to write return,if we use parenthesis we dont need to write return

const f1=()=>{username:"pragya"} //does not return a value,wrap it in parenthesis for returning value without writing return
const f2=()=>({username:"pragya"})

console.log(f1());  //gives undefined
console.log(f2());

