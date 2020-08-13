const { ApolloServer, gql } = require('apollo-server');

const cars = [
    {   
        id: 1,
        brand: "Honda",
        color: "Black",
        model: 2020,
        enginePower: 1000,
    },
    {
        id: 2,
        brand: "Toyota",
        color: "Red",
        model: 2021,
        enginePower: 2000,
    },
  ];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      cars: () => cars,
    },
  };
  
const typeDefs = gql`
   type Car {
    id: Int
    brand: String
    color: String
    model: Int
    enginePower: Int
  }

  
  type Query {
    cars: [Car]
  }
`;


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


