
const {readFile ,writeFile} =require("fs");

readFile("./content/firts.txt" ,"utf-8" ,(error,result)=>{
    if (error) {
        return
    }
    const ftxt1=result
    readFile("./content/seand.txt","utf8",(error,result)=>{
        if(error){
            return
        }
        const ftxt2=result
        //console.log(`ftxt1 :${ftxt1} \n ftxt2 :${ftxt2}`);

        writeFile("./content/Every2.txt",`ftxt1 :${ftxt1} \nftxt2 :${ftxt2}`,{flag:'a'},
        (err, result) => {
            if (err) {
              console.log(err)
              return
            }
            console.log('done with this task')
          })
    })
})