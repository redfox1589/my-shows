import React from "react";
import YoutubeEmbed from "../components/YoutubeVideo";
 
const Fantasy = () => {
    return (
        <div>
            <YoutubeEmbed embedId="KPLWWIOCOOQ" />
            <p className="HomeText">
                Classic and legendary:<br />
                GAME OF THRONES
            </p>
        </div>
    );
};
 
export default Fantasy;