// App.js
import React from "react";
import "./App.css";
import Card from "./components/Card";
import Imgcard from "./components/Imgcard";

function App() {
  return (
    <div>
      <header id="header" className="section-header scroll">
        <a href="./">
          <img
            className="icon"
            src="https://learntocodetogether.nl/assets/icon.svg"
          />
        </a>
        <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
          <img
            className="meetup-icon"
            src="https://learntocodetogether.nl/assets/meetup-icon.svg"
          />
        </a>
        <nav>
          <a href="/courses.html">Our Courses</a>
        </nav>
      </header>

      <div className="section-header-spacer"></div>

      <div className="content">
        <div className="section section-what-usp">
          <Card
            badge="Do you want to"
            header="Learn how to code"
            description="Awesome!Awesome! Let’s do this together. We are here to support you in
your coding journey."
          />

          <div className="component-usp-row">
            <Imgcard
              image="https://learntocodetogether.nl/assets/team.svg"
              title="Get help from experienced developers"
            />
            <Imgcard
              image="https://learntocodetogether.nl/assets/community.svg"
              title="Learn &amp; share with our community"
            />
            <Imgcard
              image="https://learntocodetogether.nl/assets/personal-speed.svg"
              title="Personal &amp; at your own speed"
            />
          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section section-courses-usp">
          <Card
            badge="Courses"
            header="Our Courses"
            description=" We have created courses to help you learn, with easy to follow
            steps and some sparks of fun!"
          />

          <div className="component-usp-row">
            <Imgcard
              image="https://learntocodetogether.nl/assets/expand-horizon.svg"
              title="Learn new skills and expand your horizon"
            />
            <Imgcard
              image="https://learntocodetogether.nl/assets/developers.svg"
              title="Follow courses created by experienced developers"
            />
            <Imgcard
              image="https://learntocodetogether.nl/assets/step-by-step.svg"
              title="Fun, hands on and easy to follow"
            />
          </div>
        </div>

        <div className="section-line">
          <div className="line "></div>
        </div>

        <div className="section section-why-usp">
          <Card
            badge="Why?"
            header="Why do we do this"
            description="It’s really simple actually. We just love to combine our passion
            for code with our love for teaching. Coding is so much fun when
            doing it together."
          />
          {/* / Note: this last section is not refactored into components */}
          <div className="component-usp-row">
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/technology.svg"
              />
              <div className="component-title title">Technology</div>
              <div className="description">
                We love to experiment and create awesome stuff from the comfort
                of our couch.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/community.svg"
              />
              <div className="component-title title">People</div>
              <div className="description">
                It’s always fun to do things together, the excitement and the
                collaborations.
              </div>
            </div>
            <div className="item team">
              <img
                className="image"
                src="https://learntocodetogether.nl/assets/personal-speed.svg"
              />
              <div className="component-title title">Teaching</div>
              <div className="description">
                We like to learn and to teach others the stuff we know.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-line">
        <div className="line "></div>
      </div>

      <div className="section-footer">
        <img
          className="logo"
          src="https://learntocodetogether.nl/assets/logo.svg"
        />
        <div className="title">Created by</div>
        <div className="subtitle">
          Rein Op &#x27;t land &amp; Danny van der Jagt
        </div>
        <div className="team-container">
          <img
            className="team"
            src="https://learntocodetogether.nl/assets/danny&rein.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
