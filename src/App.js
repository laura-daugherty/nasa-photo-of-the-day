import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Hero from "./components/hero"
import Header from "./components/header"

import { setUseProxies } from "immer";

function App() {
  const [data, setData] = useState("");
  const [picture, setPicture] = useState("");
  // const [loading, setLoading] = useState();
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   fetchData()
  //     .then(result => setData(result.data))
  //     .catch(error => setError("It's an Error"))

  // }, []);

  useEffect(() => {
    console.log("useEffect fetching Data")
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-04")
      .then(result => setData(result.data))
        //where do I console.log() to see the data??
      .catch(err => console.log(err));
  }, [] );

  return (
    <div className="App">
      <Header />
      <Hero 
        data={data} 
      />
    </div>
  );
}

export default App;
