import { Card } from "../card/Card";
import { NoProduct } from "../no-product/NoProduct";

export const CardList = ({ data }) => {
  if (data.length === 0) return <NoProduct />;
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {data.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
