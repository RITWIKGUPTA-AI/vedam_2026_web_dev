//
let str2 = prompt("enter the string");
let str3 = str2.trim();
let str4 = str3.split(" ");
let str5 = " ";
for(let  i=0;i<str4.length;i++){
    str5 += str4[i].charAt(0).toUpperCase() + str4[i].slice(1) + " ";
}
console.log(str5.trim());

