import React, { useState } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import useResizeObserver from 'use-resize-observer'

import {
  EXPANDED_SIDENAV_WIDTH,
  NavItemsWrapper,
  SIDENAV_WIDTH,
  Nav,
  DrawerOverlay,
  NavItemContainer,
  Item,
  NavSubitem,
  NavSubitemsWrapper,
  ExpandButton,
} from './Sidenav.style'

type NavSubitemType = {
  name: string
}

type NavItemType = {
  subitems?: NavSubitemType[]
  icon: React.ReactNode
} & NavSubitemType

type SidenavProps = {
  items: NavItemType[]
}

const AnimatedNav = animated(Nav)
const AnimatedDrawerOverlay = animated(DrawerOverlay)
const AnimatedNavSubitemsWrapper = animated(NavSubitemsWrapper)

const Sidenav: React.FC<SidenavProps> = ({ items }) => {
  const [expanded, setExpanded] = useState(false)

  const containerAnimationStyles = useSpring({
    from: { width: SIDENAV_WIDTH },
    width: expanded ? EXPANDED_SIDENAV_WIDTH : SIDENAV_WIDTH,
  })
  const overlayTransitions = useTransition(expanded, null, {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'block' },
    leave: { opacity: 0 },
  })

  return (
    <>
      <AnimatedNav style={containerAnimationStyles}>
        <ExpandButton active={expanded} onClick={() => setExpanded(!expanded)} />
        <NavItemsWrapper>
          {items.map((item) => (
            <NavItem key={item.name} expanded={expanded} subitems={item.subitems}>
              {item.icon}
              <span>{item.name}</span>
            </NavItem>
          ))}
        </NavItemsWrapper>
      </AnimatedNav>
      {overlayTransitions.map(
        ({ item, key, props }) =>
          item && <AnimatedDrawerOverlay key={key} style={props} onClick={() => setExpanded(false)} />
      )}
    </>
  )
}

type NavItemProps = {
  subitems?: NavSubitemType[]
  expanded: boolean
}

const NavItem: React.FC<NavItemProps> = ({ expanded, subitems, children }) => {
  const { height: subitemsHeight, ref: subitemsRef } = useResizeObserver<HTMLDivElement>()
  const subitemsAnimationStyles = useSpring({ height: expanded ? subitemsHeight || 0 : 0 })

  return (
    <NavItemContainer>
      <Item>{children}</Item>
      {subitems && (
        <AnimatedNavSubitemsWrapper style={subitemsAnimationStyles}>
          <div ref={subitemsRef}>
            {subitems.map((item) => (
              <NavSubitem key={item.name}>{item.name}</NavSubitem>
            ))}
          </div>
        </AnimatedNavSubitemsWrapper>
      )}
    </NavItemContainer>
  )
}

export { Sidenav as default, NavItem }
