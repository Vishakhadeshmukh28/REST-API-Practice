const express = require("express");
const app=express();
const port=3000;
const path=require("path");

app.use(express.urlencoded({extended: true}));

app.set("views engine","ejs");

app.set("views",path.join((__dirname,"views")));
app.use(express.static(path.join(__dirname,"public")));

const posts = [
    {
      id: 101,
      username: "tech_guru",
      content: "JavaScript is a versatile language used for both frontend and backend development. It enables developers to create dynamic web applications, interactive user interfaces, and server-side applications using Node.js."
    },
    {
      id: 102,
      username: "ai_enthusiast",
      content: "Artificial Intelligence is transforming industries by automating tasks and improving efficiency. AI technologies such as machine learning and deep learning are widely used in healthcare, finance, and autonomous systems."
    },
    {
      id: 103,
      username: "web_dev_pro",
      content: "React.js is one of the most popular frontend frameworks for building modern web applications. It allows developers to create reusable UI components and efficiently update the user interface with its virtual DOM feature."
    },
    {
      id: 104,
      username: "cyber_secure",
      content: "Cybersecurity measures like multi-factor authentication help protect user data from breaches. Regular software updates, strong passwords, and encryption are essential to safeguard personal and organizational data from cyber threats."
    },
    {
      id: 105,
      username: "data_science_geek",
      content: "Data Science involves analyzing large datasets to extract meaningful insights and patterns. It combines statistics, programming, and domain knowledge to enable data-driven decision-making in businesses and research."
    }
  ];
  

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})








app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})