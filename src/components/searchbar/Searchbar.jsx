export const Searchbar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-8 flex gap-5">
      <input
        type="text"
        placeholder="Buscar productos por nombre..."
        className="input"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
