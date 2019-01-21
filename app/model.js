// file กลางใช้งานร่วมกัน

import db from '../db'

const Model = {
    findAll(){
                    // key ประกาศ ใน app->users->model
        return db[this.key]
    },

    find(id){

    },

    create(attrs){

    },

    update(id,attrs){

    },

    destroy(id){

    }
}

export default Model