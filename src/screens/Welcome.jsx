import { Link } from "react-router-dom"


export default function Welcome(){
    return (
        <>
        <h1>Welcome to Tag Along</h1>
        <Link to={'/login'}> Login </Link> <br />
        <Link to={'/signup'}> SignUp </Link>
        </>
    )
}