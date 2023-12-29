import type { Meta, StoryObj } from '@storybook/react';
import BreadCrumbComponent from "@/Components/BreadCrumb";

const meta = {
    title: "BreadCrumb",
    component: BreadCrumbComponent,
} satisfies Meta<typeof BreadCrumbComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        paths: [
            {
                path: "Home",
                url: "/",
            },
            {
                path: "Peças",
                url: "/",
            },
            {
                path: "Categoria",
                url: "/",
            },
        ],
    },
};
