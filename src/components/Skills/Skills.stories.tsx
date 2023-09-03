import type { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";

const meta = {
  title: "Application/Skills",
  component: Skills,
  decorators: [],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {},
};
