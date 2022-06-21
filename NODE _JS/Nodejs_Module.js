const fs = require("fs");
// const text = fs.readFileSync("del.txt","utf-8");
// console.log(text);
// console.log("Raj kumar");
// let text="Raj Kumar is a Good";
// 
let Text=fs.readFileSync("Raj.txt","utf-8");
console.log(Text);
console.log("Creating a new file...");
fs.writeFileSync("Rohit.txt",Text);
let text=fs.readFileSync("Rohit.txt","utf-8");
text=text.replace("Raj Kumar","Rohit");
console.log(text);