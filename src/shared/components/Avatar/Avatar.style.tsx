import styled from '@emotion/styled'
import { colors, sizes, typography } from '../../theme'

export type AvatarStyleProps = {
  size: 'small' | 'default' | 'large'
}
export const Container = styled.div<AvatarStyleProps>`
  border-radius: 999px;
  min-width: ${(props) => (props.size === 'small' ? sizes(2) : props.size === 'default' ? sizes(4) : sizes(6))};
  background-color: ${colors.gray[400]};
  color: ${colors.white};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > span {
    text-transform: uppercase;
    font-size: ${typography.sizes.body2};
  }
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 999px;
`
