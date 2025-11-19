/**
 * Pricings API
 * API functions for pricings endpoints
 */

import { get } from "./client";
import { API_ENDPOINTS } from "./config";

/**
 * Get all pricings
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of pricings
 */
export async function getAllPricings(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.PRICINGS.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.PRICINGS.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    // تجاهل أخطاء API بصمت - سيتم استخدام البيانات المحلية
    return [];
  }
}

/**
 * Get pricings by page number
 * @param {number} pageNumber - Page number (1-4)
 * @returns {Promise} - Array of pricings
 */
export async function getPricingsByPage(pageNumber) {
  try {
    const response = await get(API_ENDPOINTS.PRICINGS.GET_BY_PAGE(pageNumber));
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get pricing by ID
 * @param {string|number} id - Pricing ID
 * @returns {Promise} - Pricing object
 */
export async function getPricingById(id) {
  try {
    const response = await get(API_ENDPOINTS.PRICINGS.GET_BY_ID(id));
    return response.success ? response.data : null;
  } catch (error) {
    return null;
  }
}

/**
 * Get all design pricings
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of design pricings
 */
export async function getAllDesignPricings(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.DESIGN_PRICINGS.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.DESIGN_PRICINGS.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get design pricings by page number
 * @param {number} pageNumber - Page number (1-4)
 * @returns {Promise} - Array of design pricings
 */
export async function getDesignPricingsByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.DESIGN_PRICINGS.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all development pricings
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of development pricings
 */
export async function getAllDevelopmentPricings(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.DEVELOPMENT_PRICINGS.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.DEVELOPMENT_PRICINGS.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get development pricings by page number
 * @param {number} pageNumber - Page number (1-3)
 * @returns {Promise} - Array of development pricings
 */
export async function getDevelopmentPricingsByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.DEVELOPMENT_PRICINGS.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all support pricings
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of support pricings
 */
export async function getAllSupportPricings(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.SUPPORT_PRICINGS.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.SUPPORT_PRICINGS.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get support pricings by page number
 * @param {number} pageNumber - Page number (1-4)
 * @returns {Promise} - Array of support pricings
 */
export async function getSupportPricingsByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.SUPPORT_PRICINGS.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all app version pricings
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of app version pricings
 */
export async function getAllAppVersionPricings(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.APP_VERSION_PRICINGS.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.APP_VERSION_PRICINGS.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get app version pricings by page number
 * @param {number} pageNumber - Page number (1-3)
 * @returns {Promise} - Array of app version pricings
 */
export async function getAppVersionPricingsByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.APP_VERSION_PRICINGS.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

