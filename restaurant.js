const age = 35;
const price = 500;

if (age >1 && age < 16 ){
    console.log('You can eat free this time');
}
else if ( age >60 && age < 70){
    // discount 50%
    const discount = price *50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if ( age > 40  && age < 59){
    // discount 25%
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price);
}
