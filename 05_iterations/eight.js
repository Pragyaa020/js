const myNums = [1, 2, 3]


const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc : ${acc} and curval : ${currval}`)
    return acc + currval
}, 0)

const myTotal2= myNums.reduce ( (acc,curr) => acc+curr,0)

console.log(myTotal);
console.log(myTotal2);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999

    },
    {
        itemName: "pyhton",
        price: 999

    },
    {
        itemName: "mobile dev course",
        price: 5999

    },
    {
        itemName: "data science Course",
        price: 12999

    },
]

const pricetoPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(pricetoPay);



