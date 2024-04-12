import './styles/NavigationBar.css'

export default function NavigationBar(){
    const smoothScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      };
    return(
        
        <nav className="navigation-container">
            <ul>
                <li><a href="#home" onClick={(e) => smoothScroll(e,'home')}>Home</a></li>
                <li><a href="#usage" onClick={(e) => smoothScroll(e,'usage')}>Usage</a></li>
                <li><a href="#devteam" onClick={(e) => smoothScroll(e,'devteam')}>DevTeam</a></li>
            </ul>
        </nav>
    )
}