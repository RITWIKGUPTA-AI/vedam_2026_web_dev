let username;
username="I am ritwik";
console.log("outcome",username)
let i=20;
while(i>0){
    if(i%3==0&&i%5==0){
        console.log("fizzbuzz");
    }else if(i%3==0){
        console.log("fizz");
    }else if(i%5==0){
        console.log("buzz");
    }else{
        console.log(i);
    }
    i--;
}
let arr = [1,2,3,4,5];
arr.push(10);
console.log("length of arr",arr.length);
console.log("values in arr",arr);
arr.pop();
console.log("values in arr ",arr);
arr.shift();
console.log("values in arr ",arr);

