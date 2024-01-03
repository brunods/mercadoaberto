import type { Meta, StoryObj } from '@storybook/react';
import ScoreStore from '@/Components/ScoreStore';


const meta = {
    title: "ScoreStore",
    component: ScoreStore,
} as Meta<typeof ScoreStore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name : "A.Camargo & Cia",
        image : "https://picsum.photos/200/300",
        description : "Loja de materiais de construção",
        scoreReputation : 4.3,
        verified : true,
    },
};
