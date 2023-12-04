import { PageProps, Product } from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from "@inertiajs/react";
import ProductList from "./Partials/List";

export default function Index({ auth, products }: PageProps<{ products: Product[] }>) {
    const handleUpdate = (productId: number) => {
        router.visit(route("products.edit", productId));
    };

    const handleDelete = (productId: number) => {
        router.delete(route("products.destroy", productId), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Produtos</h2>}
        >
            <Head title="Produtos" />
            <ProductList
                products={products}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
            />
        </AuthenticatedLayout>
    );
}
