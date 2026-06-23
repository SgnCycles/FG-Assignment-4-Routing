import { useState, useEffect } from "react";

const useFetch = (endpoint = "", fallbackEndpoint = "") => {
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState(null);

  const headers = {
    Authorization: `Bearer ${API_KEY}`,
  };

  const fetchAllPages = async (path) => {
    let allObjects = [];
    let offset = 0;
    const limit = 100;
    let more = true;

    while (more) {
      const separator = path.includes("?") ? "&" : "?";
      const response = await fetch(
        `${API_ENDPOINT}${path}${separator}limit=${limit}&offset=${offset}`,
        { headers },
      );

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const json = await response.json();
      allObjects = allObjects.concat(json.data.objects);
      more = json.data.meta.more;
      offset += limit;
    }

    return allObjects;
  };

  const getData = async () => {
    try {
      const objects = await fetchAllPages(endpoint);
      setData(objects);
    } catch (error) {
      if (fallbackEndpoint) {
        try {
          const fallbackObjects = await fetchAllPages(fallbackEndpoint);
          setData(fallbackObjects);
          return;
        } catch (fallbackError) {
          console.error("Fallback request failed:", fallbackError);
          return;
        }
      }
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return data;
};

export default useFetch;
