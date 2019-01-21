// เก็บ business logic

import db from '../../db'
import Model from '../model';

const Users = {
    // ... อะไรก็ตามที่ประกาศภายใต้ model ให้บรรจุใน user ด้วย
    ...Model,
    //ให้รู้ว่าจะค้นอะไร
    key: 'users'

    // ใช้ findAll ใน Model แทน
    // findAll(){
    //     //database
    //     return db.users
    // }
}

export default Users