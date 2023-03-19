/*Define speed using let variable as it can be reassigned */
let speed = 115 

/*Define points that rounds down speed when it is subtracted from 70 then divide it by 5 */
const points = Math.floor((speed - 70)/5); 

/*Describe a function speed detector that takes an if condition and return the proper response */
function speedDetector(speed){
    if (points <= 0){
       return "Ok."
    }
    else if (points <= 12){
        return `Points: ${points}`
    }
    else {
        return "License suspended"
    }
}


/*console.log to check if it is working */
console.log(speedDetector(speed)); 