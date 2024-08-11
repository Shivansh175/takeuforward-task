import mysql from "mysql2";

import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}).promise()

export async function getCards(){
    const [rows] = await pool.query("SELECT * FROM cards");
    return rows;
}

export async function getCard(id){
    const [row] = await pool.query(`SELECT * FROM cards WHERE id = ?`,[id]);
    return row[0];
}

export async function createCard(front, back){
    const result = await pool.query(
        `INSERT INTO cards
        (front, back)
        Values
        (?, ?)`,[front,back]);
    // console.log(result);
    const id = result[0].insertId
    // console.log(id);
    return getCard(id);
}

