import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./bg.css";

gsap.registerPlugin(ScrollTrigger);

const Bg = () => {
  const imgRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const nav = navRef.current;

    if (!img || !nav) return;

    gsap.fromTo(
      img,
      {
        width: "500px",
        height: "500px",
        transformOrigin: "bottom bottom",
      },
      {
        height: "100%",
        width: "100%",
        // scale: 1,
        scrollTrigger: {
          start: "top -80%",
          end: "top -100%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      nav.querySelectorAll("h1 span"),
      { y: 50, opacity: 1 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".bg-content",
          start: "top -10%",
          toggleActions: "play none none reverse",
        },
      }
    );


  }, []);

  return (
    <>


      <div className="bg-content">
        <img ref={imgRef} src="/archi.png" alt="Orange" />
      </div>

      {/* Navbar */}
      <div className="nav" ref={navRef} >
        {/* <img src="/logo.svg" alt="" /> */}
        <div className="logo">
          <h1>
            <span className="archi">archi</span>
            <span className="malin">malin</span>
          </h1>
        </div>
        {/* <h2 className="nav-link">Contact</h2> */}
      </div>
    </>

  );
};

export default Bg;
