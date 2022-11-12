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
      <div className="h-[56px] max-w-[1440px] pr-[35px] flex justify-end items-center gap-[30px] m-auto">
        {children}
      </div>
    </div>
  )
}
const SubHeader = ({ children }) => {
  return (
    <div>
      <div className="h-[90px] max-w-[1440px] px-[55px] flex justify-between items-center text-h6 md:text-h4 text-white m-auto">
        {children}
      </div>
    </div>
  )
}

const Content = (props) => {
  return <div {...props} className="flex flex-col items-center text-white" />
}

const TankTop = () => {
  return <TankTopIcon className="absolute left-[-42px] -translate-x-full"/>
}

const LoginAction = ({ children, selected, ...rest}) => {
  return (
    <button
      {...rest}
      className={`text-h4 md:text-h3 relative text-left ${selected ? 'animate-blink' : ''}`}
    >
      {selected && <TankTop/>}
      {children}
    </button>
  )
}

const MainSection = () => {
  const [selected, setSelected] = useState(null)
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
        <Navigation
          navItems={[
            {
              name: '關卡資訊',
              path: '/',
            },
            {
              name: '攻略資源',
              path: '/',
            },
            {
              name: '求職專區',
              path: '/',
            },
          ]}
        />
        <ButtonGroup>
          <Button className="min-w-[104px] h-[35px] text-[16px]">註冊報名</Button>
          <Button className="min-w-[104px] h-[35px] text-[16px]">登入</Button>
        </ButtonGroup>
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
            >
              1&nbsp;LOG IN
            </LoginAction>
            <LoginAction
              data-action="2"
              selected={selected === '2'}
              onMouseEnter={onMouseHover}
            >
              2&nbsp;SIGN UP
            </LoginAction>
          </div>
          <div className="my-[79px] text-h6 md:text-h4">
            Interactive And Responsive Web Design.
          </div>
        </Content>
      </animated.div>
    </Section>
  )
}

export default MainSection
