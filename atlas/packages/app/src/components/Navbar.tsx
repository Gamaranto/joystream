import React, { useState } from 'react'
import styled from '@emotion/styled'
import { animated, useSpring } from 'react-spring'
import { ReactComponent as UnstyledLogo } from '../assets/logo.svg'
import { Searchbar, Icon } from '@/shared/components'
import { colors } from '@/shared/theme'
import { navigate, Link, RouteComponentProps } from '@reach/router'

const Header = styled.header<{ isSearching: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.isSearching ? `134px 1fr 134px` : `repeat(3, 1fr)`)};
  grid-template-areas: ${(props) => (props.isSearching ? `". searchbar cancel"` : `"navigation searchbar ."`)};
  width: 100%;
  padding: ${(props) => (props.isSearching ? '8px' : '12px 32px')};
  border-bottom: 1px solid ${colors.gray[800]};
  background-color: ${(props) => (props.isSearching ? colors.gray[900] : colors.black)};
`

const Logo = styled(UnstyledLogo)`
  width: 48px;
  height: 48px;
`

const NavigationContainer = styled.div`
  display: flex;
  grid-area: navigation;
  align-items: center;
  > * + * {
    margin-left: 24px;
  }
`

const StyledSearchbar = styled(Searchbar)`
  width: 100%;
  grid-area: searchbar;
`

const StyledIcon = styled(Icon)`
  color: ${colors.gray[600]};
  &:hover {
    color: ${colors.white};
    cursor: pointer;
  }
`

const CancelButton = styled.div`
  width: 48px;
  height: 48px;
  color: ${colors.white};
  grid-area: cancel;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: end;
  :hover {
    cursor: pointer;
  }
`

const Navbar: React.FC<RouteComponentProps> = ({ location }) => {
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(Boolean(search.trim()))

  const [props, set] = useSpring(() => ({
    width: `385px`,
  }))
  return (
    <Header isSearching={isSearching}>
      {!isSearching && (
        <NavigationContainer>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/">
            <StyledIcon icon="home" />
          </Link>
          <Link to="/discover">
            <StyledIcon icon="binocular" />
          </Link>
        </NavigationContainer>
      )}

      <StyledSearchbar
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.currentTarget.value)
        }}
        value={search}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || (e.key === 'NumpadEnter' && search.trim() !== '')) {
            navigate(`/search/${search}`)
          }
        }}
        onFocus={() => {
          setIsSearching(true)
          set({
            width: `1024px`,
          })
        }}
        onBlur={() => {
          set({
            width: `385px`,
          })
        }}
      />
      {isSearching && (
        <CancelButton
          onClick={() => {
            setSearch('')
            setIsSearching(false)
          }}
        >
          <Icon icon="times" />
        </CancelButton>
      )}
    </Header>
  )
}

export default Navbar
