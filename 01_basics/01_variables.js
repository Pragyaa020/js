const accountId=144553
let accountemail="pragya@google.com"
var accountPassword="12345"
accountcity="Jaipur"
let accountState;

//accountId=2  const cant be changed

/* prefer not to use var because of issue in block scope and functional scope*/ 

accountemail="hc@hc.com"
accountPassword="212111"
accountCity="Bengaluru"



console.log(accountId);
console.table([accountId,accountPassword,accountemail,accountCity,accountState])
