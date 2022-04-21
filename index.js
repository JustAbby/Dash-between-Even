// let counter = 1;
let num = prompt("enter a number that is greater than 100", "example 129");
let numArray = num.split("");
let numResult = [numArray[0]];

for(let counter = 1; counter<numArray.length; counter++) {
    if((numArray[counter-1] % 2 == 0) && (numArray[counter] % 2 == 0)) {
        numResult.push("-", numArray[counter]);
    }else{
        numResult.push(numArray[counter]);
    }
}

console.log(numResult.join(''));

// function display() {
//     while(num < 100) {
//         num = prompt("incorrect", "Input again", "example 160");
//     }
//     alert("you have inputed the right number");
// }
// display();


// function dashes() {
//     while(i = [0] ) {
//         if(i%2==0) {
//         result.push = '-';
//         }i++
//     }
// }
// alert(result)
// dashes(resulteeeee)
// alert
// console.log(result);
// // function dashes()