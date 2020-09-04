import React, { useState } from 'react'
import { css } from '@emotion/core'
import { RouteComponentProps, navigate } from '@reach/router'
import { useQuery } from '@apollo/client'

import { SEARCH } from '@/api/queries'
import { Search, SearchVariables } from '@/api/queries/__generated__/Search'
import { TabsMenu } from '@/shared/components'
import { Main, VideoGallery, ChannelGallery, VideoBestMatch } from '@/components'
import routes from '@/config/routes'

type SearchViewProps = {
  search?: string
} & RouteComponentProps
const tabs = ['all results', 'videos', 'channels']
const SearchView: React.FC<SearchViewProps> = ({ search = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const { data, loading } = useQuery<Search, SearchVariables>(SEARCH, { variables: { query_string: search } })

  if (loading || !data) {
    return <p>Loading...</p>
  }
  if (!data.search) {
    return <p>Something went wrong...</p>
  }

  const results = data.search.slice().sort((a, b) => a.rank - b.rank)
  const [bestMatch, ...videos] = results.flatMap((result) => (result.item.__typename === 'Video' ? [result.item] : []))
  const channels = results.flatMap((result) => (result.item.__typename === 'Channel' ? [result.item] : []))
  return (
    <Main
      containerCss={css`
        margin: 1rem 0;
        & > * {
          margin-bottom: 3rem;
        }
      `}
    >
      <TabsMenu tabs={tabs} onSelectTab={setSelectedIndex} initialIndex={0} />
      {bestMatch && <VideoBestMatch video={bestMatch} onClick={() => navigate(routes.video(bestMatch.id))} />}
      {videos.length > 0 && (selectedIndex === 0 || selectedIndex === 1) && (
        <VideoGallery title="Videos" action="See all" loading={loading} videos={videos} />
      )}
      {channels.length > 0 && (selectedIndex === 0 || selectedIndex === 2) && (
        <ChannelGallery title="Channels" action="See all" loading={loading} channels={channels} />
      )}
    </Main>
  )
}

export default SearchView
