import React from 'react';
import ScrapToggle from './ScrapToggle';

export default {
  title: 'ScrapToggle',
  component: ScrapToggle,
};

export const BasicUsage = (args: any) => <ScrapToggle {...args} />;


BasicUsage.args = {
  checked: false,
  onChange: () => { },
};
