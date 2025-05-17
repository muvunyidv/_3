import { pool } from './database.js';
import bcrypt from 'bcryptjs';

async function setupDatabase() {
  try {
    console.log('Starting database setup...');
    
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('✓ Users table created');

    // Create test user
    const email = 'test@example.com';
    const password = 'test123';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert test user (if not exists)
    await pool.query(
      'INSERT IGNORE INTO users (email, password) VALUES (?, ?)',
      [email, hashedPassword]
    );

    console.log('✓ Test user created successfully');
    console.log('Login credentials:');
    console.log('Email:', email);
    console.log('Password:', password);

    process.exit(0);
  } catch (error) {
    console.error('Setup error:', error);
    process.exit(1);
  }
}

setupDatabase(); 