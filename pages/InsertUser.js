export default () =>{


    return (
    <div>
        <h2>insert User Demo </h2>
        <form  name="myform" id="myform" method="post" action="/api/addUserInfo">

        userName:<input type="text" name="name" id="name" />
        <br/>
        email:<input type="text" name="email" id="email" />
        <br/>
        birthday:<input type="text" name="birthday" id="birthday" />
        <br/>
        <input type="submit" value="Save User" />

        </form>
    </div>
)
    }
// import { useState } from "react"

// export const Form = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [age, setAge] = useState("")

//     interface FormDataType {firstName:string, lastName: string, age: string}
//     const responseBody: FormDataType = {firstName: "", lastName: "", age: "0"}

//     const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         responseBody.firstName = firstName
//         responseBody.lastName = lastName
//         responseBody.age = age
//         console.log(JSON.stringify(responseBody))
//         fetch('/api/addUserInfo/', {
//             method: 'POST',
//             body: JSON.stringify(responseBody),
//             headers: {
//               'Content-Type': 'application/json'
//             },
//         })
// 	//Form submission happens here
//     }
//     const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
//         setFunction(event.target.value)
//     }
  
//     return(
//         <form onSubmit={onSubmitHandler}>
//             <div><label htmlFor="first_name">First Name</label></div>
//             <div><input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/></div>
//             <div><label htmlFor="last_name">Last Name</label></div>
//             <div><input id="last_name" onChange={(e)=>inputChangeHandler(setLastName, e)} type="text"/></div>
//             <div><label htmlFor="age">Age</label></div>
//             <div><input id="age" onChange={(e)=>inputChangeHandler(setAge, e)} type="number"/></div>
//             <input type="submit"/>
//         </form>
//     )
// }