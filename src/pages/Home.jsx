import { Hero } from "../components/Hero";
import { LayoutApp } from "../structure/LayoutApp";
import { useQuery } from "../hooks/useQuery";
import { FilteredProduct } from "../components/filtered/FilteredProduct";
import { Loader } from "../components/loader/Loader";
export const Home = () => {
  const { data, loading, error } = useQuery({
    url: "https://fakestoreapi.com/products",
  });
  console.log(data);
  if (loading) return <Loader fullscreen={true} />;
  if (error) return <p>error: {error}</p>;
  return (
    <LayoutApp>
      <Hero />
      <FilteredProduct products={data} />
    </LayoutApp>
  );
};
