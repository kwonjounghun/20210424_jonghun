import React from 'react';
import Avata from './Avata';

export default {
  title: 'Avata',
  component: Avata,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';

export const BasicUsage = (args: any) => <Avata {...args} />;

BasicUsage.args = {
  photoUrl,
};
