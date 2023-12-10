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


export interface Client {
    id: number;
    name: string;
    cep: string;
    address: string;
    address_number: string;
    district: string;
    state: string;
    mail: string;
    phone: string;
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
