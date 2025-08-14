const salary = 21001;
const isBCS = true;
const height = 68;
const hasCar = false;
// height = 71;

// if (salary > 20000 && height > 66 ){
//     console.log('Yes he will marry this girl');
// }

// else{
//     console.log('No he will marry another girl');
// }

// more and more condition
// if (salary > 25000 || height > 72 || isBCS == true){
//     console.log('Yes, I choose you for marriage.');
// }
// else{
//     console.log('No, we did not choose a boy for her marriage');
// }

// if  (salary > 25000 && height > 72 && isBCS == true){
//     console.log('Yes, I choose you for marriage.');
// }
// else{
//     console.log('No, we did not choose a boy for her marriage');
// }

// ------------------Complex Condition--------------------
if ((salary > 25000 && hasCar== false) || isBCS == true ){
    console.log('your all family member agreed');
}
if ((salary > 25000 || hasCar== false) && isBCS == true ){
    console.log('your all family member agreed');
}


