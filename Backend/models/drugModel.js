import db from '../config/db.js'

export const getAllDrugs = (cb) => {
  db.query('SELECT * FROM Drugs', cb)
}

export const addDrug = (data, cb) => {
  db.query('INSERT INTO Drugs SET ?', data, cb)
}

export const updateDrug = (id, data, cb) => {
  db.query('UPDATE Drugs SET ? WHERE id = ?', [data, id], cb)
}

export const deleteDrug = (id, cb) => {
  db.query('DELETE FROM Drugs WHERE id = ?', [id], cb)
}
