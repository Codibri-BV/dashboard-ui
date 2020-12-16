import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { default as LoaderComp, Props } from './Loader';

export default {
  title: 'Loader',
} as Meta;

const Template: Story<Props> = (args) => <div style={{width: '200px'}}>
<LoaderComp {...args}>
  <span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </span>
</LoaderComp>
</div>

export const Loader = Template.bind({})
Loader.args = {
  loading: true
}
