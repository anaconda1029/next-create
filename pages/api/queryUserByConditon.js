import {queryUserByConditon} from "../../common/dataBaseMapper"

export default function handler(req, res) {
    console.log('addUserInfo.')

    console.log("name:",req.body.name);
    console.log("email:",req.body.email)

    // const userInfo ={name:req.body.name,email:req.body.email}
    // queryUserByConditon(userInfo,a=>{
    queryUserByConditon(req.body.name,req.body.email,a=>{
       const err = (a == null)
       if (err) {
           res.status(200).json({ error: err })
       } else {
           res.status(200).json({"data":a});
       }
   })


}