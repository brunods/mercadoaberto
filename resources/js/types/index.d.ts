import { User } from "./generated";

export * from "./generated";


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
