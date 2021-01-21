import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="header">
          <h1 className="header__title">Swahili World</h1>
        </div>
        <section className="belly">
          <div className="belly__item">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/31/19/56/antenna-1295400_1280.png"
              alt=""
              className="belly__item__img"
            />
            <div className="belly__item__text">
              <Link to={`/videos`}>
                <h2 className="belly__item__tile">Click here</h2>
              </Link>
              <h3 className="belly__item__subtitle">To Discover</h3>
              <p className="belly__item__subtitle">Our Content</p>
            </div>
          </div>

          <div className="belly__item">
            <img
              src="https://cdn.pixabay.com/photo/2020/10/11/22/47/kids-5647233_1280.png"
              alt=""
              className="belly__item__img"
            />
            <div className="belly__item__text">
              <Link to={`/about`}>
                <h2 className="belly__item__tile">Learn</h2>
              </Link>
              <h3 className="belly__item__subtitle">More About Us</h3>
              <p className="belly__item__subtitle">And Kiswahili </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
