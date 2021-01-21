import React, { Component } from "react";
import "../styles/About.css";

export default class extends Component {
  render() {
    return (
      <div>
        <div id="about-body">
          <div className="about-img">
            <img
              className="children-duo"
              src="https://www.pinclipart.com/picdir/big/527-5274829_crown-afro-baby-clipart-clip-black-and-white.png"
              alt=""
            />
          </div>
          <div className="text-about">
            <h1>About Swahili World</h1>
            <div className="paragraphe-about">
              Watch the Best and Most Popular Stories in Swahili. <br></br>
              Are you familiar with some Swahili words or phrases like Jambo and
              Hakuna Matata? Now, learn how East-African ACTUALLY speak! I'd
              like to show you how to learn Swahili.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
