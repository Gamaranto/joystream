import React from 'react'
import { css } from '@emotion/core'
import { useQuery, gql } from '@apollo/client'
import { ChannelPreview, Gallery } from '@/shared/components'

const FETCH_CHANNELS_PREVIEWS = gql`
	query FetchChannelsPreview {
		channels {
			id
			handle
			avatarPhotoURL
		}
	}
`

type ChannelGalleryProps = {
	title: string
	action: string
}

const ChannelGallery: React.FC<Partial<ChannelGalleryProps>> = ({ title, action }) => {
	const { loading, error, data } = useQuery(FETCH_CHANNELS_PREVIEWS)
	if (loading) return <div>Loading...</div>
	if (error) return <div> Error! {error.message}</div>
	return (
		<Gallery title={title} action={action}>
			{data.channels.map((chan: any) => (
				<ChannelPreview
					channel={chan.handle}
					channelAvatar={chan.avatarPhotoURL}
					key={chan.id}
					views={chan.views}
					outerContainerCss={css`
						margin-right: 1.5rem;
					`}
				/>
			))}
		</Gallery>
	)
}

export default ChannelGallery
