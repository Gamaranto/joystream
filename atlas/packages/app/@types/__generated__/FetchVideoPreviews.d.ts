/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchVideoPreviews
// ====================================================

export interface FetchVideoPreviews_videos_publishedBy {
  __typename: "Channel";
  handle: string;
  avatarPhotoURL: string | null;
}

export interface FetchVideoPreviews_videos {
  __typename: "Video";
  id: string;
  publishedOnJoystreamAtTimeStamp: string;
  views: number;
  thumbnailURL: string;
  publishedBy: FetchVideoPreviews_videos_publishedBy;
}

export interface FetchVideoPreviews {
  /**
   * List all videos by given constraints
   */
  videos: FetchVideoPreviews_videos[] | null;
}
