/*
    How to set secretKey - in powershell
    > $ENV.SECRET_KEY = 'abcdefg'
*/

//console.log(process.env.SECRET_KEY)
export default {
                        //ถ้าไม่มีดาร set ก็ให้เป็น port 80
    port : process.env.PORT || 80 ,
    //ย้าย key เพื่อความปลอดภัย
    secretKey : process.env.SECRET_KEY
}