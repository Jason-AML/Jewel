export const ErrorPage = ({ error }) => {
  return (
    <div className="h-screen bg-amber-300 text-black">
      <span className="text-3xl font-bold">{error}</span>
    </div>
  );
};
