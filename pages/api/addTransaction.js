import {addTransaction} from "../../common/dataBaseMapper"

export default function handler(req, res) {
    console.log('addTransaction.')

    console.log("name:",req.query.name);
    console.log("quantity:",req.query.quantity)
    console.log("date:",req.query.date)
    console.log("address:",req.query.address)

    const transaction ={name:req.query.name,quantity:req.query.quantity,date:req.query.date,address:req.query.address}
    addTransaction(transaction,a=>{
       const err = (a == null)
       if (err) {
           res.status(200).json({ error: err })
       } else {
           res.status(200).json({"data":a});
       }
   })


}

