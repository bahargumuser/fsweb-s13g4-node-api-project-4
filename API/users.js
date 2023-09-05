let id = 0;
getId = () => ++id;

const users = [
    {
         id: getId(),
 username: "Gilles Deleuze",
        password: 2345,

        },
        {
            id: getId(),
            username: "Jean-Paul Sartre",
            password: 2345,
    
            },
            {
                id: getId(),
                username: "Martin Heidegger",
                password: 2345,
        
                }
];
module.exports = users;