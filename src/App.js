import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Hero from "./components/hero"
import Header from "./components/header"


import "semantic-ui-css/semantic.min.css";

function App() {
  const [data, setData] = useState("");
  // const [picture, setPicture] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=SUaA2YSmY4sWC1uuOLSJ4gIOY2hkbkEcEgHTeIGh&date=2012-03-04")
      .then(result => setData(result.data))
        //where do I console.log() to see the data??
      .catch(err => setError("THERES AN ERROR!"));
  }, [] );

  if (error) {
    return (
      <h2
        className="ui red block header centered"
      >
        {error}
      </h2>
    )
  } else {
    return (
      <div className="App">
        <Header 
          data={data}
        />
        <Hero 
          data={data} 
        />
      </div>
    );
  }
}

export default App;
