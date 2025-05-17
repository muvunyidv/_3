import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  // Update this if you have a different password
  database: 'pharmacy',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}); 