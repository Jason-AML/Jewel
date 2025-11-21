export const Card = ({ image, title, description }) => {
  return (
    <div className="card bg-base-100 w-96 h-130 shadow-sm">
      <figure className="h-64 flex justify-center items-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </figure>
      <div className="card-body max-h-1/2">
        <h2 className="card-title">{title}</h2>
        <p className="overflow-y-auto">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
