import { useState, useEffect } from 'react';
import { getDrugs, deleteDrug } from '../services/DrugService';
import DrugCard from '../components/DrugCard';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [drugs, setDrugs] = useState([]);
const navigate = useNavigate();

  useEffect(() => {
    const fetchDrugs = async () => {
      try {
        const data = await getDrugs();
        setDrugs(data);
      } catch (error) {
        console.error('Error fetching drugs:', error);
      }
    };
    fetchDrugs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDrug(id);
      setDrugs(drugs.filter((drug) => drug.id !== id));
    } catch (error) {
      console.error('Error deleting drug:', error);
    }
  };

  const handleEdit = (id) => {
      navigate(`/edit/${id}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Available Drugs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {drugs.map((drug) => (
          <DrugCard
            key={drug.id}
            drug={drug}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
