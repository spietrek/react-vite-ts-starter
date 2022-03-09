import { ComponentStory, ComponentMeta } from '@storybook/react'

import SpinnerWrapper from './SpinnerWrapper'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/SpinnerWrapper',
  component: SpinnerWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SpinnerWrapper>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpinnerWrapper> = args => (
  <SpinnerWrapper {...args} />
)

export const Loading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  isLoading: true,
  children: null,
}

export const NotLoading = Template.bind({})
NotLoading.args = {
  isLoading: false,
  children: <div>Hello World</div>,
}
