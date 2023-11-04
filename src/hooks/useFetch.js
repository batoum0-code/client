
import { useEffect, useState } from 'react';
import { fetchApi } from '../utils/fetchApi';

export const useFetch = (endPoint) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetchApi.get(endPoint);
        setData(res?.data.data);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null); // Clear data on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endPoint]);

  return { data, loading, error };
};


