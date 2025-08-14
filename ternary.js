/**
 *  TERNARY --> three  parts
 * 
 *      ?         :        
 * 
 *   condition ?  do something when true : do something when false
 */


//  const age = 112;
 //normal if_else.
// if (age > 18){
//     console.log('You can vote in government election.');
// }
// else{
//     console.log('You can not vote in government election.');
// }

// simple ternary
//  age >= 18 ? console.log ('You can vote.') : console.log('You can not vote.')


 let price = 500;
 const isLeader = true;
//  const isMinister = true;

//  if (isLeader === true){
//     const discount = price * 75 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
//     // price = 0;
//  }
//  else if ( isMinister === true) {
//     // discount 60%
//     const discount = price * 60 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount)
//  }
//  else{
//     price = price +100;
//      console.log(price)
//  }

   
price = isLeader === true ? 0 : price + 100;


//  OPTIONAL: semi-advanced ternary

if (isLeader === true)
{
    if (price > 1000){
        price /=2;
    }
    else {
        price = 0;
    }
}
else{
    price += 1000;
}

// Feel free to ignore this one

// price = isLeader === true  ? price > 1000 ? price /2 : 0 : price +1000;
price = isLeader === true  ? 
         price > 1000 ? 
              price /2 : 0 
                 : price +1000;