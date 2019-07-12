import React from "react";

import { Loader } from "semantic-ui-react";


const Hero = (props) => {
  console.log("hero props", props)
  if (!props.data) {
    return (
      <div className="ui active inverted dimmer">
        <Loader className="ui large text loader">
          Fetching Your Photo
        </Loader>
      </div>
    )
  } else { 
    return (
      <div>
        <img 
          className="ui huge rounded image centered" 
          src={props.data.hdurl}
          alt={props.data.title}
        />
        <div 
          className="ui raised very padded text container segment"
          style={ {textAlign: "justify" } }>
          <h2 
            className="ui header"
            style={ {paddingBottom: "20px"} }
          >
              Information
          </h2>
          {props.data.explanation}
        </div>
      </div>
    )
  }
}

export default Hero