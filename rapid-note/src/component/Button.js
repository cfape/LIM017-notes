import React from "react";

function Button(props) {

  return (
    <button
      id="btnHome"
      className={props.btnOnClick}
      onClick={props.listenClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
