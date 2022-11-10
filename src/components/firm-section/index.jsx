import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ReactComponent as BlockStudioLogo } from '@/assets/blockstudio-logo.svg';
import { ReactComponent as DottedSignLogo } from '@/assets/dottedSign-logo.svg';
import { ReactComponent as JiraLogo } from '@/assets/jira-logo.svg';
import { ReactComponent as KdanLogo } from '@/assets/kdan-logo.svg';
import { ReactComponent as MiroLogo } from '@/assets/miro-logo.svg';
import { ReactComponent as TitanLogo } from '@/assets/titan-logo.svg';
import { ReactComponent as Diamondlg } from '@/assets/diamond-lg.svg';
import { ReactComponent as Diamondmd } from '@/assets/diamond-md.svg';
import { ReactComponent as Diamondsm } from '@/assets/diamond-sm.svg';
import { motion, AnimatePresence } from "framer-motion";

function getRandom(x){
  return Math.floor(Math.random()*x);
};

const FirmBlock = ({ title, firmLogos }) => {
  return (
    <div className="mb-[50px] flex flex-col justify-center items-center">
      <div className="text-h4 sm:text-h1 text-white mb-[50px]">{title}</div>
      <div className="flex gap-[17px] sm:gap-[36px] md:gap-[31px]">
        {
          firmLogos.map((logo, idx) => {
            return (
              <div key={`firmlogo_${idx}`} className="w-[202px] h-[202px] sm:w-[432px] sm:h-[432px] md:w-[374px] md:h-[374px] bg-white flex justify-center items-center p-[5%]">
                {logo}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
const FirmSection = () => {
  const container = useRef();
  console.log(window.innerHeight, window.innerWidth)
  return (
    <div ref={container} className="w-full bg-primary py-[100px] px-[35px] relative">
      <FirmBlock
        title={<span><span className="text-yellow">鑽石級</span>贊助商</span>}
        firmLogos={[
          <BlockStudioLogo className="w-full h-auto"/>,
          <TitanLogo className="w-full h-auto"/>,
          <KdanLogo className="w-full h-auto"/>,
        ]}
      />
      <FirmBlock
        title={"共同推廣"}
        firmLogos={[
          <JiraLogo className="w-full h-auto"/>,
          <MiroLogo className="w-full h-auto"/>,
          <DottedSignLogo className="w-full h-auto"/>,
        ]}
      />
      {/* <motion.div
        animate={{
          left: window.innerWidth,
          position: 'absolute',
        }}
        style={{
          top: getRandom(window.innerHeight),
          left: 0,
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Diamondlg/>
      </motion.div> */}
    </div>
  )
}

export default FirmSection
