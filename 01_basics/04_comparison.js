console.log("2">=1);
console.log("02">1);  //these comparisons dont give predicatble results
//we should 
//
// always compare same datatypes

console.log(null>0) //false
console.log(null==0)  //false (converts into Nan)
console.log(null>=0)  //true
//this happens because an equality check == and comparison check > < >= <= work differently
//comparisons convert to a number ,treating it as 0
//That's why null>=0 is true and null>0 is false


console.log(undefined==0); //false
console.log(undefined>0);  //false
console.log(undefined<0);  //false

//strict check (===) checks value and datatype

console.log('2'===2)
