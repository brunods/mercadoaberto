import type { Meta, StoryObj } from '@storybook/react';
import ProductComponent from "@/Components/Product";

const meta = {
	title: "Product",
	component: ProductComponent,
} satisfies Meta<typeof ProductComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "Computador Gamer",
		price: 12000,
		imageSrc: "https://picsum.photos/200",
	},
};
