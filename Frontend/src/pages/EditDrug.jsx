import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DrugForm from '../components/DrugForm'
import { getDrugs, updateDrug } from '../services/DrugService'

const EditDrug = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [drug, setDrug] = useState(null)

  useEffect(() => {
    const fetchDrug = async () => {
      try {
        const allDrugs = await getDrugs()
        const targetDrug = allDrugs.find((d) => d.id.toString() === id)
        if (targetDrug) setDrug(targetDrug)
      } catch (error) {
        console.error('Error fetching drug:', error)
      }
    }

    fetchDrug()
  }, [id])

  const handleSave = async (updatedData) => {
    try {
      await updateDrug(id, updatedData)
      navigate('/')
    } catch (error) {
      console.error('Error updating drug:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Drug</h1>
      {drug ? <DrugForm drug={drug} onSave={handleSave} /> : <p>Loading...</p>}
    </div>
  )
}

export default EditDrug
