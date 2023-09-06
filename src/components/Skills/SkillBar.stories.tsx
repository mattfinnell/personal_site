import type { Meta, StoryObj } from "@storybook/react";
import SkillBar from "./SkillBar";

const meta = {
  title: "Application/SkillBar",
  component: SkillBar,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SkillBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Green: Story = {
  args: {
    comfort: 90,
  },
};

export const MeanGreen: Story = {
  args: {
    comfort: 100,
  },
};
