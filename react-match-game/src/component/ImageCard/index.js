import React from "react";
// import Wrapper from "../Wrapper";

function ImageCard(props) {
    
  return (
    // <Wrapper>
      <div className="image">
        <button >
          <img  alt={props.name} src={props.url} onChange={props.picked}/>
        </button>
      </div>
    // </Wrapper>
  );
}

export default ImageCard;
