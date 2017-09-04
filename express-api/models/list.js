const pgp = require('pg-promise')();

const db = pgp( process.env.DATABASE_URL || 'postgress://student_04@localhost:5432/to_do' );


const list ={}

list.index=()=>{
return db.any('SELECT * FROM tasks');
}

list.delete=(id)=>{
return db.none('DELETE FROM tasks WHERE id ='+id)
}

list.create=(data)=>{
return db.one(`INSERT INTO tasks (task) VALUES($1) returning id`,
  [data])
}

module.exports = list;
