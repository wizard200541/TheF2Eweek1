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
import { motion, AnimatePresence, useInView } from "framer-motion";

function getRandom(x, excludes = []){
  let num = Math.floor(Math.random()*x);
  while (excludes.includes(num) && num === 0) {
    num = Math.floor(Math.random()*x)
  }
  return num;
};

function removeItem(arr, item) {
  const index = arr.indexOf(item);
  if (index > -1) arr.splice(index, 1);
}


const FirmBlock = ({ title, firmLogos }) => {
  return (
    <div className="mb-[50px] flex flex-col justify-center items-center">
      <div className="text-h4 md:text-h1 text-white mb-[50px]">{title}</div>
      <div className="flex gap-[17px] md:gap-[36px] lg:gap-[31px]">
        {
          firmLogos.map((logo, idx) => {
            return (
              <div key={`firmlogo_${idx}`} className="w-[202px] h-[202px] md:w-[432px] md:h-[432px] lg:w-[374px] lg:h-[374px] bg-white flex justify-center items-center p-[5%] relative">
                <div className="z-20 bg-white absolute w-full h-full">
                </div>
                {logo}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const FloatingDiamonds = ({ quantity, height, width, size = 'sm', start }) => {
  if (height <= 0 || !start) {
    return <></>
  }
  const speed = size === 'sm' ? 3 : size === 'md' ? 5 : size === 'lg' ? 8 : 3;
  const zIndex = size === 'sm' ? 10 : size === 'md' ? 30 : size === 'lg' ? 50 : 10;

  const [items, setItems] = useState(new Array(quantity).fill().map(() => getRandom(height)))
  return (
    <AnimatePresence mode={"popLayout"}>
      {items.map((y, idx) => (
        <motion.div
          layout
          key={`${size}-${y}`}
          animate={{
            x: width + 50,
          }}
          initial={{ x: '-100%', y }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex,
          }}
          onAnimationComplete={() => {
            const newItems = [...items, getRandom(height, items)];
            removeItem(newItems, y);
            setItems(newItems);
          }}
          transition={{ ease: "linear", duration: speed, delay: Math.random() * (idx + 1) }}
        >
          { size === 'lg' && <Diamondlg /> }
          { size === 'md' && <Diamondmd /> }
          { size === 'sm' && <Diamondsm /> }
        </motion.div>
      ))}
    </AnimatePresence>
  )
}
const FirmSection = () => {
  const container = useRef();
  const isInView = useInView(container)
  const [height, setHeight] = useState(null);
  useEffect(() => {
    setHeight(container.current.offsetHeight);
  }, []);

  return (
    <div ref={container} className="w-full bg-primary py-[100px] px-[35px] relative overflow-hidden">
      <FirmBlock
        title={<span><span className="text-yellow">鑽石級</span>贊助商</span>}
        firmLogos={[
          <BlockStudioLogo className="w-full h-auto z-40"/>,
          <TitanLogo className="w-full h-auto z-40"/>,
          <KdanLogo className="w-full h-auto z-40"/>,
        ]}
      />
      <FirmBlock
        title={"共同推廣"}
        firmLogos={[
          <JiraLogo className="w-full h-auto z-40"/>,
          <MiroLogo className="w-full h-auto z-40"/>,
          <DottedSignLogo className="w-full h-auto z-40"/>,
        ]}
      />
      <FloatingDiamonds
        start={isInView}
        size={'lg'}
        quantity={4}
        width={window.innerWidth}
        height={height}
      />
      <FloatingDiamonds
        start={isInView}
        size={'md'}
        quantity={6}
        width={window.innerWidth}
        height={height}
      />
      <FloatingDiamonds
        start={isInView}
        size={'sm'}
        quantity={8}
        width={window.innerWidth}
        height={height}
      />
    </div>
  )
}

export default FirmSection
