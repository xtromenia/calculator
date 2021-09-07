
$(".number-button").each(function () {
    $(this).click(function () {
        appendNumbers($(this).text())
    });
});

$(".function-button").each(function () {
    $(this).click(function () {
        appendNumbers($(this).text())
    });
});

$("#clear-button").click(function () {
    clear();
});

$("#equals-button").click(function () {
    var numbersAndFunctions = $("#numbers-in-display").text();
    // var numbers = numbersAndFunctions.split(" ");;
    clear();
    appendNumbers(eval(numbersAndFunctions));
});

function appendNumbers(number){
    $("#numbers-in-display").append(number);
}

function clear(){
    $("#numbers-in-display").text("");
}

// function calculate(numbers){ 

//     var functions = ['+','-','*','/'];
//     var answer = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] === '+' && !functions.includes(numbers[index+2])) {
//             answer += Number(numbers[index-1]) + Number(numbers[index+1]);
//         }

//         else if (numbers[index] === '-' && !functions.includes(numbers[index+2])) {
//             answer += Number(numbers[index-1]) - Number(numbers[index+1]);
//         }

//         else if (numbers[index] === '/' && !functions.includes(numbers[index+2])) {
//             answer += Number(numbers[index-1]) / Number(numbers[index+1]);
//         }

//         else if (numbers[index] === '*' && !functions.includes(numbers[index+2])) {
//             answer += Number(numbers[index-1]) * Number(numbers[index+1]);
//         }
//     }
    
//     appendNumbers(answer);
// }