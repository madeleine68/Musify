import React from "react";
import Fade from "react-reveal/Fade";
//import Footer from "./src/index.css";

export default function Loading() {
  return (
    <footer className="mt-2 mb-4" textAlign="center">
      <Fade>
        <h7>Like what you see? Give this project </h7>
        <h7>
           a{" "} 
          <span role="img" aria-label="star emoji">
            🌟
          </span>{" "}
          on 
          <a
            href="https://github.com/ramanmand/final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          Github 
          </a>
         -- and share.
        </h7>
       
      </Fade>
    </footer>
  );
}
