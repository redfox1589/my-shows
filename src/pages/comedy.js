import React from "react";
import YoutubeEmbed from "../components/YoutubeVideo";
 
const Comedy = () => {
    return (
        <div>
            <YoutubeEmbed embedId="HlBYdiXdUa8" />
            <p className="HomeText">
                Rewatching right now:<br />
                BROOKLIN 9-9
            </p>
        </div>
    );
};
 
export default Comedy;