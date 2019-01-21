import express from 'express'
import bodyParser from 'body-parser'

// นำ function ออกไป
export function setup(){

    const app = express()
    const PORT = 3000 //port เอาไว้ฟัง

    // bodyParser แปลงข้อมูลต่างๆจาก การ moniter : post put patch ... เป็น json
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json()) 



    // Route
    // route path
    app.get('/',(req,res)=>{
        //return string 'Hello World' in HTML Page
        res.send('Hello World');
    })

    app.listen(PORT,()=>
        //หลังจาก start จะมีการ log โชว์ข้อความ
        console.log('App listening on http://localhost:'+PORT)
    )

}