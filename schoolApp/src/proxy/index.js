const express =require("express");
const app =express();
const cors=require("cors")
const createProxyMiddleware = require("http-proxy-middleware")
app.use(cors())
app.get("/",createProxyMiddleware ({
    target:'http://localhost:8085',changeorigin:true
}))

app.listen(4200,()=>{
    console.log("proxy started");
})