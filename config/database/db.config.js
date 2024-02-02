const mysql = require('mysql');
require('dotenv').config();
const fs = require('fs');
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, // Use the environment variable for the host
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: {
        minVersion: 'TLSv1.2',
        ca: fs.readFileSync(process.env.DATABASE_PATH) 
    } ,
});
db.connect(function(error){
	if(error)
	{
		console.error('error connecting: ' + error.stack);
    return;
	}
	else
	{
        setInterval(function () {
            db.query('SELECT 1');
        }, 5000);
		console.log('MySQL Database is connected Successfully');
	}
});
module.exports = db;
