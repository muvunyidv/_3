import express from 'express';
import { pool } from '../config/database.js';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

// Test route to check database connection and users
router.get('/test', async (req, res) => {
  try {
    // Test database connection
    const connection = await pool.getConnection();
    console.log('Database connected successfully');

    // Check users table
    const [tables] = await connection.query('SHOW TABLES');
    console.log('Tables:', tables);

    // Get users table structure
    const [columns] = await connection.query('DESCRIBE users');
    console.log('Users table structure:', columns);

    // Get sample users (limited to 5)
    const [users] = await connection.query('SELECT id, email FROM users LIMIT 5');
    console.log('Sample users:', users);

    connection.release();
    res.json({ 
      success: true, 
      tables, 
      columns,
      sampleUsers: users
    });
  } catch (error) {
    console.error('Test route error:', error);
    res.status(500).json({ message: 'Database test failed', error: error.message });
  }
});

router.post('/login', login);
router.post('/register', register);

export default router; 