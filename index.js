//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
var status;
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log('Listening on port ',port);
})
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+'/public/index.html')
})
function authent(req,res,next) {
    
status=(req.body['password']=='ILoveProgramming')?true:false;
    
    next()
}

app.use(authent)

app.post("/check",(req,res)=>{
console.log(req.body);

    res.sendFile(status?__dirname+'/public/secret.html':__dirname+'/public/index.html')


})