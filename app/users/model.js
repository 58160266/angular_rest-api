// เก็บ business logic

import db from '../../db'

const Users = {
    findAll(){
        //database
        return db.users
    }
}

export default Users