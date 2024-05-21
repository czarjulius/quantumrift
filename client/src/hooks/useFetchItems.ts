import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export interface ItemProps {
  name: string;
  price: number;
  id: string;
}
const useFetchItems = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:1001/items');
      setItems(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError(error as any);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return { items, loading, error, fetchItems };
};

export default useFetchItems;
