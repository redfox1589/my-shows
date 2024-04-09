import React from "react";
import YoutubeEmbed from "../components/YoutubeVideo";
 
const Home = () => {
    return (
        <div>
            <YoutubeEmbed embedId="HQ8H5gqGA34" />
            <p className="HomeText">
                Waiting for the HOUSE OF DRAGON Season 2.<br />
                Release date: 16 June 2024
            </p>
        </div>
    );
};

export default Home;
