const tinderUser=new Object();  //singleton object


 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false

 console.log(tinderUser);

 const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pragya",
            lastname:"Jaiswal"
        }
    }
 }

 console.log(regularUser.fullname.userfullname.firstname);
 
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}
 const obj4={5:"a",6:"b"}

 //const obj3={obj1,obj2};  //gives object in object
const obj3=Object.assign(obj1,obj2,obj4)  //{} guarantees that all values will get combined and we get desired result,,,{} is the target in which values from all the sources will be stored,,, obj1,obj2,obj4 are sources

 console.log(obj3);


 const obj5=Object.assign(obj1,obj2,obj4)  //{} guarantees that all values will get combined and we get desired result,,,{} is the target in which values from all the sources will be stored,,, obj1,obj2,obj4 are sources
//if instead of using {} as the target ,we choose obj1 as the target we will modify obj1 to look as the final result
 console.log(obj5);
 console.log(obj1);

 //spread
 const obj6={...obj2,...obj4}
 console.log(obj6);

 const users=[
    {
        id:1,
        email:"p@gamil.com",
    },
    {
        id:2,
        email:"h@gamil.com",
    },
    {
        id:3,
        email:"j@gamil.com",
    },
    {
        id:4,
        email:"g@gamil.com",
    },

]

console.log(users[1].email)

console.log(Object.keys(tinderUser));   //returns keys in an array
console.log(Object.values(tinderUser));  //returns values in an array
console.log(Object.entries(tinderUser));  //returns all keyvalue pairs as array...so basically returns an array of arrays

console.log((tinderUser.hasOwnProperty('isLoggedIn')));


 
 
 