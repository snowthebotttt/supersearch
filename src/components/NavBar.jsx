import React from 'react' 

export default function NavBar() { 
    return(
        <header>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </nav>
        </header> 
    )
}