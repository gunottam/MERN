import { useState } from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="nav-login">Login</button>
        </nav>
    );
};

export default Navigation;