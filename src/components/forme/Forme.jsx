import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
import './Forme.css'
const Forme = () => {

const formeTextRef = useRef(null);
     useEffect(() => {

        let ctx = gsap.context(() => {
          const split = new SplitText(formeTextRef.current, {
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
              trigger: formeTextRef.current,
              start: "top -330%",
              end: "bottom -330%",
              scrub: true,
              toggleActions: "play none none reverse",
              // markers: true,
            }
          });
    
       
        });
    
        return () => ctx.revert();
      }, []);
    return (
        <>
            <div className="forme">
                <div className="forme-text">
                  <p ref={formeTextRef}>
                    <span>Archi-creatif</span>
                      Formé aux logiciels tels que 3ds Max, Vray et Adobe,
                    j'ai acquis une solide expérience au sein de cabinets d'architecture.
                    Mon expertise couvre la modélisation, la texturisation et
                    l’animation, me permettant de créer des images 3D qui capturent
                    chaque détail avec un réalisme saisissant.
                  </p>
                </div>
            </div>
        </>
    )
}

export default Forme