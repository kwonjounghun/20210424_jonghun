import React from 'react';
import Thumbnail from './Thumbnail';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';

export const BasicUsage = (args: any) => <Thumbnail {...args} />;


BasicUsage.args = {
  photoUrl,
}