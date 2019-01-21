// file กลางใช้งานร่วมกัน

import db from '../db'

const Model = {
    findAll(){
                    // key ประกาศ ใน app->users->model
        // return db[this.key]
        return this.collection()
    },

    find(id){
        // return db[this.key].find(user => user.id === id)
        return this.findRecord(id)
    },

    create(attrs){
        const collection = this.collection()
        const record = 
                                            //สร้าง id ให้มัน
            this.withPermitedAttrs(attrs, { id: collection.length +1 })
                        //ค่า record เดิม รวมกับ record ใหม่ ที่พึ่งสร้าง -> เอามาใส่ใน array
        this.setCollection([...collection,record])

        //คืนผลลัพทืที่พึ่งสร้างเสร็จ
        return record 
    },

    update(id,attrs){

    },

    destroy(id){

    },

    //ช่วยเรื่องการซ้ำซ้อน
    collection(){
        return db[this.key]
    },

    findRecord(id){
                                                            // + แปลงค่าให้ตรง
        return this.collection().find(record => record.id === +id)
    },
                            //ค่าเริ่มต้น ไม่ส่งมาค่าก็ว่าง
    withPermitedAttrs(attrs,init = {} ){
                    //มาจาก app->user->model.js
        return this.permittedAttrs.reduce(
            // reduce รับ record กับ attr
            (record,attr) => 
                //attrs ที่เรารับเข้ามามี permittedAttrs อยู่ไหม
                                //มี คืน record กับ ค่า          // ไม่มี คือ record
                attrs[attr] ? {...record,[attr]:attrs[attr]} : record
            ,init )
    },
    
    // เปลี่ยน collection ให้เป็นปัจจุบัน
    setCollection(collection){
        db[this.key] = collection
    }
}

export default Model