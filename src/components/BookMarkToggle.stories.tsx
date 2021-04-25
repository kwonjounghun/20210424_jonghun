import React from 'react';
import BookmarkToggle from './BookmarkToggle';

export default {
  title: 'BookmarkToggle',
  component: BookmarkToggle,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';

export const BasicUsage = (args: any) => <BookmarkToggle {...args} />;


BasicUsage.args = {
  photoUrl,
  checked: false,
};
