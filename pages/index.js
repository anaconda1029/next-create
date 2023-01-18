import Link from "next/link"
export default () =>{


    return (
    <div>
        <Link href="/UserInfo">
            UserInfo
        </Link>
        <br/>
        <Link href="/queryUser">
            QueryUserInfo
        </Link>

        <h2>Index Demo </h2>
    </div>
)
    }