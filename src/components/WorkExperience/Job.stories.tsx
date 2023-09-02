import { Text } from "@chakra-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import Job from "./Job";

const meta = {
  title: "Application/Job",
  component: Job,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Job>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CaptivateIQ: Story = {
  args: {
    thumbnail:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQGrENtM2FHN_A/company-logo_200_200/0/1661456653923?e=2147483647&v=beta&t=ISPVjJluLBuEje-VTXaZDp0R8HhuL23a6xb3uHp3IY0",
    company: "CaptivateIQ",
    position: "Senior Software Engineer",
    description: (
      <Text>
        Contributed to the development of the <i>What-If</i> feature and
        championed system Observability.
      </Text>
    ),
    skills: [
      "React",
      "Typescript",
      "Python",
      "Django",
      "Django Rest Framework",
      "Datadog",
    ],
  },
};

export const MetaRealityLabs: Story = {
  args: {
    thumbnail:
      "https://e7.pngegg.com/pngimages/984/326/png-clipart-meta-thumbnail-social-media-icons.png",
    company: "Meta Reality Labs",
    position: "Software Engineer II",
    description: <Text></Text>,
    skills: [
      "React",
      "Typescript",
      "Python",
      "Django",
      "Django Rest Framework",
      "Datadog",
    ],
  },
};
