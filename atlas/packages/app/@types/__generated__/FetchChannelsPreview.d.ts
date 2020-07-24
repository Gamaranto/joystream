/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchChannelsPreview
// ====================================================

export interface FetchChannelsPreview_channels {
  __typename: "Channel";
  id: string;
  handle: string;
  avatarPhotoURL: string | null;
}

export interface FetchChannelsPreview {
  /**
   * List all channel by given constraints
   */
  channels: FetchChannelsPreview_channels[] | null;
}
