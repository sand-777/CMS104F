
const mongoose = require("mongoose");
const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

const express = require("express")
const app = express();
const cors = require("cors")


app.use(cors())
 
//nodejs lai form bata aako data parse gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Database connection function 

connectDatabase();

//GET API 

app.get("/",(req,res)=>{
    res.json({
        status:200,
        message: "success"
    })
})

//Get API => /blogs(All blogs)

app.get("/blogs",async(req,res)=>{

    //fetching/reading all BLogs from Blog model
    const blogs = await Blog.find()

    //check if blogs contains data or not

    if(blogs.length == 0){
        res.status(404).json({
          
            message: "Empty blogs",
            
        })
    }else{
        res.status(200).json({
          
            message: "Blogs fetched successfully",
            blogs : blogs
        })
    }

   
})

//GET API ->  /blogs/:id (single Blog)

app.get("/blogs/:id",async(req,res)=>{
  const id = req.params.id
  // const {id} = req.params 

// if(blog.length == 0){
//     res.status(404).json({
//         message:"No blogs found with that id"
//     })
// }
// else{
//  res.status(200).json({
//     message : "blog fetched successfully",
//     data: blog
//  })
// }

//Alternative
const blog = await Blog.findById(id) 
if(blog){
    res.status(200).json({
        message : "blog fetched successfully",
        data: blog
    })
} else{
    res.status(404).json({
        message: "no blog found"
    })
}

})



//Create blog api

app.post("/blogs", async (req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    //Alternative

    // const {title,subTitle,description}= req.body


    //Insert to database logic goes here
      await  Blog.create({
            title : title,
            subTitle : subTitle,
            description : description
        })
    
    res.json({
        status : 200,
        message : "Blog Created Successfully"
    })

    //Alternative

    // res.status(200).json({
    //     message : "Blog created successfully"
    // })

    

})


//UPDATE BLOG API
app.patch("/blogs/:id",async(req,res)=>{
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description


    // const {title,subTitle,description} = req.body


   await Blog.findByIdAndUpdate(id,{
        title : title,
        subTitle : subTitle,
        description : description
    })

    res.status(200).json({
        message : "Blog updated successfully"
    })

})

//Delet API

app.delete("/blogs/:id",async(req,res)=>{
    const id = req.params.id
    await Blog.findByIdAndDelete(id)

    res.status(200).json({
        message : "Blog deleted successfully"
    })
})

app.listen(2000,()=>{
    
console.log("Node JS has started at port 2000")
})