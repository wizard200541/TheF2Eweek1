const Button = ({ children, btnClassName, className, active, ...rest}) => {
  return (
    <button
      {...rest}
      className={"group relative overflow-hidden top-1 " +
      "before:contents-[''] before:absolute before:z-10 before:w-2 before:h-[calc(100%-8px)] before:bg-tertiary before:left-[-8px] before:top-[-4px] before:skew-y-[45deg] before:transition-[top,left] in-expo " +
      "after:contents-[''] after:absolute after:w-[calc(100%-8px)] after:h-2 after:bg-tertiary after:top-[-8px] after:left-[-4px] after:skew-x-[45deg] after:transition-[top,left] in-expo " +
      "hover:before:left-0 hover:before:top-[4px] hover:after:top-0 hover:after:left-[4px] " +
      "active:before:left-[-8px] active:before:top-[-4px] active:after:top-[-8px] active:after:left-[-4px] " +
      `${active ? 'before:!left-[-8px] after:!top-[-8px] ' : ''}` +
      `${btnClassName ? btnClassName : ''}`}
    >
      <div className="flex">
        <div
          className={"relative bg-white text-primary min-w-[104px] h-[35px] text-h7 flex justify-center items-center left-0 top-0 transition-[left,top,background-color] in-expo " +
          "group-hover:left-[8px] group-hover:top-[8px] " +
          "group-active:bg-secondary group-active:left-0 group-active:top-0 " +
          "group-disabled:bg-[#DCDCDC] group-disabled:text-white " +
          `${active ? '!bg-secondary before:!w-0 after:!h-0 !left-0 !top-0 ' : ''}` +
          `${className ? className : ''}`}
        >
          {children}
        </div>
        <div className="w-2 h-2"></div>
      </div>
      <div className="w-2 h-2"></div>
    </button>
  )
}

export default Button