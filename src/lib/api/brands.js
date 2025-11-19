/**
 * Brands API
 * API functions for brands endpoints
 */

import { get } from "./client";
import { API_ENDPOINTS } from "./config";

/**
 * Get all brands
 * @returns {Promise} - Array of brands
 */
export async function getAllBrands() {
  try {
    const response = await get(API_ENDPOINTS.BRANDS.GET_ALL);

    // Backend returns array directly for brands
    if (Array.isArray(response)) {
      return response;
    }

    // In case backend sends wrapped response
    return response.data || response || [];
  } catch (error) {
    return [];
  }
}

/**
 * Get brand by ID
 * @param {string|number} id - Brand ID
 * @returns {Promise} - Brand object
 */
export async function getBrandById(id) {
  try {
    const response = await get(API_ENDPOINTS.BRANDS.GET_BY_ID(id));
    return response.data || response || null;
  } catch (error) {
    return null;
  }
}

