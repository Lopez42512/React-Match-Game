import React from "react";


function Header(props){
    return(
        <header>
            <h3>Clicky Game</h3>
            <h4>Click an image to begin!</h4>
            <h4>Score: {props.Score} | Top Score: {props.topScore}</h4>
        </header>
    )
}

export default Header