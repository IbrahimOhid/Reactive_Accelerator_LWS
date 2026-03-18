import { useEffect, useState } from "react";

export const usePhotoData = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPhotoData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      throw new Error(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchPhotoData();
  }, []);

  return {
    photos,
    loading,
    error,
  };
};
