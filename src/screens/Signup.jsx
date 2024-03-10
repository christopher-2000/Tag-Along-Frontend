import { Link } from "react-router-dom"

export default function SignUp(){
    return (
        <>
        <h1>SignUp to Tag Along</h1>
        <Link to={'/dashboard'}> SignUp </Link>
        </>
    )
}