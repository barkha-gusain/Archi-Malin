import './Salut.css'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Salut = () => {
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Split the paragraph into lines
      const split = new SplitText(textRef.current, {
        type: "lines",
        linesClass: "line",
        mask: "lines"
      });

      gsap.from(split.lines, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top -350%",
          end: "bottom -380%",
          scrub: false,
          toggleActions: "play none none reverse",
          // markers: true,
        }
      });

      gsap.from(".salut-center img", {
        x: 200,
        // duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".salut-center",
          start: "top -300%",
          end: "bottom -300%",
          scrub: true,
          // markers:true
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="salut">
      <div className="salut-top">
        <p ref={textRef}>
          <span>A propos</span>Salut, c’est Antoine ! C'est moi qui me cache derrière Archi-malin Studio.
          Je suis un graphiste passionné par l’image de synthèse 3D réaliste,
          spécialisé dans l’architecture et basé à Toulouse. Fasciné par l’image,
          les couleurs et la composition, j’ai consacré ma carrière à transformer
          des concepts architecturaux en représentations visuelles époustouflantes.
        </p>
      </div>

      <div className="salut-center">
        <img src="/pic6.avif" alt="pic6" />
        <img src="/pic7.avif" alt="pic7" />
      </div>

      <div className="salut-bottom">
        <h2>Des idées en 3D,<br /> des projets en grand</h2>
      </div>
    </div>
  );
};

export default Salut;
