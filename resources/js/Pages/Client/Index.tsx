import { PageProps, Client } from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from "@inertiajs/react";
import ClientList from "./Partials/List";

export default function Index({ auth, clients }: PageProps<{ clients: Client[] }>) {
    const handleUpdate = (clientId: number) => {
        router.visit(route("clients.edit", clientId));
    };

    const handleDelete = (clientId: number) => {
        router.delete(route("clients.destroy", clientId), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Clientes</h2>}
        >
            <Head title="Clientes" />
            <ClientList
                clients={clients}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </AuthenticatedLayout>
    );
}
