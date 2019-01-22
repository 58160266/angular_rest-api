const Serializer = {
    for(method,resource){
        //method ชื่อ get ก็จะไป function get
        return this[method](resource)
    },

}

export default Serializer