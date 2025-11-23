import { LayoutApp } from "../structure/LayoutApp";
import { useQuery } from "../hooks/useQuery";
import { FilteredProduct } from "../components/filtered/FilteredProduct";
import { Loader } from "../components/loader/Loader";
import { ErrorPage } from "./ErrorPage";

export const Product = () => {
  const { data, loading, error } = useQuery({
    url: "https://fakestoreapi.com/products",
  });

  if (loading) return <Loader fullscreen={true} />;
  if (error) return <ErrorPage error={error} />;
  return (
    <LayoutApp>
      <FilteredProduct products={data} />
    </LayoutApp>
  );
};
