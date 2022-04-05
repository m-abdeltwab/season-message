import "./ErrorMsg.css";
import React from "react";

const ErrorMsg = (props) => {
  return (
    <div className="Error-Msg">
      <div className=" ui negative message massive">
        <div className="header">
          <i className="exclamation triangle icon"></i>
          {props.msg}
        </div>
      </div>
    </div>
  );
};

export default ErrorMsg;
