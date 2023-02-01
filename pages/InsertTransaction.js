export default () =>{


    return (
    <div>
        <h2>insert Transaction Demo </h2>
        <form  name="myform" id="myform" method="post" action="/api/addTransaction">

        userName:<input type="text" name="name" id="name" />
        <br/>
        quantity:<input type="text" name="quantity" id="quantity" />
        <br/>
        date:<input type="date" name="date" id="date" />
        <br/>
        address:<input type="text" name="address" id="address" />
        <br/>
        <input type="submit" value="Add Transaction" />

        </form>
    </div>
)
    }