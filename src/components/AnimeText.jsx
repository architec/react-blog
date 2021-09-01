import React from "react";
import Anime, { anime } from 'react-anime';
// https://tobiasahlin.com/moving-letters/#2
const AnimeText = props => {
    const split = props.text.split('')
    return (
        <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
            <Anime
                duration={950}
                loop={false}
                delay={(el, i) => 70 * i}
                scale={[4, 1]}
                opacity={[0, 1]}
            >
                {
                    
                    split.map((obj, i) => {
                        if(obj==' ') {return <p style={{opacity: 0, fontSize: 24}}>_</p>}
                        return <span style={{ fontSize: 24,fontFamily: "serif", fontStyle: "italic",fontWeight: 400, textAlign:"center" }}>{obj}</span>})
                }
            </Anime>
        </div>
    )
}

export default AnimeText;