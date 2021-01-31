import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { KeyList, KeyListProps } from '../components/KeyList';
import { AnonymousUser, Key } from '../domain';
import { sampleKeys } from '../domain-samples';

export default {
  title: 'Keyring/KeyList',
  component: KeyList,
} as Meta;

const Template: Story<KeyListProps> = (args) => <KeyList {...args} />;

export const SampleKeyList = Template.bind({});
SampleKeyList.args = {
  user: AnonymousUser,
  keys: sampleKeys
};

// export const OtherKeyList = Template.bind({});
// OtherKeyList.args = {
//     user: AnonymousUser,
//     keys: RandomKeys(),
// };

// function RandomKeys(): Key[] {
//     const count = Math.random() * 10;
//     const keys = (new Array(count)).fill(undefined).map((_, index) => {
//         const aKey: Key = {
//             name: `key #${index}`
//         };
//         return aKey;
//     });
//     return keys;
// }