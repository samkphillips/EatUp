import React from 'react'
import '../styles/App.css'

export default function AboutUs() {
  return (
    <div className="about-page about-background">
      <div className="site">
        <h2 className="EatUp">What Is EatUp?</h2>
        <p>
          EatUp is an in-development app aiming to disrupt the food delivery
          space by doing the same thing as everyone else but better.
        </p>
      </div>
      <h2 className="meet">Meet The Team</h2>
      <div className="whole-team">
        <div className="team s-card">
          <h3>Sam Phillips:</h3>
          <ul className="bullet">
            <li>Git Tzar</li>
            <li>Front-end Master</li>
          </ul>
          <div className="about-links">
            <ul className="bullet links">
              <li>
                <a href="https://github.com/samkphillips" target="blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sam-k-phillips/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team m-card">
          <h3>Max Arenstein:</h3>
          <ul className="bullet">
            <li>Back-end Boss</li>
            <li>Sales Rockstar</li>
          </ul>
          <div className="about-links">
            <ul className="bullet links">
              <li>
                <a href="https://github.com/mistermindx" target="blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/max-arenstein/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/max.arenstein/"
                  target="blank"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team ms-card">
          <h3>Micah Stewart:</h3>
          <ul className="bullet">
            <li>Jack Of All Trades</li>
            <li>Master Of PERN</li>
          </ul>
          <div className="about-links">
            <ul className="bullet links">
              <li>
                <a href="https://github.com/thrillisreal" target="blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/micahdstewart/"
                  target="blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="about-foot">
        <ul>
          <li>hi</li>
        </ul>
      </footer>
    </div>
  )
}
