import React from "react";
import release from "../assests/release.png";


export default function Release() {
    return (
        <div className="releases">
            <div className="release orange">
                <div className="content">
                    <h2 className="title">HOT new release</h2>
                    <p className="description">
                        We have released new super rare NFTs early which can be bid on
                        via <a href="https://opensea.io">OpenSea</a>
                    </p>
                </div>
                <div className="image">
                    <img src={release} alt="release" />
                    <div className="ellipse pink"></div>
                </div>
            </div>
        </div>
    );
}