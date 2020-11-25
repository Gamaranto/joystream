// based on https://github.com/jonsuh/hamburgers licensed under MIT
import styled from '@emotion/styled'
import { colors, sizes } from '../../theme'

type HamburgerActive = {
  active: boolean
}
export const HamburgerBox = styled.span`
  width: 18px;
  height: ${sizes(3)};
  display: inline-block;
  position: relative;
`

export const HamburgerInner = styled.span<HamburgerActive>`
  display: block;
  top: 50%;
  margin-top: -1px;
  transition-duration: 0.075s;
  transition-delay: ${(props) => (props.active ? '0.12s' : '0')};
  transition-timing-function: ${(props) =>
    props.active ? 'cubic-bezier(0.215, 0.61, 0.355, 1)' : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  transform: ${(props) => (props.active ? 'rotate(45deg)' : 'none')};

  &,
  ::before,
  ::after {
    width: 18px;
    height: 2px;
    background-color: ${colors.white};
    position: absolute;
  }
  ::before,
  ::after {
    content: '';
    display: block;
  }
  ::before {
    top: ${(props) => (props.active ? 0 : -5)}px;
    opacity: ${(props) => (props.active ? 0 : 1)};
    transition: ${(props) =>
      props.active ? 'top 0.075s ease, opacity 0.075s 0.12s ease' : 'top 0.075s 0.12s ease, opacity 0.075s ease'};
  }
  ::after {
    bottom: ${(props) => (props.active ? 0 : -5)}px;
    transform: ${(props) => (props.active ? 'rotate(-90deg)' : 'none')};
    transition: ${(props) =>
      props.active
        ? 'bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)'
        : 'bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
  }
`

export const Hamburger = styled.div`
  padding: 3px;
  display: inline-block;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
