// route to resource

import controller from './controller'

export function setup(router){
    router
        .get('/:id',controller.get)
        .get('/',controller.getAll)
        .post('/users',controller.create)
}