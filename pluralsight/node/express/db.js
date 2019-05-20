const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'b11O0l74',
  database: 'psLibrary',
});

conn.connect((err) => {
  if (err) throw err;
});

const query = util.promisify(conn.query).bind(conn);

module.exports = query;
