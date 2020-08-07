import knex from 'knex';
import path from 'path';

// migration - database version control

const db = knex({ 
   client: 'sqlite3',
   connection: { 
      filename: path.resolve(__dirname, 'database.sqlite')
   },
   // empty field, fill with null
   useNullAsDefault: true
})

export default db;