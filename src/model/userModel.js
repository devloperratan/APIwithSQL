const { sql } = require("../db/dbConnection");

class User {
    constructor(user) {
        this.username = user.username;
        this.email = user.email;
        this.password = user.password; // Make sure to hash the password
    }

    // Create a new user
    static async create(newUser) {
        try {
            const request = new sql.Request();
            const result = await request
                .input('username', sql.VarChar, newUser.username)
                .input('email', sql.VarChar, newUser.email)
                .input('password', sql.VarChar, newUser.password) // Hash the password before storing
                .query(`INSERT INTO Users (username, email, password) 
                        VALUES (@username, @email, @password);
                        SELECT SCOPE_IDENTITY() AS id;`);

            return result.recordset[0];
        } catch (err) {
            throw new Error('Error creating user: ' + err.message);
        }
    }
}


module.exports = User;