import React from 'react'

import { Container, Img } from './Avatar.style'

export type AvatarProps = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  img?: string | null
  name?: string
  className?: string
  size?: 'default' | 'small' | 'large'
}

function initialsFromName(name: string): string {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const [first = '', second = ''] = name.split('')
  return vowels.includes(second) ? first : `${first}${second}`
}

const Avatar: React.FC<AvatarProps> = ({ img, onClick, name = '', className, size = 'default' }) => {
  return (
    <Container className={className} onClick={onClick} size={size}>
      {img ? <Img src={img} /> : <span>{initialsFromName(name)}</span>}
    </Container>
  )
}

export default Avatar
