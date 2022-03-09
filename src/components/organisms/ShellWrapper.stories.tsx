import { ComponentStory, ComponentMeta } from '@storybook/react'

import ShellWrapper from './ShellWrapper'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/ShellWrapper',
  component: ShellWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ShellWrapper>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ShellWrapper> = args => (
  <ShellWrapper {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: <div>Hello World</div>,
}
