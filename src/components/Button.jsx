/**
 * Reusable Button Component
 * @component
 * @param {string} variant - Button style variant: 'primary', 'outline', 'pricing-primary', 'pricing-outline', 'nav', 'mobile', 'form', 'hamburger'
 * @param {function} onClick - Click handler callback
 * @param {React.ReactNode} children - Button content (text or JSX)
 * @param {string} className - Additional CSS classes (optional)
 * @param {string} ariaLabel - Accessibility label (optional)
 * @param {boolean} isActive - For hamburger: is menu open (optional)
 * @example
 * <Button variant="primary" onClick={handleClick}>Launch a Project →</Button>
 * <Button variant="outline" onClick={handleClick}>View Work</Button>
 */
export default function Button({
  variant = 'primary',
  onClick,
  children,
  className = '',
  ariaLabel,
  isActive = false,
  ...props
}) {
  const variantClasses = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    'pricing-primary': 'btn-pricing-primary',
    'pricing-outline': 'btn-pricing-outline',
    nav: 'nav-cta',
    mobile: 'mob-cta drawer-link',
    form: 'form-submit',
    hamburger: 'hamburger',
  }

  const baseClass = variantClasses[variant] || variantClasses.primary
  const finalClass = `${baseClass}${isActive ? ' open' : ''} ${className}`.trim()

  return (
    <button
      className={finalClass}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {variant === 'hamburger' ? (
        <>
          <span />
          <span />
          <span />
        </>
      ) : (
        children
      )}
    </button>
  )
}
