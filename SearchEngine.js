import React, { useState } from "react";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function Searching(event) {
    event.preventDefault();
    if (city !== "") {
      setMessage(`It is 19ºC in ${city}`);
    } else {
      setMessage(` `);
    }
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <form onSubmit={Searching}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
      <h2>{message}</h2>
    </form>
  );
}
