const DrugCard = ({ drug, onDelete, onEdit }) => {
  const { id, name, description, stock, expiry_date, reorder_level } = drug;

  return (
    <div className="border p-4 rounded-md shadow-lg">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      <p className="text-sm text-gray-500">Stock: {stock}</p>
      <p className="text-sm text-gray-500">Expiry: {expiry_date}</p>
      <p className="text-sm text-gray-500">Reorder Level: {reorder_level}</p>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => onEdit(id)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DrugCard;
