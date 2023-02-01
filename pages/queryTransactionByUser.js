export default () =>{


    return (
    <div>
        <h2>query User Demo </h2>
        <form  name="myform" id="myform" method="get" action="/api/queryUserByConditon">
        userName:<input type="text" name="name" id="name" />
        <br/>
        email:<input type="text" name="email" id="email" />
        <br/>
        <input type="submit" value="Query User" />
        </form>
    </div>
)
    }
// import React from 'react';
// import ReactDOM from 'react-dom';

// class EssayForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Please enter the name,email search condition to get UserInfomation.'
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('UserInfo was submitted: ' + this.state.value);
//       fetch('api/queryUserByConditon.js', {
//         method: 'POST',
//         body: JSON.stringify(responseBody),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       })
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//             Email:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

//   export default function QueryUserPage() {
//     return (
//       <>
       
//       </>
//     );
//   }