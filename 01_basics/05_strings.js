const name="pragya"
const repocount=50

console.log(name+repocount+" Value");

console.log(`Hi,my name is ${name} and my repo count is ${repocount}`);


const gameName=new String('pragya-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);  //these are many methods in this object.we can see them in console

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(1,4);
console.log(newString);

const anotherString=gameName.slice(0,4);
//syntax for slice is slice(start,end)  where end character is not included 
//if start is negative it starts reading from the back of the string using 1 based indexing,end is the final character which should not be included

console.log(anotherString);

const newStringOne="   hitesh   "
console.log(newStringOne.trim());  //remove startinf grom end and start (look at mdn);

const url="https://hitesh.com/hitesh%20choudhary"  //browser does not understand space characters and converts it into url encoding(%20)

console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(gameName.split('-'));  //syntax for split : split(sepearator) or split(seperator,limit)




