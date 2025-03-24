import type { Meta, StoryObj } from '@storybook/angular';
import { CustomComponent } from './custom.component';

const meta: Meta<CustomComponent> = {
  title: 'Bernardo/CustomComponent',
  component: CustomComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CustomComponent>;

export const Default: Story = {};
