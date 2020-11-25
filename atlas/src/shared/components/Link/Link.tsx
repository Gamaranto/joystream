import React from 'react'
import { LinkProps } from '@reach/router'
import { RegularLink, DisabledLabel } from './Link.style'

type CustomLinkProps = {
  disabled: boolean
} & LinkProps<any>

const CustomLink: React.ForwardRefRenderFunction<HTMLAnchorElement, CustomLinkProps> = (
  { children, disabled = false, ...linkProps },
  ref
) => {
  return disabled ? (
    <DisabledLabel>{children}</DisabledLabel>
  ) : (
    <RegularLink ref={ref as any} {...linkProps}>
      {children}
    </RegularLink>
  )
}

export default React.forwardRef(CustomLink)
