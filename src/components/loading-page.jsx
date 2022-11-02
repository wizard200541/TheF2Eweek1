const LoadingPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center text-white text-[36px] leading-[44px]">
      <div>
        <div className="mb-[30px] relative after:content-[' '] after:absolute after:left-[-1px] after:bg-black after:w-full after:h-full after:animate-type">Loading...</div>
        <img src={'src/assets/tank-right.gif'} width={164} height={66}/>
      </div>
    </div>
  )
}

export default LoadingPage
