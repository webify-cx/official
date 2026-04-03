/**
 * Form Validation Utilities for Webify
 * Provides reusable validation functions for common form fields
 */

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (basic international format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\d\s\-+()]+$/ // Allows digits, spaces, -, +, ()
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

/**
 * Validate that a field is not empty
 * @param {string} value - Value to check
 * @returns {boolean} - True if not empty, false otherwise
 */
export const isRequired = (value) => {
  return value && value.trim().length > 0
}

/**
 * Validate minimum length
 * @param {string} value - Value to check
 * @param {number} minLength - Minimum required length
 * @returns {boolean} - True if length meets requirement, false otherwise
 */
export const hasMinLength = (value, minLength = 3) => {
  return value && value.trim().length >= minLength
}

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidURL = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Validate number format and range
 * @param {number|string} value - Value to validate
 * @param {number} min - Minimum allowed value (optional)
 * @param {number} max - Maximum allowed value (optional)
 * @returns {boolean} - True if valid, false otherwise
 */
export const isValidNumber = (value, min = null, max = null) => {
  const num = Number(value)
  if (Number.isNaN(num)) return false
  if (min !== null && num < min) return false
  if (max !== null && num > max) return false
  return true
}

/**
 * Validate form data object
 * @param {object} data - Form data to validate
 * @param {object} rules - Validation rules { fieldName: ['required', 'email'] }
 * @returns {object} - Object with errors { fieldName: 'Error message' }
 * @example
 * const errors = validateForm(
 *   { email: 'user@example.com', name: '' },
 *   { email: ['required', 'email'], name: ['required'] }
 * )
 */
export const validateForm = (data, rules) => {
  const errors = {}

  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = data[field] || ''

    for (const rule of fieldRules) {
      if (rule === 'required' && !isRequired(value)) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
        break
      }

      if (rule === 'email' && !isValidEmail(value)) {
        errors[field] = 'Please enter a valid email'
        break
      }

      if (rule === 'phone' && !isValidPhone(value)) {
        errors[field] = 'Please enter a valid phone number'
        break
      }

      if (rule === 'minLength:3' && !hasMinLength(value, 3)) {
        errors[field] = `${field} must be at least 3 characters`
        break
      }

      if (rule === 'url' && !isValidURL(value)) {
        errors[field] = 'Please enter a valid URL'
        break
      }
    }
  }

  return errors
}

/**
 * Sanitize user input to prevent XSS
 * @param {string} input - User input to sanitize
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  const div = document.createElement('div')
  div.textContent = input
  return div.innerHTML
}

/**
 * Check if form has any errors
 * @param {object} errors - Errors object
 * @returns {boolean} - True if has errors, false otherwise
 */
export const hasErrors = (errors) => {
  return Object.keys(errors).length > 0
}

/**
 * Clear form errors for a specific field
 * @param {object} errors - Current errors object
 * @param {string} field - Field name to clear
 * @returns {object} - Updated errors object
 */
export const clearFieldError = (errors, field) => {
  const newErrors = { ...errors }
  delete newErrors[field]
  return newErrors
}
