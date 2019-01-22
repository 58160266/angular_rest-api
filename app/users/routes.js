// route to resource

import controller from './controller'

export function setup(router){
    router
                            // เรียนค่าต่างๆผ่าน method
        .get('/:id',controller.get)
        .get('/',controller.getAll)
        .post('/',controller.create)
}