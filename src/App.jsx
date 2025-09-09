"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import Lenis from "lenis"

import SmoothScrollProvider from "./SmoothScrollProvider"

import Hero from "./components/hero/Hero"
import Bg from "./components/bg/bg"
import Content from "./components/second/Content"
import Services from "./components/services/Services"
import BottomService from "./components/services/BottomService"
import Image from "./components/img/Image"
import MM from "./components/com/MM"
import Horizontal from "./components/horizontal/Horizontal"
import Salut from "./components/Salut/Salut"
import Forme from "./components/forme/Forme"
import Footer from "./components/footer/Footer"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.defaults({ ease: "none", duration: 5 })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(".orange", { yPercent: 100, delay: 5 })
        .from(".purple", { xPercent: 100, ease: "power2.out" })
        .from(".green", { yPercent: 100 })
        .to(".purple", { xPercent: -100, ease: "power2.inOut" }, "<1")
        .to(".green", { yPercent: -100 })
        .from(".red", { xPercent: 100 }, ">")
        .to(".orange", { xPercent: -50 }, "<")
        .from(".yellow", { xPercent: 100 }, ">")
        .to(".red-content", { xPercent: -100 }, ">")
        .to(".yellow", { xPercent: -100 }, "<")
        .from(".gray", { yPercent: 100 }, ">")
        .from(".brown", { xPercent: 120 }, ">")
        .to({}, { duration: 1 })
        .to(".brown", { xPercent: -35 }, "<")

      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 2.5,
        pin: true,
        anticipatePin: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ✅ Smooth Scroll सिर्फ इन sections पर */}
      <SmoothScrollProvider>
        <div className="app-container">
          <div id="container" ref={containerRef} className="scroll-container">
            <Hero />
            <div className="orange">
              <Bg />
            </div>
            <div className="purple">
              <Content />
            </div>
            <div className="green">
              <Services />
            </div>
            <div className="red">
              <div className="red-content">
                <BottomService />
              </div>
            </div>
            <div className="yellow">
              <Image />
            </div>
            <div className="gray">
              <MM />
            </div>
            <div className="brown">
              <Horizontal />
            </div>
          </div>
        </div>
      </SmoothScrollProvider>

      {/* ✅ ये components normal scroll करेंगे */}
      <Salut />
      <Forme />
      <Footer />
    </>
  )
}
