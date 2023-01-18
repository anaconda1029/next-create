import React,{Component} from "react";
import axios from 'axios';
// import EventsSearch from '../components/events-search';

// function querySpecified(year, month) {
//     const fullPath = `/events/${year}/${month}`;

//     router.push(fullPath);
// }

export default class test extends Component{
    static async getInitialProps(){
        const res = await axios.get('http://localhost:3000/api/queryUser');
        console.log("data structure：",res.data)
        return {users:res.data.data}
       
    }

    render(){
        return (
            <table>
                <tbody>
                <form  name="myform" id="myform" method="get" action="/api/queryUserByConditon">
                    userName:<input type="text" name="name" id="name" />
                    <br/>
                    age:<input type="text" name="email" id="email" />
                    <br/>
                </form>
                {
                    this.props.users.map(item =>{
                        return <tr key={item._id}>{item.name}
                        <tr>{item.email}</tr>
                        <tr>{item.walletAddress}</tr>
                        <tr>{item.phone}</tr>
                        <tr>{item.name}</tr>
                        <tr>{item.source}</tr>
                        <tr>{item.token}</tr>
                        </tr>
                    })
                }

                </tbody>

            </table>

        )
    }
}
