import React from 'react';
import PhotoFeedList from './PhotoFeedList';
import { PHOTO_FEED_LIST } from './__mocks__/photoFeed';

export default {
  title: 'PhotoFeedList',
  component: PhotoFeedList,
};

export const BasicUsage = (args: any) => <PhotoFeedList {...args} />;

BasicUsage.args = {
  photoFeedList: PHOTO_FEED_LIST,
};
