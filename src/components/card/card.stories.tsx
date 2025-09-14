import type { Meta, StoryObj } from '@storybook/react-vite'; // Adjust '@storybook/react' if using a different framework, e.g., '@storybook/react-vite'
import { Card } from './card'; // Adjust the import path based on your file structure

// Meta definition for the Card component
const meta = {
  title: 'Components/Card', // The title determines how the component is organized in Storybook's sidebar
  component: Card, // The component being documented
  // Optional: Define argTypes for more granular control over Storybook's controls panel
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  // Optional: Add tags for organization or specific features like 'autodocs'
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

// Define the type for stories based on the meta
type Story = StoryObj<typeof meta>;

// Default story for the Card component
export const Default: Story = {
  args: {
    title: 'Example Card Title',
    description: 'This is a description for the example card, showcasing how it looks with some content.',
  },
};

// You can add more stories to showcase different states or variations of your Card component
export const LongDescription: Story = {
  args: {
    title: 'Card with a Very Long Description',
    description: 'This card demonstrates how the component handles a significantly longer description. It allows you to see if the text wraps correctly, if the layout adjusts as expected, and if there are any visual issues when the content exceeds a typical length. This is crucial for ensuring the component is robust and adaptable to various content lengths.',
  },
};

export const ShortTitle: Story = {
  args: {
    title: 'Short Title',
    description: 'A brief description.',
  },
};
