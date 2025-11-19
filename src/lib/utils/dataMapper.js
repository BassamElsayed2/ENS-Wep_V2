/**
 * Data Mapper Utilities
 * Map backend API data to frontend component format
 */

/**
 * Map service data from backend to frontend format
 * @param {object} service - Service object from backend
 * @param {string} locale - Current locale (ar or en)
 * @returns {object} - Mapped service object
 */
export function mapServiceToComponent(service, locale = "en") {
  if (!service) return null;

  // Support both snake_case and camelCase from backend
  const titleAr = service.titleAr || service.title_ar;
  const titleEn = service.titleEn || service.title_en;
  const descriptionAr = service.descriptionAr || service.description_ar;
  const descriptionEn = service.descriptionEn || service.description_en;

  return {
    id: service.id,
    icon: service.img || service.icon,
    img: service.img,
    title: locale === "ar" ? titleAr : titleEn,
    desc: locale === "ar" ? descriptionAr : descriptionEn,
    description: locale === "ar" ? descriptionAr : descriptionEn,
    isActive: service.isActive || service.is_active,
    displayOrder: service.displayOrder || service.display_order,
    pageNumber: service.pageNumber || service.page_number,
  };
}

/**
 * Map pricing data from backend to frontend format
 * @param {object} pricing - Pricing object from backend
 * @param {string} locale - Current locale (ar or en)
 * @returns {object} - Mapped pricing object
 */
export function mapPricingToComponent(pricing, locale = "en") {
  if (!pricing) return null;

  // Support both snake_case and camelCase from backend
  const titleAr = pricing.titleAr || pricing.title_ar || "";
  const titleEn = pricing.titleEn || pricing.title_en || "";

  // Map items to simple text array based on locale
  const mappedItems = (pricing.items || [])
    .map((item) => {
      if (typeof item === "string") return item;
      const textAr = item.textAr || item.text_ar || "";
      const textEn = item.textEn || item.text_en || "";
      return locale === "ar" ? textAr : textEn;
    })
    .filter((text) => text && typeof text === "string" && text.trim() !== ""); // Remove empty items

  return {
    id: pricing.id,
    title: locale === "ar" ? titleAr : titleEn,
    price: pricing.price,
    items: mappedItems,
    features: mappedItems, // Alias for components that use 'features'
    isActive: pricing.is_active,
    pageNumber: pricing.page_number,
  };
}

/**
 * Map brand data from backend to frontend format
 * @param {object} brand - Brand object from backend
 * @returns {object} - Mapped brand object
 */
export function mapBrandToComponent(brand) {
  if (!brand) return null;

  return {
    id: brand.id,
    img: brand.img,
    order: brand.order,
  };
}

/**
 * Map array of services
 * @param {array} services - Array of service objects
 * @param {string} locale - Current locale
 * @returns {array} - Array of mapped service objects
 */
export function mapServicesToComponent(services, locale = "en") {
  if (!Array.isArray(services)) return [];
  return services.map((service) => mapServiceToComponent(service, locale));
}

/**
 * Map array of pricings
 * @param {array} pricings - Array of pricing objects
 * @param {string} locale - Current locale
 * @returns {array} - Array of mapped pricing objects
 */
export function mapPricingsToComponent(pricings, locale = "en") {
  if (!Array.isArray(pricings)) return [];
  return pricings.map((pricing) => mapPricingToComponent(pricing, locale));
}

/**
 * Map array of brands
 * @param {array} brands - Array of brand objects
 * @returns {array} - Array of mapped brand objects
 */
export function mapBrandsToComponent(brands) {
  if (!Array.isArray(brands)) return [];
  return brands.map((brand) => mapBrandToComponent(brand));
}
