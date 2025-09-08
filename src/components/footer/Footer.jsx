import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    const footerTextRef = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {


            const split = new SplitText(footerTextRef.current, {
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
                    trigger: footerTextRef.current,
                    start: "top -350%",
                    end: "bottom -350%",
                    scrub: true,
                    toggleActions: "play none none reverse",
                    // markers: true,
                }
            });

            gsap.fromTo(
                ".footer-main .footer-3 ",
                { y: 200, },
                {
                    y: 0,
                    opacity: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".footer-main",
                        start: "top -320%",
                        end: "bottom -320%",
                        scrub: true,
                        // markers:true
                    },
                }
            );

            gsap.fromTo(
                ".footer-main .footer-1 img",
                { y: 100, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".footer-main",
                        start: "top -350%",
                        end: "bottom -350%",
                        scrub: true,
                    },
                }
            );
        });

        gsap.fromTo(
            ".footer-logo img",
            { y: 150, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                ease: "bounce.out",
                duration: 1.5,
                scrollTrigger: {
                    trigger: ".footer-logo",
                    start: "top -300%",
                    toggleActions: "play none none reverse",
                },
            }
        );


        return () => ctx.revert();
    }, []);

    return (
        <div className="footer-main">
            <div className="footer-top">
                <div className="footer-top-1">
                    <div className="footer-1">
                        <img src="/pic6.avif" alt="" />
                    </div>
                    <div className="footer-2">
                        <p ref={footerTextRef}>
                            J'ai hâte de collaborer avec vous pour donner vie à vos prochaines
                            envies et réaliser vos projets les plus audacieux.
                        </p>
                        <span>Contactez moi</span>
                    </div>
                </div>
                <div className="footer-3">
                    <div className="footer-3-para-1">
                        <h2>Archi-polyvalent</h2>
                        <p>
                            Je suis capable de donner vie à vos projets, qu’il s’agisse de rendus
                            intérieurs, extérieurs, d’axonométries ou de façades 2D. Toujours à la
                            recherche de nouvelles directions à explorer, je m’efforce de repousser
                            les limites de la créativité pour produire des rendus innovants.
                        </p>
                    </div>
                    <div className="footer-3-para-1">
                        <h2>Archi-quali</h2>
                        <p>
                            Ce qui distingue mes créations, c'est leur hyperréalisme et la
                            minutieuse attention portée aux couleurs et à la lumière. Mon objectif
                            est de concrétiser vos visions les plus ambitieuses, en reproduisant vos
                            rêves architecturaux avec une précision inégalée.
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-links">
                    <span>
                        Antoine <br />
                        Basé à Toulouse
                        <br />@2025
                    </span>
                    <span>
                        contact@archi-malinstudio.com
                        <br />
                        06 50 83 05 15
                    </span>
                    <span>
                        <ul>
                            <li>Instagram ↗</li>
                            <li>Linkedin ↗</li>
                            <li>Behance ↗</li>
                        </ul>
                    </span>
                    <span>
                        Mentions légales
                        <br />
                        DA et site web par Okey Studio
                    </span>
                </div>
                <div className="footer-logo">
                    <img src="/logo.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
