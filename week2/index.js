//const http = require("http");
import http from  "http";
import fs from "fs";
const app = http.createServer((req,res)=>{
    if(req.url ==="/"){
        let webpage = fs.readFileSync("homepage.html")
        res.end(``);

    }

});
const PORT = 8001;
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
});

