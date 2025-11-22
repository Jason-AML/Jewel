export const Loader = ({ fullscreen = false }) => {
  const baseClasses = "loading loading-spinner";
  const sizeClass = fullscreen ? "loading-xl" : "loading-md";

  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 flex items-center justify-center bg-black/30 z-50"
          : "flex justify-center items-center"
      }
    >
      <span
        className={`${baseClasses} ${sizeClass}`}
        role="status"
        aria-live="polite"
      >
        <span className="sr-only">Cargando contenido, por favor espere...</span>
      </span>
    </div>
  );
};
