let userInput = prompt("Enter your Input");
console.log("User Said" , userInput);
let  arr = [];
for(let i=1;i<userInput;i++){
    let str = " ";
    for(let j=1;j<=i;j++){
        str = str + j+ " ";
    }
    console.log(str);
}