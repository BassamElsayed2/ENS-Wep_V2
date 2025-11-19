/**
 * usePricings Hook
 * React hook for fetching pricing data
 */

"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import {
  getAllPricings,
  getPricingsByPage,
  getAllDesignPricings,
  getDesignPricingsByPage,
  getAllDevelopmentPricings,
  getDevelopmentPricingsByPage,
  getAllSupportPricings,
  getSupportPricingsByPage,
  getAllAppVersionPricings,
  getAppVersionPricingsByPage,
} from "../api/pricings";
import { mapPricingsToComponent } from "../utils/dataMapper";

/**
 * Hook to fetch pricings
 * @param {string} type - Pricing type: 'pricings', 'design', 'development', 'support', 'app-version'
 * @param {number} pageNumber - Optional page number
 * @returns {object} - { data, loading, error }
 */
export function usePricings(type = "pricings", pageNumber = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const locale = useLocale();

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        let response;

        // Select the appropriate API function based on type
        switch (type) {
          case "design":
            response = pageNumber
              ? await getDesignPricingsByPage(pageNumber)
              : await getAllDesignPricings(pageNumber);
            break;

          case "development":
            response = pageNumber
              ? await getDevelopmentPricingsByPage(pageNumber)
              : await getAllDevelopmentPricings(pageNumber);
            break;

          case "support":
            response = pageNumber
              ? await getSupportPricingsByPage(pageNumber)
              : await getAllSupportPricings(pageNumber);
            break;

          case "app-version":
            response = pageNumber
              ? await getAppVersionPricingsByPage(pageNumber)
              : await getAllAppVersionPricings(pageNumber);
            break;

          default: // 'pricings'
            response = pageNumber
              ? await getPricingsByPage(pageNumber)
              : await getAllPricings(pageNumber);
            break;
        }

        if (isMounted) {
          const mappedData = mapPricingsToComponent(response, locale);
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
  }, [type, pageNumber, locale]);

  return { data, loading, error };
}

