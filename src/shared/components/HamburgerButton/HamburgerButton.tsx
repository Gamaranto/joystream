import React from 'react'
import { Hamburger, HamburgerBox, HamburgerInner } from './HamburgerButton.style'

type HamburgerButtonProps = {
  active: boolean
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ active, onClick, className }) => {
  return (
    <Hamburger onClick={onClick} className={className}>
      <HamburgerBox>
        <HamburgerInner active={active} />
      </HamburgerBox>
    </Hamburger>
  )
}

export default HamburgerButton
