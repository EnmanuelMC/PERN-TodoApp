const Pool = require('pg').Pool;
const pool = new Pool({
  user: env.user,
  password: env.pass,
  host: 'localhost',
  port: env.port,
  database: 'perntodo',
});

module.exports = pool;
