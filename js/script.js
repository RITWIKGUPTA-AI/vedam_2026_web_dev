// let username;
// username="I am ritwik";
// console.log("outcome",username)
// let i=20;
// while(i>0){
//     if(i%3==0&&i%5==0){
//         console.log("fizzbuzz");
//     }else if(i%3==0){
//         console.log("fizz");
//     }else if(i%5==0){
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }
//     i--;
// }
let username;
username = "I am ritwik";
console.log("outcome", username);

let i = 20;

while (i > 0) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
    i--;
}

let arr = [1, 2, 3, 4, 5];

arr.push(10);
console.log("length of arr", arr.length);
console.log("values in arr", arr);

arr.pop();
console.log("values in arr", arr);

arr.shift();
console.log("values in arr", arr);

let a;
console.log("a is", a);

a = 10;
console.log("a is", a);

let str = "what is your name ";
let str1 = "what is your hobby";

console.log("str", str);
console.log("str1", str1);

console.log("second element is", arr[1]);
console.log("sixth element is", arr[5]);

let value = null;
console.log("values", value);
function myfn(){
    console.log("i am a resusable block of code");
}
console.log("Before Function");
function fnwithPara(var1,var2){
    console.log("var1",var1,"var2",var2);
}
console.log("Brefore");
fnwithPara(10,20);
console.log("After");
function findeven(mynum){
    let iseven=mynum%2==0;
    return iseven;
}
console.log("Before");
let result = findeven(10);
console.log("result",result);
console.log("After");

