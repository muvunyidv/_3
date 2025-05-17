import { pool } from './database.js';
import bcrypt from 'bcryptjs';

async function createTestUser() {
  try {
    const connection = await pool.getConnection();
    
    // Test user credentials
    const email = 'test@example.com';
    const password = 'test123';
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert the test user
    await connection.query(
      'INSERT INTO users (email, password) VALUES (?, ?) ON DUPLICATE KEY UPDATE password = ?',
      [email, hashedPassword, hashedPassword]
    );
    
    console.log('✓ Test user created successfully');
    console.log('Email:', email);
    console.log('Password:', password);
    
    connection.release();
    process.exit(0);
  } catch (error) {
    console.error('Error creating test user:', error.message);
    process.exit(1);
  }
}

createTestUser(); 