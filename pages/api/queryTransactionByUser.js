import {queryTransactionByUser} from "../../common/dataBaseMapper"

export default function handler(req, res) {
    console.log('queryTransactionByUser.')

    console.log("name:",req.body.name);
    

    // const userInfo ={name:req.body.name,email:req.body.email}
    // queryUserByConditon(userInfo,a=>{
    queryTransactionByUser(req.body.name,a=>{
       const err = (a == null)
       if (err) {
           res.status(200).json({ error: err })
       } else {
           res.status(200).json({"data":a});
       }
   })


}