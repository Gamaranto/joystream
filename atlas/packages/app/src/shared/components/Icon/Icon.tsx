import React from 'react'
import { css } from '@emotion/core'
import * as Icons from '../../icons'
import { camelCase } from 'lodash'

type IconType = Icons.IconType
type IconProps = {
  icon: IconType
} & React.SVGProps<SVGSVGElement>

const capitalize = (s: string) => s.slice(0, 1).toUpperCase() + s.slice(1)
const pascalCase = (s: string) => capitalize(camelCase(s))

const Icon: React.FC<IconProps> = ({ icon, ...svgProps }) => {
  const iconProp = pascalCase(icon) as keyof typeof Icons
  if (!Object.keys(Icons).includes(iconProp)) return null

  const iconStyles = css`
    stroke: currentColor;
    & > * {
      stroke: currentColor;
    }
  `
  const IconComponent = Icons[iconProp]

  return <IconComponent css={iconStyles} {...svgProps} />
}

export default Icon
export type { IconType }
