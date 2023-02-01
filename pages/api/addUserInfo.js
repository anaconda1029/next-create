import {addUserInfo} from "../../common/dataBaseMapper"

export default function handler(req, res) {
    console.log('addUserInfo.')

    console.log("name:",req.query.name);
    console.log("email:",req.query.email)
    console.log("birthday:",req.query.birthday)

    const userInfo ={name:req.query.name,email:req.query.email,birthday:req.query.birthday}
    addUserInfo(userInfo,a=>{
       const err = (a == null)
       if (err) {
           res.status(200).json({ error: err })
       } else {
           res.status(200).json({"data":a});
       }
   })


}

