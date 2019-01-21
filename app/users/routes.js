// route to resource


export function setup(router){
    router.get('/',(req,res)=>{
        res.send('Hello Yo');
    })
}