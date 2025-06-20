import express from "express"
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
const PORT=8080;

app.get('/',(req,res)=>{
    res.cookie("name","express",{
        maxAge: 1000 *60 * 60 * 24//millisec,sec,min,hr(expiry)
    })//key value pair
    res.send("Hello World");
});


app.get("/product",(req,res)=>{
    console.log('Cookies:',req.cookies);

    if(req.cookies.name && req.cookies.name === "express"){
            res.status(200).send({
        id:1,
        name:"Item-01",
        Price:"$100"
    })
    }
res.status(403).send("you are not authorized to view this page")
})

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

//cookie(key:value)----->
//cookie parser(kind of middleware) ---->(managing cookies in secret ways)
