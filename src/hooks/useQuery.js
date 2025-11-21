import { useEffect, useState } from "react";

export const useQuery = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Error HTTP: ${response.status} ${response.statusText}`
          );
        }
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (err) {
        setError(err.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]);
  return { data, loading, error };
};
