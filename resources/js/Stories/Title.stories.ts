import type { Meta, StoryObj } from '@storybook/react';
import TiltesComponent from "@/Components/TitleBoxSection";

const meta = {
    title: "Title",
    component: TiltesComponent,
} satisfies Meta<typeof TiltesComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Title Box Section",
    },
};
