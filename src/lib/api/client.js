/**
 * API Client
 * Generic HTTP client for making API requests
 */

import { API_CONFIG } from "./config";

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

/**
 * Make an API request
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} - Response data
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      ...API_CONFIG.HEADERS,
      ...options.headers,
    },
  };

  // Remove Content-Type header for FormData
  if (options.body instanceof FormData) {
    delete config.headers["Content-Type"];
  }

  try {
    const response = await fetch(url, config);

    // Parse response
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Handle errors
    if (!response.ok) {
      throw new ApiError(
        data.error || data.message || "An error occurred",
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or other errors - check if it's a connection error
    if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
      // تجاهل رسائل الاتصال بصمت - سيتم استخدام البيانات المحلية
      throw new ApiError("API server not available", 0, null);
    }

    throw new ApiError(error.message || "Network error occurred", 0, null);
  }
}

/**
 * GET request
 */
export async function get(endpoint, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: "GET",
  });
}

/**
 * POST request
 */
export async function post(endpoint, data, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: "POST",
    body: data instanceof FormData ? data : JSON.stringify(data),
  });
}

/**
 * PUT request
 */
export async function put(endpoint, data, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: "PUT",
    body: data instanceof FormData ? data : JSON.stringify(data),
  });
}

/**
 * DELETE request
 */
export async function del(endpoint, options = {}) {
  return apiRequest(endpoint, {
    ...options,
    method: "DELETE",
  });
}

/**
 * API Client object with all methods
 */
export const apiClient = {
  get,
  post,
  put,
  delete: del,
  request: apiRequest,
};

