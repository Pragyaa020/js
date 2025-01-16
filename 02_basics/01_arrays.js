//array

const myArr=[0,1,2,3,4,5,true,"pragya"]
//console.log(myArr[0]);


const myHeros=["shaktimaan","naagraj"]
const myArr2=new Array(0,1,2,3,4);

//array methods

myArr.push(6);
myArr.push(7);

console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9);  //not a preferred method because all elements of the array need to be shifted ...time consuming
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));  //gives bool datatype in return
console.log(myArr.indexOf(3));

const newArr=myArr.join()  //adds elements of an array into a string
console.log(myArr);
console.log(newArr);  //prints string

//slice and splice

console.log("A",myArr);
const myn1=myArr.slice(1,3);  //end parameter(index) is not included in slice
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);//end parameter(index) is included in splice
console.log(myn2);
console.log("c",myArr);

//slice does not alter the original array but splice alters the original array and cuts that part from it
