import React from "react"

import svgLogo from "./../images/LessON.svg"
import heroImg from "./../images/heroImg.jpg"

const Hero = () => {
  const hero = {
    textAlign: "center",
  }

  const heroCover = {
    height: "50vh",
    marginBottom: "1.5rem",
    width: "100%",
    objectFit: "cover",
  }

  const brandLogo = {
    height: "4vh",
  }

  const someHeroHeading = {
    textTransform: "uppercase",
    marginTop: "0.5rem",
  }

  const someHeroParagraph = {
    margin: "1rem 0",
  }

  return (
    <div style={hero} className="container">
      <img style={heroCover} src={heroImg} alt="woman sitting down" />

      <div>
        <img style={brandLogo} src={svgLogo} alt="LessON logo" />
        <h1 style={someHeroHeading}>Clothing flawlessly designed for you</h1>
        <p style={someHeroParagraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          nesciunt, voluptatum architecto tenetur similique modi eveniet culpa
          dicta, obcaecati unde ipsam fugit laboriosam nam quibusdam. Omnis
          veritatis tempore ex impedit! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Enim ipsam non quidem suscipit necessitatibus?
          Tempora amet unde omnis dicta commodi maiores necessitatibus
          reprehenderit quo facere, nemo iure. Saepe commodi vel dolorem atque
          iusto dolore enim?
        </p>
      </div>
    </div>
  )
}

export default Hero
