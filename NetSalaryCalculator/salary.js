// Define using let as it can be reassigned. Here you can put your exact values
let grossSalary = 120000
let condtributionBenefit = 20000 /*NHIF or NSSF*/ 
let disabilityExemption = ""
let Deductions = condtributionBenefit + disabilityExemption
let taxablePay = grossSalary - Deductions
//You can run console.log(taxablePay); to check if taxable pay works
let personalRelief = 2400
let insuranceRelief = ""
let relief = personalRelief + insuranceRelief
//console.log(relief); to check if works
 
/*Describe a function gross tax depending on the salaries 
calculates the gross salary from the percentages on tax rates*/
function grossTax(){
    if (taxablePay <= 24000){
        return 0.1 * taxablePay
    }
    else if (24000 < taxablePay && taxablePay <= 32222 ){
        return 0.25 * taxablePay
    }
    else {
        return 0.3 * taxablePay
    }
 }
grossTax();

//Assign gross tax so that it is easier when you console.log it 
let grossT = grossTax()
//console.log(grossT); to check if it works

payee  = grossT - relief
//console.log(payee);

//Describe a function net salary counter that returns the net salary
function netSalaryCalculator(){
    if (payee <= 0){
        return grossSalary
    }
    else{
        return grossSalary - payee
    }
   
}

//Assign the function so you can console.log it
let netSalary = netSalaryCalculator()
console.log(netSalary);

