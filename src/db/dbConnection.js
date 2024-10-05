const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false, // Use encryption if you are connecting to Azure
        trustServerCertificate: true // If you're connecting to a local SQL server, set to true
    }
};

const dbConnection = async () => {
    try {
        await sql.connect(config);
        console.log('Connected to MSSQL database');
    } catch (err) {
        console.error('Database connection failed', err);
    }
};

module.exports = { sql, dbConnection };
