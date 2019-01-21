import express from 'express'
import bodyParser from 'body-parser'

const app = express()
//port เอาไว้ฟัง
const PORT = 3000

// bodyParser แปลงข้อมูลต่างๆจาก การ moniter : post put patch ... เป็น json
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json()) 



// route
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,()=>
    //หลังจาก start จะมีการ log โชว์ข้อความ
    console.log('App listening on http://localhost:'+PORT)
    )
