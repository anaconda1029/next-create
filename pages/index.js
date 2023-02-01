import Link from "next/link"
export default () =>{


    return (
    <div>
        <h2>NEXT Demo </h2>

        <Link href="/QueryTransaction">
            QueryTransaction
        </Link>
        <br/>
        <Link href="/InsertTransaction">
            InsertTransaction
        </Link>
        <br/>
        <Link href="/InsertUser">
            InsertUserInfo
        </Link>

        
    </div>
)
    }
