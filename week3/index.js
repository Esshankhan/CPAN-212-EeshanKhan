App.get("/search",(req,res)=>{
    console.log(req.url)
    console.log(req.header)
    console.log(req.query)
    console.log(req.parmas)
    console.log(req.body)
res.send("You came to the /search route")


    console.log(req.url)
    console.log(req.header)
    console.log(req.query)
    console.log(req.parmas)
    console.log(req.body)
res.send("You came to the /item route")

})


