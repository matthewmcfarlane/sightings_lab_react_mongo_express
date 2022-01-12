use birds;
db.dropDatabase();

db.sightings.insertMany([
    {
        species: "Bluetit",
        location: "Doon the toon",
        date: "2021-12-30"
    },
    {
        species: "Buzzard",
        location: "The river",
        date: "2022-01-10"
    },
    {
        species: "Superman",
        location: "In the sky",
        date: "2021-02-20"
    }
]);