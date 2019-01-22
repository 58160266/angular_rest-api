// เก็บ business logic

// import db from '../../db'
// import { promises } from 'fs';

import Model from '../model';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Users = {
    // ... อะไรก็ตามที่ประกาศภายใต้ model ให้บรรจุใน user ด้วย
    ...Model,
    //ให้รู้ว่าจะค้นอะไร
    key: 'users',
    permittedAttrs: ['email'],

    // ใช้ findAll ใน Model แทน
    // findAll(){
    //     //database
    //     return db.users
    // }

    create (email , password){
                // การทำงานเป็นแบบ asyn เลยใช้ promise ให้รู้ว่าทำงานเสร็จ แล้ว controller ถึงจะ response
        return new Promise((resolve,reject)=>{
                                        //ทำงาน 2^12
                                    //callback
        bcrypt.hash(password , 12 , (err,hash)=>{
            //กรณี error
            if(err) return reject(err)

            const collection = this.collection()
            const user = {
                id:collection.length+1,
                email,
                password: hash,
                isAdmin:false
            }

            this.setCollection([
                ...collection,user
            ])
            return resolve(user)
        })
        })

    }
}

export default Users