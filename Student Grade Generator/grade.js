/*Set grade to an empty string so that you can change it when you console.log */
let grade = ""

/*Describe the function that takes an if statement and returns letters describing the grade */
function gradeGenerator(grade){
    if (79 < grade && grade <= 100){
        return "A"
    }

    else if (59 < grade && grade <= 79 ){
        return "B"
    }

    else if (48 < grade && grade <= 59){
        return "C"
    }

    else if (39 < grade && grade <= 49){
        return "D"
    }

    else {
        return "E"
    }
}
/*Call the function. If you don't your code won't work*/
gradeGenerator(grade);

/*Type the marks in the paranthesis after grade generator */
console.log(gradeGenerator());
