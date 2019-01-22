import Users from './model'
import UserSerializer from './serializer'

const UsersController = {
    getAll(req,res){
        res.json({
            users:UserSerializer.for('getAll',Users.findAll())
        })
    },

    get(req,res){
        res.json({
                            //method for
            user:UserSerializer.for('get',Users.find(req.params.id))
        })
    },

    create(req,res){
        //don't forget content-Type appication-json when POST
                                //ดึงจาก post request เข้ามา
        // const user = Users.create({email : req.body.email}) 
        // res.json({
        //     user : UserSerializer.for('create',user)
        // })

        const {email,password} = req.body
                                    // promise ใช้ then
        Users.create(email,password).then(
            user => res.status(201).json({
                user: UserSerializer.for('create',user)
            })
        )
    }
}

export default UsersController