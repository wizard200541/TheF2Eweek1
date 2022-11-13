import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Section from '../section'
import { ReactComponent as BrandLogo } from '@/assets/brand-logo.svg';
import { ReactComponent as BannerLogo } from '@/assets/banner-logo.svg';
import { ReactComponent as TankTopIcon } from '@/assets/tank-top.svg';
import Button from '../button';

const ButtonGroup = (props) => {
  return <div className="flex gap-2.5" {...props} />
}

const Navigation = ({ navItems }) => {
  return (
    <div className="flex gap-[30px]">
      {
        navItems.map((nav, idx) => {
          return <a key={`nav_${idx}`} href={nav.path}>{nav.name}</a>
        })
      }
    </div>
  )
} 
const Header = ({ children }) => {
  return (
    <div className=" bg-primary text-secondary">
      <div className="h-[56px] max-w-[1440px] px-[35px] flex justify-between sm:justify-end items-center gap-[30px] m-auto">
        {children}
      </div>
    </div>
  )
}
const SubHeader = ({ children }) => {
  return (
    <div>
      <div className="h-[90px] max-w-[1440px] px-[55px] flex justify-between items-center text-h7 sm:text-h6 md:text-h4 text-white m-auto">
        {children}
      </div>
    </div>
  )
}

const Content = (props) => {
  return <div {...props} className="flex flex-col items-center text-white" />
}

const TankTop = () => {
  return <TankTopIcon className="absolute left-[-14px] sm:left-[-28px] md:left-[-42px] -translate-x-full w-auto h-[36px] sm:h-[54px] md:h-[63px]"/>
}

const LoginAction = ({ children, selected, ...rest}) => {
  return (
    <button
      {...rest}
      className={`text-h6 sm:text-h4 md:text-h3 relative text-left ${selected ? 'animate-blink' : ''}`}
    >
      {selected && <TankTop/>}
      {children}
    </button>
  )
}

const MainSection = () => {
  const [selected, setSelected] = useState(null)
  const [showNav, setShowNav] = useState(false)
  const springs = useSpring({
    config: {
      duration: 4000,
    },
    from: { y: '100%' },
    to: { y: '0%' },
    onRest: () => setSelected('1'),
  })

  const onMouseHover = (e) => {
    const { dataset } = e.currentTarget;
    if (dataset?.action) {
      setSelected(dataset?.action);
    }
  }

  return (
    <Section className="bg-black relative overflow-hidden">
      <Header>
        <BrandLogo/>
        <div className="hidden sm:flex justify-end items-center gap-[30px]">
          <Navigation
            navItems={[
              {
                name: '關卡資訊',
                path: 'https://2022.thef2e.com/news',
              },
              {
                name: '攻略資源',
                path: 'https://hexschool.tw/OsAcp',
              },
              {
                name: '求職專區',
                path: 'https://2022.thef2e.com/jobs',
              },
            ]}
          />
          <ButtonGroup>
            <Button className="min-w-[104px] h-[35px] text-[16px]" onClick={() => window.location = "https://2022.thef2e.com/"}>註冊報名</Button>
            <Button className="min-w-[104px] h-[35px] text-[16px]" onClick={() => window.location = "https://2022.thef2e.com/login"}>登入</Button>
          </ButtonGroup>
        </div>
        <div className="relative sm:hidden">
          <Button className="min-w-[50px]" onClick={() => setShowNav(prev => !prev)}>{showNav ? 'Close' : 'Open'}</Button>
        </div>
        {
          showNav &&
          <div className="absolute sm:hidden bg-white w-full left-0 top-[56px] text-center flex flex-col">
            <a href="https://2022.thef2e.com/news" className="py-2 border-lightgrey border-b-[1px]">關卡資訊</a>
            <a href="https://hexschool.tw/OsAcp" className="py-2 border-lightgrey border-b-[1px]">攻略資源</a>
            <a href="https://2022.thef2e.com/jobs" className="py-2 border-lightgrey border-b-[1px]">求職專區</a>
            <a href="https://2022.thef2e.com/" className="py-2 border-lightgrey border-b-[1px]">註冊報名</a>
            <a href="https://2022.thef2e.com/login" className="py-2">登入</a>
          </div>
        }
      </Header>
      <animated.div style={springs}>
        <SubHeader>
          <div>I-&nbsp;&nbsp;&nbsp;00</div>
          <div>HI- 99999</div>
          <div>Hex School</div>
        </SubHeader>
        <Content>
          <BannerLogo className="my-[89px] h-auto w-[76%]"/>
          <div className="my-[24px] text-[42px] flex flex-col gap-6">
            <LoginAction
              data-action="1"
              selected={selected === '1'}
              onMouseEnter={onMouseHover}
              onClick={() => window.location = "https://2022.thef2e.com/login"}
            >
              1&nbsp;LOG IN
            </LoginAction>
            <LoginAction
              data-action="2"
              selected={selected === '2'}
              onMouseEnter={onMouseHover}
              onClick={() => window.location = "https://2022.thef2e.com/"}
            >
              2&nbsp;SIGN UP
            </LoginAction>
          </div>
          <div className="my-[79px] text-h9 sm:text-h6 md:text-h4">
            Interactive And Responsive Web Design.
          </div>
        </Content>
      </animated.div>
    </Section>
  )
}

export default MainSection
