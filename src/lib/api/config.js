/**
 * API Configuration
 * Centralized configuration for all API endpoints
 */

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010",
  TIMEOUT: 30000, // 30 seconds
  HEADERS: {
    "Content-Type": "application/json",
  },
};

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    SIGNIN: "/api/auth/signin",
    SIGNUP: "/api/auth/signup",
    ME: "/api/auth/me",
    CHANGE_PASSWORD: "/api/auth/change-password",
  },

  // Services endpoints
  SERVICES: {
    GET_ALL: "/api/services",
    GET_BY_ID: (id) => `/api/services/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/services/page/${pageNumber}`,
  },

  // Design Services endpoints
  DESIGN_SERVICES: {
    GET_ALL: "/api/design-services",
    GET_BY_ID: (id) => `/api/design-services/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/design-services/page/${pageNumber}`,
  },

  // Development Services endpoints
  DEVELOPMENT_SERVICES: {
    GET_ALL: "/api/development-services",
    GET_BY_ID: (id) => `/api/development-services/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/development-services/page/${pageNumber}`,
  },

  // Support Services endpoints
  SUPPORT_SERVICES: {
    GET_ALL: "/api/support-services",
    GET_BY_ID: (id) => `/api/support-services/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/support-services/page/${pageNumber}`,
  },

  // App Version Services endpoints
  APP_VERSION_SERVICES: {
    GET_ALL: "/api/app-version-services",
    GET_BY_ID: (id) => `/api/app-version-services/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/app-version-services/page/${pageNumber}`,
  },

  // Pricings endpoints
  PRICINGS: {
    GET_ALL: "/api/pricings",
    GET_BY_ID: (id) => `/api/pricings/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/pricings/page/${pageNumber}`,
  },

  // Design Pricings endpoints
  DESIGN_PRICINGS: {
    GET_ALL: "/api/design-pricings",
    GET_BY_ID: (id) => `/api/design-pricings/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/design-pricings/page/${pageNumber}`,
  },

  // Development Pricings endpoints
  DEVELOPMENT_PRICINGS: {
    GET_ALL: "/api/development-pricings",
    GET_BY_ID: (id) => `/api/development-pricings/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/development-pricings/page/${pageNumber}`,
  },

  // Support Pricings endpoints
  SUPPORT_PRICINGS: {
    GET_ALL: "/api/support-pricings",
    GET_BY_ID: (id) => `/api/support-pricings/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/support-pricings/page/${pageNumber}`,
  },

  // App Version Pricings endpoints
  APP_VERSION_PRICINGS: {
    GET_ALL: "/api/app-version-pricings",
    GET_BY_ID: (id) => `/api/app-version-pricings/${id}`,
    GET_BY_PAGE: (pageNumber) => `/api/app-version-pricings/page/${pageNumber}`,
  },

  // Brands endpoints
  BRANDS: {
    GET_ALL: "/api/brands",
    GET_BY_ID: (id) => `/api/brands/${id}`,
  },

  // Users endpoints
  USERS: {
    GET_ALL: "/api/users",
    GET_BY_ID: (id) => `/api/users/${id}`,
    CREATE: "/api/users",
    UPDATE: (id) => `/api/users/${id}`,
    DELETE: (id) => `/api/users/${id}`,
    UPLOAD_PICTURE: (id) => `/api/users/${id}/upload-picture`,
    UPDATE_PICTURE: (id) => `/api/users/${id}/picture`,
    DELETE_PICTURE: (id) => `/api/users/${id}/picture`,
  },
};

