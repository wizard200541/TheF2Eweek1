import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { ReactComponent as TankDialog } from '@/assets/tank-dialog.svg';
import { ReactComponent as SeniorSoldier } from '@/assets/senior-soldier.svg';
import { ReactComponent as SeniorSoldierDialog } from '@/assets/senior-soldier-dialog.svg';
import { ReactComponent as JuniorSoldier } from '@/assets/junior-soldier.svg';
import { ReactComponent as Tree } from '@/assets/tree.svg';
import windowPic from '@/assets/window.gif';
import tankRightPic from '@/assets/tank-right.gif';
import Section from '../section'

const IntroItem = ({ children, alignRight }) => {
  return (
    <div className={`py-[121.5px] flex ${alignRight ? 'justify-end' : 'justify-start' }`}>
      <div className="h-[570px] w-[980px] bg-primary relative flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

const IntroSection = () => {
  return (
    <Section className="bg-black relative overflow-hidden pt-[124.5px] pb-[328.5px] text-[36px]">
      <IntroItem>
        <img className="absolute" src={windowPic} width={637} height={429}/>
        <img className="absolute" src={tankRightPic} width={336} height={135}/>
        <div className="absolute right-[9px] top-[-35px]">
          <TankDialog />
          <div className="absolute left-1/2 -translate-x-1/2 top-[30px]">I'm cool !</div>
        </div>
        <div className="absolute text-white right-[-210px] bottom-[264px] text-stroke">羨慕別人的酷酷網頁動畫...</div>
      </IntroItem>
      <IntroItem alignRight>
        <SeniorSoldier className="absolute left-[220px] bottom-0" />
        <div className="absolute left-[-60px] top-[-74px]">
          <SeniorSoldierDialog/>
          <div className="absolute left-1/2 -translate-x-1/2 top-[90px]">!@#$%...</div>
        </div>
        <div className="absolute text-white left-[-180px] text-stroke">滿足不了同事的許願...</div>
      </IntroItem>
      <IntroItem>
        <Tree className="absolute right-[100px] bottom-0" />
        <JuniorSoldier className="absolute right-[400px] bottom-0" />
        <div className="absolute right-[-210px] bottom-[120px] text-white text-stroke">動畫技能樹太雜無從下手...</div>
      </IntroItem>
    </Section>
  )
}

export default IntroSection
