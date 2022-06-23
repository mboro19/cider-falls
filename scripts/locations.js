import { dataLocations } from "./database.js";

let locations = dataLocations()

// Split ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// Split ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const locationsFunc = () => {

    let html = "<ul>"

        for (let location of locations){

            html += `<li id="location--${location.id}">${location.name}</li>`

        }

    html += "</ul>"

    return html
}
