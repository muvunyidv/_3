import { useState, useEffect } from 'react';

const DrugForm = ({ drug, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    stock: 0,
    expiry_date: '',
    reorder_level: 0,
  });

  useEffect(() => {
    if (drug) {
      setFormData({
        name: drug.name,
        description: drug.description,
        stock: drug.stock,
        expiry_date: drug.expiry_date,
        reorder_level: drug.reorder_level,
      });
    }
  }, [drug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Expiry Date</label>
        <input
          type="date"
          name="expiry_date"
          value={formData.expiry_date}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-semibold">Reorder Level</label>
        <input
          type="number"
          name="reorder_level"
          value={formData.reorder_level}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </form>
  );
};

export default DrugForm;
