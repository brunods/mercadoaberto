import type { Meta, StoryObj } from '@storybook/react';
import ButtonPrimary from '@/Components/ui/ButtonPrimary';

const meta = {
    title: "Components/ButtonPrimary",
    component: ButtonPrimary,
} as Meta<typeof ButtonPrimary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "",
        children: "Button Primary",
        disabled: false,
        light: false
    },
};
