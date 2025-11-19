/**
 * Services API
 * API functions for services endpoints
 */

import { get } from "./client";
import { API_ENDPOINTS } from "./config";

/**
 * Get all services
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of services
 */
export async function getAllServices(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.SERVICES.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.SERVICES.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get services by page number
 * @param {number} pageNumber - Page number (1-4)
 * @returns {Promise} - Array of services
 */
export async function getServicesByPage(pageNumber) {
  try {
    const response = await get(API_ENDPOINTS.SERVICES.GET_BY_PAGE(pageNumber));
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get service by ID
 * @param {string|number} id - Service ID
 * @returns {Promise} - Service object
 */
export async function getServiceById(id) {
  try {
    const response = await get(API_ENDPOINTS.SERVICES.GET_BY_ID(id));
    return response.success ? response.data : null;
  } catch (error) {
    return null;
  }
}

/**
 * Get all design services
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of design services
 */
export async function getAllDesignServices(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.DESIGN_SERVICES.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.DESIGN_SERVICES.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get design services by page number
 * @param {number} pageNumber - Page number (1-4)
 * @returns {Promise} - Array of design services
 */
export async function getDesignServicesByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.DESIGN_SERVICES.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all development services
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of development services
 */
export async function getAllDevelopmentServices(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.DEVELOPMENT_SERVICES.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.DEVELOPMENT_SERVICES.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get development services by page number
 * @param {number} pageNumber - Page number (1-3)
 * @returns {Promise} - Array of development services
 */
export async function getDevelopmentServicesByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.DEVELOPMENT_SERVICES.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all support services
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of support services
 */
export async function getAllSupportServices(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.SUPPORT_SERVICES.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.SUPPORT_SERVICES.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get support services by page number
 * @param {number} pageNumber - Page number (1-4)
 * @returns {Promise} - Array of support services
 */
export async function getSupportServicesByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.SUPPORT_SERVICES.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all app version services
 * @param {number} pageNumber - Optional page number filter
 * @returns {Promise} - Array of app version services
 */
export async function getAllAppVersionServices(pageNumber = null) {
  try {
    const endpoint = pageNumber
      ? `${API_ENDPOINTS.APP_VERSION_SERVICES.GET_ALL}?page_number=${pageNumber}`
      : API_ENDPOINTS.APP_VERSION_SERVICES.GET_ALL;

    const response = await get(endpoint);
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get app version services by page number
 * @param {number} pageNumber - Page number (1-3)
 * @returns {Promise} - Array of app version services
 */
export async function getAppVersionServicesByPage(pageNumber) {
  try {
    const response = await get(
      API_ENDPOINTS.APP_VERSION_SERVICES.GET_BY_PAGE(pageNumber)
    );
    return response.success ? response.data : [];
  } catch (error) {
    return [];
  }
}

/**
 * Get all brands
 * @returns {Promise} - Array of brands
 */
export async function getAllBrands() {
  try {
    const response = await get(API_ENDPOINTS.BRANDS.GET_ALL);
    // The brands endpoint returns array directly, not wrapped in success/data
    return Array.isArray(response) ? response : [];
  } catch (error) {
    // API غير متاح - استخدم البيانات المحلية بدلاً من ذلك
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
    return response || null;
  } catch (error) {
    return null;
  }
}
