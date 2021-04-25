import React from 'react';
import UserProfile from './UserProfile';

export default {
  title: 'UserProfile',
  component: UserProfile,
};

const photoUrl = 'https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-cards-snapshots1547907139_Oc9.jpeg/640/640';
const nickname = 'Wade Warren';

export const BasicUsage = (args: any) => <UserProfile {...args} />;

BasicUsage.args = {
  photoUrl,
  nickname,
};
