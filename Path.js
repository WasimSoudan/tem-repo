const path =require('path')
console.log(path.sep);
//prpeer he location of file 
const filePath =path.join('/content/','subfolder','text.txt')

console.log(filePath);
const base =path.basename(filePath)
console.log(base)

const absolute =path.resolve(__dirname ,'content','subfolder','text.txt')
console.log(absolute);

console.log(path.relative());







// const os =require('os')

// //info about current user

// const user  =os.userInfo()

// //console.log(user);

// //method return the system uptime in seconds 
// console.log(`the System Uptime is ${os.uptime()} seonds`);

// const currentOS ={
//     name:os.type(),
//     release:os.release(),
//     totaMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentOS);