import type { Meta, StoryObj } from '@storybook/react';
import ProductReviewsComponent from "@/Components/ProductReviews";

const meta = {
    title: "ProductReviews",
    component: ProductReviewsComponent,
    parameters: {
        backgrounds:{
            default: 'light',
            values: [
                { name: 'light', value: '#F3F3F3' },
            ],
        }
    }
} satisfies Meta<typeof ProductReviewsComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rating: 4,
        reviews: [
            {
                id: 1,
                name: "Zélia de Souza",
                title: "Produto de qualidade, entrega rápida e excelente",
                rating: 5,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                id: 2,
                name: "Luana Alméida",
                title: "Produto de qualidade, entrega rápida e excelente",
                rating: 4,
                comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            }
        ],
    },
};
