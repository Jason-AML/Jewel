import image from "../../assets/error/oops.png";

export const NoProduct = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <img src={image} alt="No se encontro el producto" />
    </div>
  );
};
