export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
