let weight = Number(prompt(`Please enter your weight(kg)`));
console.log(weight);
let heightCm = Number(prompt(`Please enter your height(cm)`));
console.log(heightCm);
let heightM = heightCm / 100;
console.log(heightM);
let bmi = weight / (heightM * heightM);
if (bmi<16){
    console.log("Severely underweight");
}else if (16<= bmi && bmi<=18.5){
    console.log("Underweight");
}else if (18.5<bmi && bmi<=25){
    console.log("Normal");
}else if (25<bmi && bmi<=30){
    console.log("Overweight");
}else {
    console.log("Obese");
}