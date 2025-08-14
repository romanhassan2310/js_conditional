/**
 *  MULTI_LEVEL_CONDITION
 */

const price = 3000;

if ( price >= 5000){
    // discount 10%.
    const discount = price * 10 / 100;
    // console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if( price > 2500) {
    // discount 5%.
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

}
else {
    console.log(price);
}

