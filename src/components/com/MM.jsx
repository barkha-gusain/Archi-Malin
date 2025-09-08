import React from 'react'
import "./MM.css"




const MM = () => {

  // useEffect(() => {
  //   const contents = gsap.utils.toArray(".horizontal .content")
  //   gsap.to(contents, {
  //   xPercent : -100 * (contents.length-1),
  //    scrollTrigger: {
  //       trigger: ".horizontal",
  //       pin: true, 
  //       scrub: 1, 
  //       start:"top 40%",
  //       end:"bottom -100%",
  //       markers:true,
       
  //     },
  //   })

  // }, []);


  return (
    <>
      <div className="mm-main">
        <div className="mm-top">
          <h2>Projets sur mesure</h2>
          <p>
            Chaque projet est unique et réalisé sur mesure en fonction de vos besoins spécifiques. Nous travaillons en étroite collaboration avec vous pour traduire votre vision en images 3D réalistes et précises.</p>
        </div>
        <div className="mm-bottom">
          <h2>Sélection de projets</h2>
        </div>
      </div>
      
    </>
  )
}

export default MM