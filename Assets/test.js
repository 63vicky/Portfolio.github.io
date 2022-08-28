// // program to find the sum of positive numbers
// // if the user enters a negative numbers, the loop ends
// // the negative number entered is not added to sum

// let sum = 0;

// // take input from the user
// let number = parseInt(prompt('Enter a number: '));

// while(number >= 0) {

//     // add all positive numbers
//     sum += number;

//     // take input again if the number is positive
//     // number = parseInt(prompt('Enter a number: '));
// }

// // display the sum
// console.log(`The sum is ${sum}.`);

let math = parseInt(prompt("Enter your marks: "));
let science = parseInt(prompt("Enter your marks: "));
let inglish = parseInt(prompt("Enter your marks: "));

if(math < 33 && science < 33 && inglish < 33){
    console.log("I'm afraid you are fail in all subjects Ravi.");
}
else if((math < 33)){
    console.log("Your Math's is very week also fail");
}
else if((math >= 33 && math <= 50)){
    console.log("Your Math's grade is \"E\"");
}
else if((math >= 50 && math <= 60)){
    console.log("Your Math's grade is \"D\"");
}
else if((math >= 60 && math <= 70)){
    console.log("Your Math's grade is \"C\"");
}
else if((math >= 70 && math <= 80)){
    console.log("Your Math's grade is \"B\"");
}
else if((math >= 80 && math <= 100)){
    console.log("Your Math's grade is \"A\"");
}
else{
    console.log("BSDK, enter valid marks.");
}

if((science < 33)){
    console.log("Your science's is very week also fail");
}
else if((science >= 33 && science <= 50)){
    console.log("Your science's grade is \"E\"");
}
else if((science >= 50 && science <= 60)){
    console.log("Your science's grade is \"D\"");
}
else if((science >= 60 && science <= 70)){
    console.log("Your science's grade is \"C\"");
}
else if((science >= 70 && science <= 80)){
    console.log("Your science's grade is \"B\"");
}
else if((science >= 80 && science <= 100)){
    console.log("Your science's grade is \"A\"");
}
else{
    console.log("Enter valid marks");
}

if((inglish < 33)){
    console.log("Your inglish's is very week also fail");
}
else if((inglish >= 33 && inglish <= 50)){
    console.log("Your inglish's grade is \"E\"");
}
else if((inglish >= 50 && inglish <= 60)){
    console.log("Your inglish's grade is \"D\"");
}
else if((inglish >= 60 && inglish <= 70)){
    console.log("Your inglish's grade is \"C\"");
}
else if((inglish >= 70 && inglish <= 80)){
    console.log("Your inglish's grade is \"B\"");
}
else if((inglish >= 80 && inglish <= 100)){
    console.log("Your inglish's grade is \"A\"");
}
else{
    console.log("Enter valid marks.");
}