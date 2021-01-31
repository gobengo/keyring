import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Layout as KeyringAppLayout, Props as KeyringAppLayoutProps } from '../layouts/KeyringAppLayout';
import { AnonymousUser } from '../domain';
import { sampleKeys } from '../domain-samples';

export default {
  title: 'Keyring/KeyringAppLayout',
  component: KeyringAppLayout,
} as Meta;

const Template: Story<KeyringAppLayoutProps> = (args) => <KeyringAppLayout {...args} />;

export const KeyringAppLayoutSimple = Template.bind({});
KeyringAppLayoutSimple.args = {
  user: AnonymousUser,
  initialKeys: sampleKeys,
};
