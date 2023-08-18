import "./intro.scss"

import { useEffect } from "react"
import { useRef } from "react"
import Typed from 'typed.js';

function Intro() {
  //ityped
  const textRef=useRef(null);
  useEffect(()=>{
    if (textRef.current) {
      // Initialize Typed.js
      new Typed(textRef.current, {
        strings: ["Web Developer"],
        typeSpeed: 50, // Speed of typing
        startDelay: 0, // Delay before typing starts
        showCursor: false, // Hide the cursor
        loop: false, // Don't loop the animation
      });
    }
  }, []); 

 
  return (
    <div className="intro" id="intro">
    <div className="left">
      <div className="imageContainer">
        <img src="assets/women.jpg" alt="" />
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>
          Hi there,I'm
        </h2>
        <h1>Nagaveni Gowda</h1>
        <h3>Frontend  <span ref={textRef}>Web Developer</span></h3>

      </div>
      <a href="#portfolio"> <img src="assets/down.png" alt="" /></a>
     

    </div>
    </div>
  )
}

export default Intro
