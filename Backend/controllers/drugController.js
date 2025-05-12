import * as Drug from '../models/drugModel.js'

export const getDrugs = (req, res) => {
  Drug.getAllDrugs((err, results) => {
    if (err) return res.status(500).json(err)
    res.json(results)
  })
}

export const createDrug = (req, res) => {
   console.log(req.body); 
  Drug.addDrug(req.body, (err, result) => {
    if (err) return res.status(500).json(err)
    res.json({ message: 'Drug added' })
  })
}

export const editDrug = (req, res) => {
  Drug.updateDrug(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json(err)
    res.json({ message: 'Drug updated' })
  })
}

export const removeDrug = (req, res) => {
  Drug.deleteDrug(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err)
    res.json({ message: 'Drug deleted' })
  })
}
