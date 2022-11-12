const Section = ({ children, className = '' }) => {
  return (
    <div className={`min-h-[100vh] ${className}`}>
      {children}
    </div>
  )
}

export default Section
