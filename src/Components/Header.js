import React from 'react'
import logo from "./assets/images/todo.png"

const Header = () => {
    return (
        <header className="header ">
            <nav>
                <div className="logo">
                    <img src={logo} alt="todoist" />
                </div>
            </nav>
        </header>
    )
}

export default Header;