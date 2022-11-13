

const AwardListItem = ({ children, remind }) => {
  return (
    <div className="relative text-h8 sm:text-h6 md:text-h4 left-[31px] before:contents-[' '] before:absolute before:h-3 before:w-3 before:bg-white before:left-[-31px] before:top-1/2 before:-translate-y-1/2">
      {children}
      { remind && <div className="absolute text-h9 sm:text-h7 md:text-h6 text-[#DCDCDC] bottom-[-30px]">{remind}</div>}
    </div>
  )
}
const AwardSection = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-black flex flex-col items-center justify-center text-white pt-[138px] pb-[202px] md:pb-[534px]">
      <div className="min-w-[100vw] sm:min-w-[400px] mb-[100px] md:min-w-[600px] md:mb-[223px]">
        <div className="text-h6 sm:text-h4 md:text-h2 mb-[40px] text-tertiary">評審機制</div>
        <div className="text-h8 sm:text-h7 md:text-h6">
          初選：<br/>
          將由六角學院前端、UI 評審進行第一波篩選，<br/>
          並於 12/5（五）公布初選佳作名單<br/>
          <br/>
          決選：<br/>
          由三大企業針對該企業主題進行入圍獎最後篩選，<br/>
          並於 12/23（五）公布企業得獎名單<br/>
        </div>
      </div>
      <div className="min-w-[100vw] sm:min-w-[400px] md:min-w-[600px]">
        <div className="text-h6 sm:text-h4 md:text-h2 mb-[40px] text-tertiary">獎項</div>
        <div className="h-[292px] sm:h-[392px] md:h-[432px] flex flex-col justify-between">
          <AwardListItem remind="每週主題個人組十位、團體組十組">
            初選佳作 共六十位 <span className="text-primary">數位獎狀</span>
          </AwardListItem>
          <AwardListItem remind="每週主題各 2 名，設計 1 位、前端 1 位">
            個人企業獎 共六位 <span className="text-primary">NTD 3,000/位</span>
          </AwardListItem>
          <AwardListItem remind="每週主題各 1 組">
            團體企業獎 共三組 <span className="text-primary">NTD 10,000/組</span>
          </AwardListItem>
          <AwardListItem>
          以上皆提供完賽數位獎狀
          </AwardListItem>
        </div>
      </div>
    </div>
  )
}

export default AwardSection
