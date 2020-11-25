import { colors, sizes, typography } from '../../theme'
import styled from '@emotion/styled'

export type TabsStyleProps = Record<string, unknown>

export const Container = styled.div`
  font-family: ${typography.fonts.base};
  color: ${colors.white};
`

export const TabsGroup = styled.div`
  display: flex;
`
type TabProps = {
  active: boolean
}
export const Tab = styled.div<TabProps>`
  flex-basis: content;
  padding: ${sizes(4)} ${sizes(5)};
  cursor: pointer;
  border-bottom: 3px solid ${(props) => (props.active ? colors.blue[500] : colors.gray[900])};
  min-width: ${sizes(25)};
  color: ${(props) => (props.active ? colors.white : colors.gray[200])};
  text-align: center;
  background-color: ${(props) => (props.active ? 'transparent' : '')};
`
