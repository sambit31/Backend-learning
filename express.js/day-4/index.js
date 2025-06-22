import express from "express"
import cookieParser from "cookie-parser";
import session from "express-session"

const app = express();
const PORT=3000;

app.use(session({   //in session there is always create secret key
    secret:"mysambit",
    saveUninitialized:false,//
    resave:false,//
    cookie:{
        maxAge:1000*60*60*24//1day(session cookie)
    }
}));

app.use(cookieParser("sambit"))

app.get('/',(req,res)=>{
    console.log(req.session);
    console.log(req.session.id);

})

app.get("/login",(req,res)=>{
    req.session.user={
        name:"sambit",
        email:"sambit102222@gmail.com",
        age:21
    }
    res.send(`${req.session.user.name} is logged in`)
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("log-out");
})


app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})

