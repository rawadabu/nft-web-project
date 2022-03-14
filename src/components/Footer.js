import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";
export default function Footer() {
    const links = [
        {
            title: "About",
            data: [<a href="https://opensea.io">Terms</a>, <a href="https://opensea.io">Legal</a>],
        },
        {
            title: "Wallet",
            data: [<a href="https://opensea.io">OpenSea</a>, <a href="https://opensea.io">Maker</a>, <a href="https://opensea.io">Learn</a>],
        },

    ];
    const socialLink = [
        <BsFacebook />,
        <BsTwitter />,
        <BsInstagram />,
        <BsDiscord />,
    ];
    return (
        <footer>
            <div className="upper">
                <div className="brand-container">
                    <div className="brand">
                    </div>
                    <p>NFT Collection</p>
                    <ul>
                        {socialLink.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}

                    </ul>
                </div>
                <div className="links">
                    {links.map(({ title, data }, index) => {
                        return (
                            <div className="link" key={index}>
                                <h4>{title}</h4>
                                <ul>
                                    {data.map((link, index2) => (
                                        <li key={index2}>{link}</li>
                                    ))}

                                </ul>

                            </div>

                        );
                    })}
                </div>
            </div>

            <span>&copy; Copyright 2022 NFT</span>

        </footer>
    );
}