/**
 * Format currency in Indian Rupees with proper Indian number formatting
 * @param {number} amount - The amount to format
 * @returns {string} - Formatted currency string (e.g., ₹1,299)
 */
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Format number in Indian number system (e.g., 1,29,999)
 * @param {number} amount - The number to format
 * @returns {string} - Formatted number string
 */
export function formatIndianNumber(amount) {
  return new Intl.NumberFormat('en-IN').format(amount)
}
