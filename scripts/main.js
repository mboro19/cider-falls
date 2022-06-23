import { guestFunc } from "./guests.js";
import { locationsFunc } from "./locations.js";
import { servicesFunc } from "./services.js";



const mainContainer = document.querySelector("#container")

const applicationHTML = `

<article class="details">
    
        <h2>Locations</h2>
        <h4>${locationsFunc()}</h4>
    
    
        <h2>Guests</h2>
        <h4>${guestFunc()}</h4>
    
        
        <p>
        <p>
        <p>
        <p>

        <h4>Here is a list of our park services: ${servicesFunc()}
        
</article>
`

mainContainer.innerHTML = applicationHTML