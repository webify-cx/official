/**
 * Scroll to an element by ID with smooth behavior
 * @param {string} id - The ID of the element to scroll to
 */
export const scrollToElement = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

/**
 * Scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
