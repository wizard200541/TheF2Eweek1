import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import Button from "../button";
import { motion, AnimatePresence } from "framer-motion";

const qaData = [
  {
    type: '一般常見問答',
    qaList: [
      {
        q: "如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？",
        a: "可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。",
      },
      {
        q: "大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品",
        a: "這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。",
      },
      {
        q: "我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？",
        a: "主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。",
      },
      {
        q: "我已經寫到一半了，但時間快來不及，可以先投稿嗎？",
        a: "可以，有投稿表示你還會持續努力在這次活動上。",
      },
    ]
  },
  {
    type: 'UI 設計師',
    qaList: [
      {
        q: "到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。",
        a: "其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。",
      },
      {
        q: "投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？",
        a: "會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。",
      },
      {
        q: "一定要上傳「線上標示文件」嗎？",
        a: "是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。",
      },
      {
        q: "不能使用 PS、Illustrator 設計嗎？",
        a: "只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。",
      },
      {
        q: "當每週一題目出來後，我有一些設計進度也可以先投稿嗎？",
        a: "可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。",
      },
    ],
  },
  {
    type: '前端工程師',
    qaList: [
      {
        q: "我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端",
        a: "可以，The F2E 活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS 也可以用框架，例如 Bootstrap。",
      },
      {
        q: "前端介面一定要長得一模一樣嗎？",
        a: "不用，依照自己的想法來開發也可以",
      },
      {
        q: "有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好",
        a: "這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout 反而會更花時間。",
      },
      {
        q: "那我只想要練習 JS，HTML/CSS 我用陽春版，不依照設計稿開發可以嗎？",
        a: "可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。",
      },
    ],
  },
  {
    type: '團體組',
    qaList: [
      {
        q: "請問團體組最多幾人？",
        a: "最多 4 人，投稿作品時請派一位組長來投稿即可。",
      },
      {
        q: "我對獎項有興趣，可以只做第三道主題就好嗎？",
        a: "可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。",
      },
      {
        q: "那團體組第三道主題最晚投稿期限為？",
        a: "團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為 11/28(一) 中午 12 點。",
      },
      {
        q: "我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？",
        a: "您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。",
      },
      {
        q: "請問除了前端開發、UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？",
        a: "可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個 API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API 也是可以的。",
      },
      {
        q: "團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？",
        a: "不能，預設是不能讓『個人組-前端工程師』採用。",
      },
    ],
  },
]

const QASection = () => {
  const [current, setCurrent] = useState(0)
  return (
    <div className="w-full min-h-[100vh] bg-black">
      <div className="w-full h-[140px] bg-primary flex justify-center items-center text-[56px] leading-[65px] text-white">常見問答</div>
      <div className="flex flex-col items-center mb-[200px]">
        <div className="h-[225px] flex justify-center items-center gap-5">
          {
            qaData.map((data, idx) => {
              return (
                <Button key={`qatitle_${idx}`} className="min-w-[328px]" active={current === idx} onClick={() => setCurrent(idx)}>{data.type}</Button>
              )
            })
          }
        </div>
        <AnimatePresence exitBeforeEnter>
        <div className="w-[1370px] mb-[170px]">
          {
            qaData[current].qaList.map((qa, idx) => {
              return (
                <motion.div
                  key={`qa_${current}-${idx}`}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                >
                  <div className="text-[24px] leading-[36px] mb-[80px]">
                    <div className="text-tertiary">Q：{qa.q}</div>
                    <div className="text-white">A：{qa.a}</div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
        </AnimatePresence>
        <Button className="min-w-[1370px] h-[140px] text-[72px]" >立即註冊報名</Button>
      </div>
    </div>
  )
}

export default QASection
