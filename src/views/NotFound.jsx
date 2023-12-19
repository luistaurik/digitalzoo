import React from "react";
import errorImage from "../assets/img/404.png"

const NotFound = () => {
    return (
      <>
        <div className="errorContainer animate__animated animate__fadeIn">
          <img src={errorImage} className="notfound" alt="error 404 page not found" />
        </div>
      </>
    );
  };
  export default NotFound;
  