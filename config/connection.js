var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection ({
    host: 'edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ni2u8wrhng862waj',
    password: 'rm3ne5l8gg45nysa',
    database: 'rw5bcb0lqjbwjlnu'
  });
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

