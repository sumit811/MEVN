const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT_NUMBER,
    database: process.env.DB_NAME
})

connection.connect()

module.exports.deleteUser = async function(del_id) {
    try {
        const id = parseInt(del_id, 10)
        const response = await new Promise((resolve, reject) => {
            const query = `DELETE FROM user WHERE id = ${id}`;

            connection.query(query, (err, result) => {
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });

        return response;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports.getOne = async function(id) {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = `SELECT * FROM user where id = ${id}`;

            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports.getAll = async function() {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM `user` ORDER BY id DESC;";

            connection.query(query, (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports.insert = async function(data) {
    try {
        const insertId = await new Promise((resolve, reject) => {
            const query = `INSERT INTO user (name,mobile) VALUES ('${data.name}', '${data.mobile}')`;

            connection.query(query, (err, result) => {
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return {
            id: insertId
        };
    } catch (error) {
        console.log('insert', error);
    }
}

module.exports.update = async function(data) {
    let { id, name, mobile } = data;
    try {
        const upd = await new Promise((resolve, reject) => {
            const query = "UPDATE `user` SET `name` = ?, `mobile` = ? WHERE `user`.`id` = ?;";

            connection.query(query, [name, mobile, id], (err, result) => {
                if (err) reject(new Error(err.message));
                result.insertId = id
                resolve(result);
            })
        });

        return upd;
    } catch (error) {
        console.log('insert', error);
    }
}
