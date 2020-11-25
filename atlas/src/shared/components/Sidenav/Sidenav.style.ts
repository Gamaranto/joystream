import styled from '@emotion/styled'
import { colors, sizes, typography } from '../../theme'
import HamburgerButton from '../HamburgerButton'

export const SIDENAV_WIDTH = 56
export const EXPANDED_SIDENAV_WIDTH = 360

type SidenavStyleProps = {
  expanded?: boolean
}

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  overflow: hidden;
  padding: ${sizes(8)} ${sizes(4)};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.blue[700]};
  color: ${colors.white};
`

export const ExpandButton = styled(HamburgerButton)`
  padding: -7px;
  margin: -4px;
`

export const DrawerOverlay = styled.div<SidenavStyleProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  display: ${(props) => (props.expanded ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
`

export const NavItemsWrapper = styled.div`
  margin-top: 90px;
`

export const NavItemContainer = styled.div`
  :not(:first-child) {
    margin-top: ${sizes(10)};
  }
  display: flex;
  flex-direction: column;
`

export const Item = styled.a`
  display: flex;
  align-items: center;
  > span {
    margin-left: ${sizes(8)};
    font-weight: bold;
    font-family: ${typography.fonts.headers};
    font-size: ${typography.sizes.h5};
    line-height: 1;
  }
`

export const NavSubitemsWrapper = styled.div`
  padding-left: calc(${typography.sizes.icon.xlarge}+ ${sizes(8)});
  overflow: hidden;
  > div {
    display: flex;
    flex-direction: column;
  }
`

export const NavSubitem = styled.a`
  font-size: ${typography.sizes.body2};
  font-family: ${typography.fonts.base};
  margin-top: ${sizes(8)};
  :first-child {
    margin-top: ${sizes(6)};
  }
`
