const DrugCard = ({ drug, onDelete, onEdit, status }) => {
  const { id, name, description, stock, expiry_date, reorder_level } = drug;

  let borderColor = 'border-gray-300';
  if (status?.isLowStock && status?.isExpiringSoon) {
    borderColor = 'border-red-500';
  } else if (status?.isLowStock) {
    borderColor = 'border-yellow-500';
  } else if (status?.isExpiringSoon) {
    borderColor = 'border-orange-500';
  }

  return (
    <div className={`border-2 ${borderColor} p-4 rounded-md shadow-lg relative`}>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      <p className="text-sm text-gray-500">Stock: {stock}</p>
      <p className="text-sm text-gray-500">Expiry: {expiry_date}</p>
      <p className="text-sm text-gray-500">Reorder Level: {reorder_level}</p>

      {/* Status Badges */}
      <div className="absolute top-2 right-2 space-y-1 text-xs">
        {status?.isLowStock && (
          <span className="bg-yellow-400 text-black px-2 py-1 rounded">Low Stock</span>
        )}
        {status?.isExpiringSoon && (
          <span className="bg-orange-400 text-white px-2 py-1 rounded">Expiring Soon</span>
        )}
      </div>

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
