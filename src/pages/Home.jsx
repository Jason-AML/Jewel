import { Hero } from "../components/Hero";
import { LayoutApp } from "../structure/LayoutApp";
import { useQuery } from "../hooks/useQuery";
import { FilteredProduct } from "../components/filtered/FilteredProduct";
export const Home = () => {
  const { data, loading, error } = useQuery({
    url: "https://fakestoreapi.com/products",
  });
  console.log(data);
  if (loading) return <p>cargando...</p>;
  if (error) return <p>error: {error}</p>;
  return (
    <LayoutApp>
      <Hero />
      <FilteredProduct products={data} />
    </LayoutApp>
  );
};
