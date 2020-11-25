import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { typography, colors } from '../../theme'

export const RegularLink = styled(Link)`
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.overhead};
  color: ${colors.blue[400]};
  text-decoration: none;
  cursor: pointer;
`

export const DisabledLabel = styled.label`
  font-family: ${typography.fonts.base};
  font-size: ${typography.sizes.overhead};
  color: ${colors.gray[200]};
  text-decoration: none;
  cursor: not-allowed;
`
