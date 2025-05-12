import express from 'express'
import session from 'express-session'
import cors from 'cors'
import drugRoutes from './routes/drugRoutes.js'

const app = express()

app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
app.use(express.json())

app.use(session({
  secret: 'pharmacy-secret',
  resave: false,
  saveUninitialized: false
}))

app.use('/api/drugs', drugRoutes)

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
})
