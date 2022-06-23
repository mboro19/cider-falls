import { dataServices } from "./database.js"

let services = dataServices()

// split ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

document.addEventListener(
    `click`,
    (clickEvent) => {

        const itemClicked = clickEvent.target;

        if (itemClicked.id.startsWith("location")) {
            const [,locationId] = itemClicked.id.split("--")
                
                for(const location of locations){

                    if(location.id === parseInt(locationId)){

            
                    window.alert(`"This sections main attraction is the ${location.mainAttraction}."`)
                }}}
            }
);

// split ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const servicesFunc = () => {

    let html = "<ul>"

        for (let service of services){

            html += `<li>${service.name}</li>`

        }

    html += "</ul>"

    return html
}

