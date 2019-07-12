import React from "react"

import logo from "./nasa-logo-web-rgb.png" 

const Header = (props) => {
  return (
    <header 
      className="ui block header"
      style={ {
          display: "flex"
      } }
    >
      <img 
        className="ui small image"
        style={ {
          width: "150px",
          height: "auto"
        } }
        src={logo} 
        alt="NASA logo"/>
      <div
        style={ {
          display: "flex",
          flexDirection: "column",
          marginLeft: "30px"
        } }
      >
        <h1 
          className="ui left aligned header"
          style={ {
            marginBottom: "0px",
          }}
        >
          NASA Astronomy Picture of the Day
        </h1>
        <h2
          className="ui left aligned header"
        >
          {props.data.title}
        </h2>
      </div>
    </header>

    // <h1>
    //   Nasa is a big deal!
    // </h1>
  )
}

export default Header;