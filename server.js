const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/",(req,res)=>{
   res.render("index");
});

app.get("/about-us",(req,res)=>{
   res.render("about-us");
});

app.get("/events",(req,res)=>{
  res.render("events");
});

app.get("/desktop15",(req,res)=>{
     res.render("desktop15");
});

//Attach registration page to the /register route
app.get("/register",(req,res)=>{
    res.send("Hi, Idhar register page daaldo !");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  
