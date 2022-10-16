const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Keili3814!!",
  host: "localhost",
  port: 5432,
  database: "perntodo2"
});

module.exports = pool;