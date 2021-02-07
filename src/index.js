//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const gMorning = "Good morning";
const gAfternoon = "Good afternoon";
const gEvening = "Good evening";
const colorRed = {
  color: "red"
};
const colorBlue = {
  color: "blue"
};
const colorGreen = {
  color: "green"
};

const today = new Date();
const currentTime = today.getHours();

if (0 < currentTime < 12) {
  ReactDOM.render(
    <h1 style={colorRed}>{gMorning}</h1>,
    document.getElementById("root")
  );
}
if (12 < currentTime < 18) {
  ReactDOM.render(
    <h1 style={colorGreen}>{gAfternoon}</h1>,
    document.getElementById("root")
  );
}
if (18 < currentTime < 24) {
  ReactDOM.render(
    <h1 style={colorBlue}>{gEvening}</h1>,
    document.getElementById("root")
  );
}
