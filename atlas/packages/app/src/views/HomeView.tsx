import { css } from '@emotion/core'
import React from 'react'
import { ChannelGallery, Hero, Main, SeriesGallery, TagsGallery, VideoGallery } from '@/components'
import { RouteComponentProps } from '@reach/router'

const backgroundImg = 'https://source.unsplash.com/user/erondu/1600x900'

const HomeView: React.FC<RouteComponentProps> = () => (
	<>
		<Hero backgroundImg={backgroundImg} />
		<Main
			containerCss={css`
				margin: 1rem 0;
				& > * {
					margin-bottom: 3rem;
				}
			`}
		>
			<VideoGallery title="Continue Watching" />
			<VideoGallery title="Top Trending Videos" action="See All" />
			<SeriesGallery title="Top Trending Series" />
			<VideoGallery title="Featured Videos" action="See All" />
			<TagsGallery title="Top Categories" />
			<ChannelGallery title="Trending Channels" />
			<VideoGallery title="Top Trending Playlist" />
			<VideoGallery title="Newest Videos" action="See All" />
		</Main>
	</>
)

export default HomeView
