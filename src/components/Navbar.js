import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../assests/nftlogo.png";
export default function Navbar() {
    const [navState, setNavState] = useState(false);
    return (
        <nav>
            <div className="brand-container">
                <div className="brand">
                    <img src={logo} alt="logo" />
                </div>
                <div className="toggle-container"> {/* For phone minimizing */}
                    <div className="toggle">
                        {navState ? (
                            <MdClose onClick={() => setNavState(false)} />
                        ) : (
                            <GiHamburgerMenu onClick={() => setNavState(true)} />
                        )}
                    </div>
                </div>
            </div>
            <div className={`links-container ${navState ? "nav-visible" : ""}`}>
                <ul className="links">
                    <li>
                        <a href="home">Home</a>
                    </li>
                    {/*                     <li>
                        <a href="market">Market</a>
                    </li> */}
                    <li>
                        <a href="login">Login</a>

                    </li>

                </ul>
            </div>
        </nav>
    );
}