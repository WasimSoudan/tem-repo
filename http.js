const http =require("http");
//http://localhost:5000/
const server =http.createServer((req,res)=>{
    if(req.url==="/"){
    res.end('Welcome to our home page')
    }else if(req.url==="/about"){
    res.end('Welcome to our About page')
    }
    res.end(`<h1>Oops!</h>
    <p>can't seem to find the page you are looking for
    <a href="/">back home</a>`)
})

server.listen(5000)