const express = require('express');
const bodyParser = require('body-parser')
const pgPromise = require('pg-promise')
const cors = require('cors');
const port = process.env.port || 8000
const app = express()
const router = require('express').Router()
const list = require('./models/list')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/' , router)

router.get('/api/task',(req,res)=>{
       list.index()
            .then((data)=>{
              res.json(data)
            })
            .catch((error)=>{
              console.log(error)
            })
})

router.post('/api/task/create' , (req,res)=>{
console.log(req)
list.create(req.body.data)
.then((data)=>{
  res.json(data)
})
.catch((error)=>{
  console.log(error)
})

})

router.delete('/api/task/delete' , (req,res)=>{
    list.delete(req.query.data)
          .then((data)=>{
            res.json((data))
          })
          .catch((error)=>{
            console.log(error)
          })
})




app.listen(process.env.PORT || 8000,()=>{
  console.log(`listening ${port}`)
})
