/**
 * File Name: Login.js
 * Date: 26/11/21
 * Description: Login page and landing page of the website
 */

import React from 'react'
import ReactDOM from 'react-dom'

import { Container } from "react-bootstrap"
import SubmitButton from "./Components/SubmitButton";
import Col from "react-bootstrap/Col";
import SoundWave from "./Components/SoundWave.js";
import Fade from "react-reveal/Fade";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=debf6540ddc74edfabe88fa07b71ed37&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=code"

/*export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  )
}*/
/*<SubmitButton
              isLoggedIn={props.isLoggedIn}
              handleLogin={() => props.handleLogin()}
            />*/
function Login(props) {
  if (props.isLoggedIn) {
    return null;
  }
  return (
    <Container>
      <Col className="d-flex align-items-center flex-column login justify-content-center login">
        <Fade duration={2000}>
          <h1> Musify </h1>
          <SoundWave />
          <Fade delay={1000}>
          <a class="fancyButton" href={AUTH_URL}>
                    <button class="next" id="enter"><span>Login With Spotify</span></button>

      </a>
            
          </Fade>

          <h4 className="mt-5">Get insights into your vibe.</h4>
          <h6 className="mt-5">
            {" "}
            Created by{" "}
            <a
              href="https://github.com/ramanmand"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Raman Mand{" "}
            </a>{" "}
            & {" "}
            <a
              href="https://github.com/madeleine68"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Madeleine Moghadasi{" "}
            </a>{" "}
          </h6>
          <Fade delay={2000}>
            <h6>
              Your information is never stored. Powered by{" "}
              <a
                href="https://developer.spotify.com/documentation/web-api/"
                target="_blank "
                rel="noopener noreferrer"
              >
                {" "}
                Spotify's API.{" "}
              </a>{" "}
            </h6>

            <h6>
              Give this project a{" "}
              <span role="img" aria-label="star emoji">
                🌟
              </span>{" "}
              on
              <a
                href="hhttps://github.com/ramanmand"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Github.
              </a>
          
            </h6>
          </Fade>
        </Fade>
      </Col>
    </Container>
  );
}

export default Login;
