import React from 'react';
import PhotoFeedCard from './PhotoFeedCard';

export default {
  title: 'PhotoFeedCard',
  component: PhotoFeedCard,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';
const nickname = 'Wade Warren';

export const BasicUsage = (args: any) => <PhotoFeedCard {...args} />;


BasicUsage.args = {
  photoUrl,
  nickname,
  checked: false,
  onChange: () => {},
};
