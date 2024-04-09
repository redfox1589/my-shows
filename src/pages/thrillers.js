import React from "react";
import YoutubeEmbed from "../components/YoutubeVideo";
 
const Thrillers = () => {
    return (
        <div>
            <YoutubeEmbed embedId="jcfWWcQO6OY" />
            <p className="HomeText">
                All-time favourite:<br />
                HANNIBAL
            </p>
        </div>
    );
};
 
export default Thrillers;