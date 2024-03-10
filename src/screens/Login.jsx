import { Link } from "react-router-dom"

export default function Login(){
    return (
        <>
        <h1>Login to Tag Along</h1>
        <Link to={'/dashboard'}> Login </Link>
        </>
    )
}