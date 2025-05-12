import DrugForm from '../components/DrugForm'
import { addDrug } from '../services/DrugService'
import { useNavigate } from 'react-router-dom'

const AddDrug = () => {
  const navigate = useNavigate()

  const handleSave = async (drugData) => {
    try {
      await addDrug(drugData)
      navigate('/')
    } catch (error) {
      console.error('Error adding drug:', error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Drug</h1>
      <DrugForm onSave={handleSave} />
    </div>
  )
}

export default AddDrug
