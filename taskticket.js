const age = 50;
const ticketPrice = 800;
const isStudent = false;

if (age < 10){
    console.log("Free");
}
else if ( age >=60){
    // discount 15%
    const discount = ticketPrice * 15 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);
    
}
else if (isStudent){
    // discount 50%
    const discount = ticketPrice * 50 / 100;
    const payAmount = ticketPrice - discount;
    console.log(payAmount);

}

else{
    console.log(ticketPrice);
} 
   
