import express from 'express'
import cors from 'cors'
import { pool } from './config/database.js'
import authRoutes from './routes/authRoutes.js'
import drugRoutes from './routes/drugRoutes.js'

const app = express()

// Enable CORS
app.use(cors({
  origin: '*',
  credentials: true
}))

// Parse JSON bodies
app.use(express.json())

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection()
    console.log('✓ Connected to pharmacy database successfully!')
    
    // Test if we can query the database
    const [result] = await connection.query('SHOW TABLES')
    console.log('✓ Available tables:', result.map(r => Object.values(r)[0]).join(', '))
    
    connection.release()
  } catch (err) {
    console.error('Database connection error:', err)
    process.exit(1)
  }
}

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/drugs', drugRoutes)

// Basic test route
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working' })
})

const PORT = process.env.PORT || 5000

// Start server after testing database connection
testConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
})
