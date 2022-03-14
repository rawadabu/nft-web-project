import React from "react";
import home from "../assests/home.png";

export default function Home() { /*MAIN INTERANCE PAGE */
    return (
        <div className="home">
            <div className="container">
                <div className="content">

                    <p className="sub-title">LAUNCHING SOON {/* <p2>13/3/2022</p2> */}</p>
                    <h1 className="title">The future is here</h1>
                    <p className="description">
                        Our new project is going out soon, don't miss your chance to recieve our best NFT collection.
                    </p>
                    <button href="/login" type="button" >
                        <a href="/login">Sign Up</a>
                    </button>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={home} alt="home " />
                    </div>
                    <div className="ellipse-container">
                        <div className="ellipse pink"></div>
                        <div className="ellipse blue"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}