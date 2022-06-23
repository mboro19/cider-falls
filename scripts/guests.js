import { dataGuests, dataLocations } from "./database.js";

let guests = dataGuests()
let locations = dataLocations()

export const guestFunc = () => {

    let html = "<ul>"

        for (let guest of guests){

            html += `<li>${guest.firstName} ${guest.lastName}</li>`

        }

    html += "</ul>"

    return html
}

export const numGuestFunc = () => {

    let numGuests = 0

    for (let guest of guests){

        for (let location of locations){

            if(location.id === guest.locationId){

                numGuests++
            }

        }

        
    }

    return numGuests

}