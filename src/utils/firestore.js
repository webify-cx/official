import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'

/**
 * Submit contact form to Firestore
 * @param {object} formData - Contact form data
 * @returns {Promise<string>} - Document ID on success
 */
export const submitContactForm = async (formData) => {
  try {
    if (!formData.name || !formData.email) {
      throw new Error('Name and email are required')
    }

    // Add document to 'contacts' collection with timestamp
    const docRef = await addDoc(collection(db, 'contacts'), {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company?.trim() || '',
      budget: formData.budget || '',
      service: formData.service || '',
      message: formData.message?.trim() || '',
      timestamp: serverTimestamp(),
      status: 'new',
      read: false,
    })

    console.log('Contact form submitted with ID:', docRef.id)
    return docRef.id
  } catch (error) {
    console.error('Error submitting contact form:', error.message)
    throw error
  }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number
 * @param {string} phone - Phone to validate
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  if (!phone) return true // Optional field
  const phoneRegex = /^[\d\s\-+()]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}
