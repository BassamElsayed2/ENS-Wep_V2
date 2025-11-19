/**
 * useBrands Hook
 * React hook for fetching brands data
 */

"use client";

import { useState, useEffect } from "react";
import { getAllBrands } from "../api/brands";
import { mapBrandsToComponent } from "../utils/dataMapper";

/**
 * Hook to fetch brands
 * @returns {object} - { data, loading, error }
 */
export function useBrands() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await getAllBrands();

        if (isMounted) {
          const mappedData = mapBrandsToComponent(response);
          setData(mappedData);
        }
      } catch (err) {
        if (isMounted) {
          // تجاهل أخطاء API بصمت - البيانات ستكون فارغة
          setError(null);
          setData([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}

