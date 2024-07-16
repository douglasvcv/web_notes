import express, { json } from 'express'
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post("/api/update-notepad", (req, res)=>{
    res.send("Tome")
})

app.listen(3000, ()=>console.log("Servidor aberto: http://localhost:3000"))