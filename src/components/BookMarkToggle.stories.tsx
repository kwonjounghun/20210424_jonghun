import React from 'react';
import BookMarkToggle from './BookMarkToggle';

export default {
  title: 'BookMarkToggle',
  component: BookMarkToggle,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';

export const BasicUsage = (args: any) => <BookMarkToggle {...args} />;


BasicUsage.args = {
  photoUrl,
  checked: false,
  onChange: () => {},
};
