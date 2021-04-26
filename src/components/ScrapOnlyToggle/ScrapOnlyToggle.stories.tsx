import React from 'react';
import ScrapOnlyToggle from './ScrapOnlyToggle';

export default {
  title: 'ScrapOnlyToggle',
  component: ScrapOnlyToggle,
};

export const BasicUsage = (args: any) => <ScrapOnlyToggle {...args} />;


BasicUsage.args = {
  checked: false,
  onChange: () => { },
};
