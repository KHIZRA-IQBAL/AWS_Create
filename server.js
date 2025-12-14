const express = require("express")
const {connectMongoDb} = require("./db/connection")
const userRouter = require("./routes/userRouter")
const app = express()

//mongodb connection
connectMongoDb(process.env.MONGODB_URL)

//port
const PORT = process.env.PORT || 3000
//middlewre
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("Health is passed ,Server is running")
})

//routes
app.use("/user",userRouter)

app.listen(PORT,()=>(console.log("server is running")
))