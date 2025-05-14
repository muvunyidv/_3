import { useState, useEffect } from 'react';
import { getDrugs, deleteDrug } from '../services/DrugService';
import DrugCard from '../components/DrugCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [drugs, setDrugs] = useState([]);
  const navigate = useNavigate();

  const fetchDrugs = async () => {
    try {
      const data = await getDrugs();
      setDrugs(data);
    } catch (error) {
      console.error('Error fetching drugs:', error);
    }
  };

  useEffect(() => {
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

  //  calculate the real-time status of each drug
  const getDrugStatus = (drug) => {
    const today = new Date();
    const expiryDate = new Date(drug.expiry_date);
    const isExpiringSoon = (expiryDate - today) / (1000 * 60 * 60 * 24) <= 30;
    const isLowStock = drug.stock < drug.reorder_level;
    return { isExpiringSoon, isLowStock };
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
            status={getDrugStatus(drug)} // 🔁 Always compute status here
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
