import { dataLocations, dataServices } from "./database.js"

let services = dataServices()
let locations = dataLocations()

// split ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.addEventListener(
    `click`,
    (clickEvent) => {

        const itemClicked = clickEvent.target;

        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")
                
                for(const service of services){
                    for(const location of locations){
                        for(const serviceLoc of location.servicesId){

                            if(serviceLoc === parseInt(serviceId)){
        
                    
                            window.alert(`"This service is available in ${location.name}."`)

                        }
                    }

                }}}
            }
);

// split ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const servicesFunc = () => {

    let html = "<ul>"

        for (let service of services){

            html += `<li id="service--${service.id}>${service.name}</li>`

        }

    html += "</ul>"

    return html
}

