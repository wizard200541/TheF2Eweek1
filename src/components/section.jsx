const Section = ({ children, className = '' }) => {
  return (
    <div className={`min-w-[1440px] min-h-[100vh] ${className}`}>
      {children}
    </div>
  )
}

export default Section
