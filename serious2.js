let userNumber = Number(prompt("Enter your number"));
if (userNumber<0){
    console.log("It does not exist");
}else if (userNumber === 0){
    console.log(`The factorial of ${userNumber} is 1`);
}else{
    let fact = 1
    for (i = 1; i <= userNumber; i++){
        fact *= i;
    }
    console.log(`The facorial of ${userNumber} is ${fact}`);
}


