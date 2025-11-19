/**
 * useServices Hook
 * React hook for fetching services data
 */

"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import {
  getAllServices,
  getServicesByPage,
  getAllDesignServices,
  getDesignServicesByPage,
  getAllDevelopmentServices,
  getDevelopmentServicesByPage,
  getAllSupportServices,
  getSupportServicesByPage,
  getAllAppVersionServices,
  getAppVersionServicesByPage,
} from "../api/services";
import { mapServicesToComponent } from "../utils/dataMapper";

/**
 * Hook to fetch services
 * @param {string} type - Service type: 'services', 'design', 'development', 'support', 'app-version'
 * @param {number} pageNumber - Optional page number
 * @returns {object} - { data, loading, error }
 */
export function useServices(type = "services", pageNumber = null) {
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
              ? await getDesignServicesByPage(pageNumber)
              : await getAllDesignServices(pageNumber);
            break;

          case "development":
            response = pageNumber
              ? await getDevelopmentServicesByPage(pageNumber)
              : await getAllDevelopmentServices(pageNumber);
            break;

          case "support":
            response = pageNumber
              ? await getSupportServicesByPage(pageNumber)
              : await getAllSupportServices(pageNumber);
            break;

          case "app-version":
            response = pageNumber
              ? await getAppVersionServicesByPage(pageNumber)
              : await getAllAppVersionServices(pageNumber);
            break;

          default: // 'services'
            response = pageNumber
              ? await getServicesByPage(pageNumber)
              : await getAllServices(pageNumber);
            break;
        }

        if (isMounted) {
          const mappedData = mapServicesToComponent(response, locale);
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

