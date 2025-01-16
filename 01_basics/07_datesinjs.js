//dates are calculated in milliseconds form 1st january 1970

let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate=new Date(2023,0,23);  //to create my own date  (months start with 0 in javascript)
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2023,0,23,5,3);
console.log(myCreatedDate2.toLocaleString());

//let myCreatedDate3=new Date("01-14-2023");
let myCreatedDate3=new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());  //time from 1st january 1970 till this date
console.log(Math.floor(Date.now()/1000));   //to convert millisecond to seconds

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getMinutes());
console.log(newDate.getMilliseconds());

console.log(newDate.toLocaleString('default'))