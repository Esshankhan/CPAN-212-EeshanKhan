const auth =(req,res,next)=>{
    
    if(req.query.username == "Eeshan"){
        next(); 
    }else{
        res.send("You are not authorized to view this page");
    }
}

export default auth;