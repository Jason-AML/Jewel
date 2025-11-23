import { useMemo, useState } from "react";
import { CardList } from "../listcard/CardList";
import { Searchbar } from "../searchbar/Searchbar";

export const FilteredProduct = ({ products }) => {
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(
      (product) =>
        product.title &&
        product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const handleSearchChange = (value) => {
    setSearch(value);
  };
  return (
    <section className="py-20 px-10 min-h-screen">
      <Searchbar searchTerm={search} onSearchChange={handleSearchChange} />
      <CardList data={filteredProducts} />
    </section>
  );
};
