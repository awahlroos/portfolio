import React from 'react'
import landing_image from "../images/landing_image.png";

export default function Landing() {
  return (
    <div>
      <div id='landing_text'>
        <p>Hej, mitt namn är</p>
        <h1>ALEX WAHLROOS</h1>
        <p>och jag är civilingenjörsstudent inom <b>interaktion och design</b>. 
          Det här är en hemsida för att presentera min portfolio och ett urval av arbeten jag gjort under min studietid.
          Hoppas du hittar något du gillar! </p>
      </div>
      <div>
        <img src={landing_image} alt="Alex Wahlroos" />
      </div>
      <div>
        <button>Läs mer</button>
      </div>
    </div>
  )
}
