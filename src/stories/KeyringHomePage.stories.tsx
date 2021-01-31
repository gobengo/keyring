import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  KeyringHomePage,
  KeyringHomePageProps,
} from "../pages/KeyringHomePage";
import { AnonymousUser } from "../domain";
import { sampleKeys } from "../domain-samples";

export default {
  title: "Keyring/HomePage",
  component: KeyringHomePage,
} as Meta;

const Template: Story<KeyringHomePageProps> = (args) => (
  <KeyringHomePage {...args} />
);

export const KeyringHome = Template.bind({});
KeyringHome.args = {
  user: AnonymousUser,
  initialKeys: sampleKeys,
};
