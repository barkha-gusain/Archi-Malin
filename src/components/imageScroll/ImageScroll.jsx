import gsap from 'gsap/all'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import './ImageScroll.css'
gsap.registerPlugin(ScrollTrigger)
const ImageScroll = () => {

  useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.set(".photo:not(:first-child)", {
      opacity: 0, 
      scale: 0.5
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gallery",
        start: "top 10%",
        end: "bottom 10%",
        scrub: true,
        pin: ".right",
        markers: true,
      }
    })

    tl.to(".photo:not(:first-child)", {
      opacity: 1, 
      scale: 1, 
      duration: 1, 
      stagger: 1
    })
  })
  return () => ctx.revert()
}, [])
  return (
    <>
      <div className="gallery">
        <div className="left">
          <div className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae labore alias excepturi commodi quo doloremque, asperiores soluta? Facilis inventore id fugiat eligendi ipsum voluptatibus ea expedita rerum? Dicta, repudiandae. Laboriosam.</div>
          <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur earum alias commodi aliquid fugiat perspiciatis mollitia eaque temporibus nostrum veniam ad quod, voluptates eum debitis ratione cum molestias! Sint!</div>
          <div className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga rerum eveniet! Ex facilis accusamus impedit repellendus autem, sunt similique porro ipsum pariatur reprehenderit eum tenetur officia esse perferendis magnam.</div>
        </div>
        <div className="right">
          <div className='photos'>
            <div className="photo">
              <img src="/public/hero.jpg" alt="" />
            </div>
            <div className="photo">
              <img src="/public/pic5.webp" alt="" />
            </div>
            <div className="photo">
              <img src="/public/forest.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageScroll