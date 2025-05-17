import { pool } from '../config/database.js';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt with:', { email, password });

    // Find user by email
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    console.log('Query result:', rows);

    if (rows.length === 0) {
      console.log('No user found with these credentials');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = rows[0];
    console.log('User found:', { id: user.id, email: user.email });

    res.json({ 
      success: true, 
      user: { 
        id: user.id,
        email: user.email 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Check if user exists
    const [existing] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new user
    const [result] = await pool.query(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, password]
    );
    
    res.status(201).json({ 
      success: true, 
      user: {
        id: result.insertId,
        email: email
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  res.json({ success: true });
}; 