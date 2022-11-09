

const AwardSection = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-black flex flex-col items-center justify-center text-white pt-[138px] pb-[534px]">
      <div className="min-w-[600px] mb-[223px]">
        <div className="text-[56px] leading-[65px] mb-[40px] text-tertiary">評審機制</div>
        <div className="text-[24px] leading-[36px]">
          初選：<br/>
          將由六角學院前端、UI 評審進行第一波篩選，<br/>
          並於 12/5（五）公布初選佳作名單<br/>
          <br/>
          決選：<br/>
          由三大企業針對該企業主題進行入圍獎最後篩選，<br/>
          並於 12/23（五）公布企業得獎名單<br/>
        </div>
      </div>
      <div className="min-w-[600px]">
        <div className="text-[56px] leading-[65px] mb-[40px] text-tertiary">獎項</div>
        <div className="text-[24px] leading-[36px] h-[432px] flex flex-col justify-between">
          <div className="relative text-[36px] leading-[54px] left-[31px] before:contents-[' '] before:absolute before:h-3 before:w-3 before:bg-white before:left-[-31px] before:top-[17px]">
            初選佳作 共六十位 <span className="text-primary">數位獎狀</span>
            <div className="absolute text-[24px] leading-[36px] text-[#DCDCDC] bottom-[-30px]">每週主題個人組十位、團體組十組</div>
          </div>
          <div className="relative text-[36px] leading-[54px] left-[31px] before:contents-[' '] before:absolute before:h-3 before:w-3 before:bg-white before:left-[-31px] before:top-[17px]">
            個人企業獎 共六位 <span className="text-primary">NTD 3,000/位</span>
            <div className="absolute text-[24px] leading-[36px] text-[#DCDCDC] bottom-[-30px]">每週主題各 2 名，設計 1 位、前端 1 位</div>
          </div>
          <div className="relative text-[36px] leading-[54px] left-[31px] before:contents-[' '] before:absolute before:h-3 before:w-3 before:bg-white before:left-[-31px] before:top-[17px]">
            團體企業獎 共三組 <span className="text-primary">NTD 10,000/組</span>
            <div className="absolute text-[24px] leading-[36px] text-[#DCDCDC] bottom-[-30px]">每週主題各 1 組</div>
          </div>
          <div className="relative text-[36px] leading-[54px] left-[31px] before:contents-[' '] before:absolute before:h-3 before:w-3 before:bg-white before:left-[-31px] before:top-[17px]">
            以上皆提供完賽數位獎狀
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardSection
