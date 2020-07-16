// // Update with your config settings.

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/car-dealer.db3'
//     },
//   useNullAsDefault: true,

//    migrations: {
//       directory: './data/migrations'
//     },
//     seeds: {
//       directory: './data/seeds'
//     }
//   }
//   }


module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault:true,
    connection: {
      filename: './data/db.db3'
    },
    migrations:{
      directory:"./data/migrations"
    },
    seeds:{
      directory:"./data/seeds"
    }
  },
};
