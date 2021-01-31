import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { BottomAppBar, BottomAppBarProps } from "../components/BottomAppBar";
import { AnonymousUser, Key } from "../domain";
import { sampleKeys } from "../domain-samples";

export default {
  title: "Keyring/BottomAppBar",
  component: BottomAppBar,
} as Meta;

const Template: Story<BottomAppBarProps> = (args) => <BottomAppBar {...args} />;

export const SampleBottomAppBar = Template.bind({});
SampleBottomAppBar.args = {
  user: AnonymousUser,
  keys: sampleKeys,
};

// export const OtherBottomAppBar = Template.bind({});
// OtherBottomAppBar.args = {
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
