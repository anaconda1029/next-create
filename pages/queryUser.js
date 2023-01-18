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