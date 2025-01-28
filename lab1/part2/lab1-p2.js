import http from "http";
const app = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to the server")
    }
    else if(req.url === "/about"){
        res.end("About us")
    }
    else{
        res.end("Page not found")
    }
});
const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
