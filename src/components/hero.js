import React from "react";

const Hero = (props) => {
  console.log("hero props", props)
  return (
    <div>
      <img src={props.data.hdurl} alt="POD"/>
      <p>
        {props.data.explanation}
      </p>
    </div>
  )
}

export default Hero