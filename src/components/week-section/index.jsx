import { useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";

const WeekSection = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useLayoutEffect(() => {
    const totalPanels = panels.current.length;

    let to = gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current.offsetWidth
      }
    });

    return () => {
      to.kill();
    };
  });

  return (
    <div ref={panelsContainer} className="test w-[300%] h-[100vh] flex flex-nowrap">
      <div ref={(e) => createPanelsRefs(e, 0)} className="sub relative w-full h-full bg-primary">1111</div>
      <div ref={(e) => createPanelsRefs(e, 1)} className="sub relative w-full h-full bg-[#76B9D6]">2222</div>
      <div ref={(e) => createPanelsRefs(e, 2)} className="sub relative w-full h-full bg-[#215400]">3333</div>
    </div>
  )
}

export default WeekSection
