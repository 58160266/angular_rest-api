//ควบคุมตัวที่จะ response ออกมา

const UserSerializer = {

    for(method,resource){
                    //method ชื่อ get ก็จะไป function get
        return this[method](resource)
    },
        //user
    get(resource){
        const {id,email,isAdmin} = resource
        return {id ,email,isAdmin}
    }

}
export default UserSerializer