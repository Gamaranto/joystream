import React from 'react'
import styled from '@emotion/styled'

import { VideoFields } from '@/api/queries/__generated__/VideoFields'
import { Button } from '@/shared/components'
import { formatNumber } from '@/utils/number'
import { formatDate } from '@/utils/time'
import { colors } from '@/shared/theme'

type BestVideoMatchProps = {
  video: VideoFields
  onClick: (e: React.MouseEvent<HTMLImageElement>) => void
}
const Container = styled.div`
  color: ${colors.gray[300]};
  padding-right: 2rem;
`
const Header = styled.h3``
const Content = styled.div`
  display: grid;
  grid-template-columns: 650px 1fr;
  grid-column-gap: 24px;
`
const Poster = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  object-position: center;

  :hover {
    cursor: pointer;
  }
`
const TitleContainer = styled.div`
  max-width: 500px;
`
const Title = styled.h1`
  font-size: 40px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 12px;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.875rem 0;
`
const ButtonsGroup = styled.div`
  display: flex;

  button:first-of-type {
    margin-right: 16px;
  }

  button:nth-of-type(2) {
    margin-right: 8px;
  }
`

const BestVideoMatch: React.FC<BestVideoMatchProps> = ({
  video: { thumbnailURL, title, views, publishedOnJoystreamAt },
  onClick,
}) => (
  <Container>
    <Header>Best Match</Header>
    <Content>
      <Poster src={thumbnailURL} onClick={onClick} />
      <InnerContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <span>
            {formatNumber(views)} views • {formatDate(publishedOnJoystreamAt)}
          </span>
        </TitleContainer>
        <ButtonsGroup>
          <Button variant="secondary">Share</Button>
          <Button icon="block" />
          <Button icon="block" variant="secondary" />
        </ButtonsGroup>
      </InnerContainer>
    </Content>
  </Container>
)
export default BestVideoMatch
