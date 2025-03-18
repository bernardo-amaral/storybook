import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { CustomComponent } from '../app/components/custom/custom.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<CustomComponent> = {
  title: 'Example/CustomComponent',
  component: CustomComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CustomComponent>;
