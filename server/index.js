var express = require('express')
var {MongoClient} = require('mongodb')
var cors = require('cors')
url = 'mongodb+srv://pranathib10:pranathi@cluster0.snb7r.mongodb.net/?retryWrites=true&w=majority'
var app = express()

app.use(express.json())
app.use(cors())

app.post('/upload',(req,res)=>{
    MongoClient.connect(url,(err,cluster)=>{ // http://localhost:5000/upload
        var id = req.body.id
        var name = req.body.name
        var link = req.body.link
        var data = {id:id,name:name,image:link}
        if(err) throw err;
        else{
            var dbo = cluster.db('employeedb')
            var col = dbo.collection('employeecollection')
            col.insertOne(data,(err,suc)=>{
                if(err){
                   return res.status(200).send("Not inserted")
                }
                else{
                   return res.status(200).send('Image Uploaded')
                }

            })
            
        }
    })
})
app.get('/',(req,res)=>{ // http://localhost:5000/upload
    res.send('hello')
})
app.get("/get",(req,res)=>{ // http://localhost:5000/get
    MongoClient.connect(url,(err,cluster)=>{
        if(err) throw err;
        else{
            var dbo = cluster.db('employeedb')
            var col = dbo.collection('employeecollection')
            col.find().toArray((err,suc)=>{
                if(err){
                    return res.status(200).send(err)                
                }
                else{
                    res.status(200).send(suc)
                }

            })
            
        }
    })
})

app.listen(5000,()=>{
    console.log("Sever Running......")
})