import express from 'express'
import fs from 'fs' // เข้าถึง dir ต่างๆ
import bodyParser from 'body-parser'
import config from './config';


//เอาไว่ใช้  route.js ที่เราประกาศขึ้นมา
function setupRouter(app){
                    // __dirname = directory name สำหรับ server.js
    const APP_DIR = `${__dirname}/app`
    // name of directories in app
    // ค่าจะออกมาเป็น array      
                        // อ่าน file ต่างๆ ภายใต้ APP_DIR       
    const features = fs.readdirSync(APP_DIR).filter(
                //filter เอาแค่ file ที่เป็น dir นะ
        file => fs.statSync(`${APP_DIR}/${file}`).isDirectory()
    )

    features.forEach(feature =>{

        const router = express.Router() //สร้าง router เจาะจง เฉพาะ feature นั้นๆ
        const routes = require(`${APP_DIR}/${feature}/routes.js`)

        routes.setup(router)
        // เมื่อไหนก็ตามที่จะติดต่อกับ path อะไร ก็จะไปติดต่อกับ route ตัวนั้นให้
        app.use(`/${feature}`,router) // /users
    })
    
}

// นำ function ออกไป
export function setup(){

    const app = express()
    const PORT = config.port
    //const PORT = 3000 //port เอาไว้ฟัง

    // bodyParser แปลงข้อมูลต่างๆจาก การ moniter : post put patch ... เป็น json
    app.use(bodyParser.urlencoded({ extended: true}))
    app.use(bodyParser.json()) 

    setupRouter(app)


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