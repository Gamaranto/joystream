import React, { useCallback, useState } from 'react'
import { css, SerializedStyles } from '@emotion/core'
import { gql, useQuery } from '@apollo/client'

import { Gallery, VideoPreview } from '@/shared/components'

type VideoGalleryProps = {
	title: string
	action: string
}

const FETCH_VIDEO_PREVIEWS = gql`
	query FetchVideoPreviews {
		videos {
			id
			publishedOnJoystreamAtTimeStamp
			views
			thumbnailURL
			publishedBy {
				handle
				avatarPhotoURL
			}
		}
	}
`

const articleStyles = css`
	max-width: 320px;
	margin-right: 1.25rem;
`

const VideoGallery: React.FC<Partial<VideoGalleryProps>> = ({ title, action }) => {
	const { loading, error, data } = useQuery(FETCH_VIDEO_PREVIEWS)
	console.log('data', data)
	const [controlsTop, setControlsTop] = useState<SerializedStyles>(css``)

	const CAROUSEL_WHEEL_HEIGHT = 48
	const imgRef = useCallback((node: HTMLImageElement) => {
		if (node != null) {
			setControlsTop(css`
				top: calc(${Math.round(node.clientHeight) / 2}px - ${CAROUSEL_WHEEL_HEIGHT / 2}px);
			`)
		}
	}, [])

	if (loading) return <div>Loading...</div>
	if (error) return <div>Error... {error.message}</div>
	return (
		<Gallery title={title} action={action} leftControlCss={controlsTop} rightControlCss={controlsTop}>
			{data.videos.map((video: any, idx: number) => (
				<article css={articleStyles} key={video.id}>
					<VideoPreview
						title={video.title}
						channel={video.publishedBy.handle}
						channelImg={video.publishedBy.avatarPhotoURL}
						showChannel={video.showChannel}
						views={video.views}
						createdAt={video.publishedOnJoystreamAtTimeStamp}
						imgRef={idx === 0 ? imgRef : null}
						poster={video.thumbnailURL}
						showMeta={true}
					/>
				</article>
			))}
		</Gallery>
	)
}

export default VideoGallery
