import mysql from 'mysql2/promise';

async function initializeDatabase() {
  let connection;
  
  try {
    // First connect without database selected
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });

    console.log('Connected to MySQL server');

    // Create database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS pharmacy');
    console.log('Database "pharmacy" created or already exists');

    // Use the pharmacy database
    await connection.query('USE pharmacy');

    // Create users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('Users table created or already exists');

    // Insert test user if not exists
    await connection.query(`
      INSERT IGNORE INTO users (email, password) 
      VALUES ('test@example.com', 'test123')
    `);
    console.log('Test user created or already exists');

    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
  process.exit(0);
}

initializeDatabase(); 