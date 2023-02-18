
const {readFileSync ,writeFileSync} =require("fs");
//const {readFileSync} =require("fs");
const path =require('path')
const fullPath =path.resolve(__dirname ,'content','subfolder','test.txt')
console.log(fullPath);

 const txt1 =readFileSync(fullPath,"utf8");
 const txt2 =readFileSync("./content/seand.txt","utf8");
// const txt3 =readFileSync("./content/subfolder/test.txt","utf8")
writeFileSync("./content/Everthing.txt",
`--------------------------------------\nI am wasim Soudan 
This is full file come from marge txt1 and txt2 \n ${txt1} \n ${txt2} \n`,{flag:'a'})