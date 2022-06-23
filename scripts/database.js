const database = {
    
    guests: [
        
    {

        id: 1,
        firstName: "Tom",
        lastName: "Hanks",
        locationId: 5,

    },
    {

        id: 2,
        firstName: "Patrick",
        lastName: "Stewart",
        locationId: 3,

    },
    {

        id: 3,
        firstName: "Cuba",
        lastName: "Gooding Jr.",
        locationId: 1,

    },
    {

        id: 4,
        firstName: "Mila",
        lastName: "Kunis",
        locationId: 4,

    },
    {

        id: 5,
        firstName: "John",
        lastName: "Travolta",
        locationId: 6,

    },
    {

        id: 6,
        firstName: "Jessica",
        lastName: "Biel",
        locationId: 2,

    },
    {

        id: 7,
        firstName: "Ashton",
        lastName: "Kutcher",
        locationId: 2,

    },
    {

        id: 8,
        firstName: "Vin",
        lastName: "Diesel",
        locationId: 3,

    },
    {

        id: 9,
        firstName: "Marty",
        lastName: "McFly",
        locationId: 5,

    },
    {

        id: 10,
        firstName: "Willy",
        lastName: "Wonka",
        locationId: 1,

    },
    {

        id: 11,
        firstName: "Charlie",
        lastName: "Brown",
        locationId: 6,

    },
    {

        id: 12,
        firstName: "Mike",
        lastName: "Jones",
        locationId: 2,

    },
    {

        id: 13,
        firstName: "Martha",
        lastName: "Stewart",
        locationId: 1,

    },
    {

        id: 14,
        firstName: "Tiger",
        lastName: "Woods",
        locationId: 6,

    },
    {

        id: 15,
        firstName: "Aaron",
        lastName: "Lewis",
        locationId: 3,

    },

        ],
    
    
    locations: [
        
    {

        id:1,
        name: "North West Section",
        servicesId: [2,4,6],
        mainAttraction: "Lodge",
        

    },
    {

        id:2,
        name: "Northern Section",
        servicesId: [1,2,10],
        mainAttraction: "Lost Wolf Hiking",
        

    },
    {

        id:3,
        name: "North East Section",
        servicesId: [7,8,9],
        mainAttraction: "Chamfort River",
        

    },
    {

        id:4,
        name: "South West Section",
        servicesId: [1,7],
        mainAttraction: "Gander River",
        

    },
    {

        id:5,
        name: "Southern Section",
        servicesId: [4,5,6],
        mainAttraction: "Campgrouds",
        


    },
    {

        id:6,
        name: "South East Section",
        servicesId: [1,2,3],
        mainAttraction: "Pine Bluff Trails",
        

    },

    ],
    
    services: [

    {
        id: 1,
        name: "hiking",
    

    },
    {
        id: 2,
        name: "picnicking",
    

    },
    {
        id: 3,
        name: "zip lines",
    

    },
    {
        id: 4,
        name: "information",
    

    },
    {
        id: 5,
        name: "lodging",
    

    },
    {
        id: 6,
        name: "parking",
    

    },
    {
        id: 7,
        name: "fishing",
    

    },
    {
        id: 8,
        name: "rafting",
    

    },
    {
        id: 9,
        name: "canoeing",
    

    },
    {
        id: 10,
        name: "rock climbing",
    

    },




    ]
}

export const dataGuests = () => { 
    
    return database.guests.map(guest => ({...guest}))
}

export const dataLocations = () => {

    return database.locations.map(location => ({...location}))
}

export const dataServices = () => {

    return database.services.map(service => ({...service}))
}