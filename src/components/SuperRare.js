import React from "react";
import Card from "./Card";
import super1 from "../assests/super1.png";
import super2 from "../assests/super2.png";
import super3 from "../assests/super3.png";
import super4 from "../assests/super4.png";

export default function SuperRare() {
    const data = [
        {
            image: super1,
            series: "BORED APE",
            title: "APE",
            price: 2.99,
            tag: 1,
            time: 1,
        },
        {
            image: super2,
            series: "BORED APE",
            title: "APE",
            price: 2.99,
            tag: 4,
            time: 1,
        },
        {
            image: super3,
            series: "BORED APE",
            title: "APE",
            price: 2.99,
            tag: 5,
            time: 1,
        },
        {
            image: super4,
            series: "BORED APE",
            title: "APE",
            price: 2.99,
            tag: 9,
            time: 1,
        },
    ];
    return (

        <div className="super-rare">
            <br />
            <div className="title-container">
                <h2 className="title">APE Super Rare Auction</h2>
                <p className="description">
                    Our super rare cards which can be
                    bid on via <a href="https://opensea.io">OpenSea</a>.
                </p>
            </div>
            <div className="cards">
                {data.map(({ image, series, title, price, tag, time }, index) => (
                    <Card
                        image={image}
                        series={series}
                        title={title}
                        price={price}
                        tag={tag}
                        time={time}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}