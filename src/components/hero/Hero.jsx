import "./Hero.css"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const middleRef = useRef(null)

  useEffect(() => {
    const el = middleRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 30%",
        end: "+=680",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(el, { y: -150, duration: 2 });
    tl.to(el, { y: -150, duration: 1 });
    tl.to(el, { y: -800, duration: 1 });

    gsap.to(".overlay , .social-links", {
      y: -500,
      ease: "none",
      scrollTrigger: {
        trigger: ".overlay",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });


  }, []);


  return (
    <div className="hero">
      <img src="/background.png" alt="Architectural background" />
      <div className="overlay">

      </div>
      <div className="hero-content">
        <div className="contact" >
          <h2>Contact</h2>
          <div className="social-links" >
            <a href="https://instagram.com">Instagram ↗</a>
            <a href="https://linkedin.com">LinkedIn ↗</a>
            <a href="https://behance.net">Behance ↗</a>
          </div>
        </div>

        <div className="middle" ref={middleRef}>
          <div className="heading">
            <img src="/logo.svg" alt="" fill="white" />
          </div>

          <div className="para">
            <p className="subtitle">Des idées en 3D, des projets en grand</p>
            <p className="antoine">Antoine</p>

            <p>Graphiste Concepteur 3D Freelance</p>
            <p>Basé à Toulouse, France</p>

          </div>
        </div>
      </div>
    </div>
  )
}
