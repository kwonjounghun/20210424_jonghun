import React from 'react';
import ScrapToggle from './ScrapToggle';

export default {
  title: 'ScrapToggle',
  component: ScrapToggle,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';

export const BasicUsage = (args: any) => <ScrapToggle {...args} />;


BasicUsage.args = {
  photoUrl,
  checked: false,
  onChange: () => {},
};
