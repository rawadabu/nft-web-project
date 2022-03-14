import Card from "./Card";
import super1 from "../assests/super1.png";
import super2 from "../assests/super2.png";
import super3 from "../assests/super3.png";
import super4 from "../assests/super4.png";
import super5 from "../assests/super5.png";
import super6 from "../assests/super6.png";
import super7 from "../assests/super7.png";
import super8 from "../assests/super8.png";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Grid from '@mui/material/Grid';
/* import { nftCollection } from "../firebase_stuff/firebase"; */
/* import { useState } from "react"; */

/* async function nftData() {
    const nftCard = (await nftCollection.get()).docs;
    console.log(nftCard);
    let result = [];
    for (let i = 0; i < nftCard.length; i++) {
        const data = nftCard[i].data();
        console.log(data);
        result.push(data);
    }
    return result;
}
 */

export default function Market(props) {
    /* const [cards, setCards] = useState([]); */

    const data = [
        {
            image: super1,
            series: "BORED APE",
            title: "APE",
            price: 1.99,
            tag: 1,
            time: 1,
        },
        {
            image: super2,
            series: "BORED APE",
            title: "APE",
            price: 0.99,
            tag: 2,
            time: 1,
        },
        {
            image: super3,
            series: "BORED APE",
            title: "APE",
            price: 4.99,
            tag: 3,
            time: 1,
        },
        {
            image: super4,
            series: "BORED APE",
            title: "APE",
            price: 1.99,
            tag: 4,
            time: 1,
        },


    ];
    const data1 = [
        {
            image: super5,
            series: "BORED APE",
            title: "APE",
            price: 0.99,
            tag: 5,
            time: 1,
        },
        {
            image: super6,
            series: "BORED APE",
            title: "APE",
            price: 0.49,
            tag: 6,
            time: 1,
        },
        {
            image: super7,
            series: "BORED APE",
            title: "APE",
            price: 0.69,
            tag: 7,
            time: 1,
        },
        {
            image: super8,
            series: "BORED APE",
            title: "APE",
            price: 3.00,
            tag: 8,
            time: 1,
        },
    ];

    return (
        <div className="super-rare">
            <div className="title-container">
                <h2 className="title">NFT MARKET</h2>
                <p className="description">OUR ALL-TIME RELEASED NFT'S ON OPENSEA
                </p>
            </div>
            <div className="cards">
                {data.map(({ image, series, title, price, tag, time }, index) => (
                    <Grid container spacing={2}>
                        <Card
                            image={image}
                            series={series}
                            title={title}
                            price={price}
                            tag={tag}
                            time={time}
                            key={index}
                        />
                    </Grid>
                ))}
            </div>
            {<div className="cards">
                {data1.map(({ image, series, title, price, tag, time }, index) => (
                    <Grid container spacing={2}>
                        <Card
                            image={image}
                            series={series}
                            title={title}
                            price={price}
                            tag={tag}
                            time={time}
                            key={index}
                        />
                    </Grid>
                ))}
            </div>}
        </div>
    );

}

