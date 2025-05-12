import express from 'express'
import {
  getDrugs,
  createDrug,
  editDrug,
  removeDrug
} from '../controllers/drugController.js'

const router = express.Router()

router.get('/', getDrugs)
router.post('/', createDrug)
router.put('/:id', editDrug)
router.delete('/:id', removeDrug)

export default router
