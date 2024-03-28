import './styles/NavigationBar.css'

export default function NavigationBar(){
    return(
        <nav className="navigation-container">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/usage">Usage</a></li>
                <li><a href="/devteam">DevTeam</a></li>
            </ul>
        </nav>
    )
}