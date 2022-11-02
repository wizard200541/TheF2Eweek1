import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Section from '../section'
import { ReactComponent as BrandLogo } from '@/assets/brand-logo.svg';
import { ReactComponent as BannerLogo } from '@/assets/banner-logo.svg';
import { ReactComponent as TankTopIcon } from '@/assets/tank-top.svg';

const Button = ({ children, ...rest}) => {
  return (
    <button {...rest} className="bg-white text-primary min-w-[104px] h-[35px] flex justify-center items-center">{children}</button>
  )
}

const ButtonGroup = (props) => {
  return <div className="flex gap-2.5" {...props} />
}

const Navigation = ({ navItems }) => {
  return (
    <div className="flex gap-[30px]">
      {
        navItems.map((nav) => {
          return <a href={nav.path}>{nav.name}</a>
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
      <div className="h-[90px] max-w-[1440px] px-[55px] flex justify-between items-center text-[36px] text-white m-auto">
        {children}
      </div>
    </div>
  )
}

const Content = (props) => {
  return <div {...props} className="flex flex-col items-center text-white text-[36px]" />
}

const TankTop = () => {
  return <TankTopIcon className="absolute left-[-42px] -translate-x-full"/>
}

const LoginAction = ({ children, selected, ...rest}) => {
  return (
    <button
      {...rest}
      className={`leading-[49px] relative text-left ${selected ? 'animate-blink' : ''}`}
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
          <Button>註冊報名</Button>
          <Button>登入</Button>
        </ButtonGroup>
      </Header>
      <animated.div style={springs}>
        <SubHeader>
          <div>I-&nbsp;&nbsp;&nbsp;00</div>
          <div>HI- 99999</div>
          <div>Hex School</div>
        </SubHeader>
        <Content>
          <BannerLogo className="my-[89px]"/>
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
          <div className="my-[79px] leading-[42px]">
            Interactive And Responsive Web Design.
          </div>
        </Content>
      </animated.div>
    </Section>
  )
}

export default MainSection
