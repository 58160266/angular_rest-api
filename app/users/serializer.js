//ควบคุมตัวที่จะ response ออกมา

import Serializer from '../serializer'

const UserSerializer = {
    ...Serializer,

        //user
    get(user){
        // const {id,email,isAdmin} = resource
        // return {id ,email,isAdmin}

        return this.seralize(user)
    },

    getAll(users){
        return users.map(user => this.seralize(user))
    },

    create(user){
        return this.seralize(user)
    },

    seralize(user){
        const {id,email,isAdmin} = user

        return {id , email, isAdmin}
    }

}
export default UserSerializer