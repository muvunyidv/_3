import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pharmacy'
})

db.connect(err => {
  if (err) console.error('DB connection failed:', err)
  else console.log('MySQL connected')
})

export default db

