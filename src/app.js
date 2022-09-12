const express=require("express");
const app=express();
const path=require("path")

const staticp=path.join(__dirname,"../public")

// console.log(__dirname)

app.use(express.static(staticp))

app.set("view engine",'hbs')

app.get('/',(req,res)=>{
    res.render("index")

})
app.get('/about',(req,res)=>{
    res.render("about")

})
app.get('/weather',(req,res)=>{
    res.render("weather")

})
app.get('*',(req,res)=>{
    res.render("404error")

})

 
app.listen(8008,()=>{
    console.log("listening to the server")
})