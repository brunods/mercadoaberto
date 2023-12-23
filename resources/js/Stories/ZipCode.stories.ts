import type { Meta, StoryObj } from '@storybook/react';
import ZipCodeComponent from "@/Components/ZipCode";

const meta = {
    title: "ZipCode",
    component: ZipCodeComponent,
} satisfies Meta<typeof ZipCodeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        zipCode: "12345678",
    },
};
