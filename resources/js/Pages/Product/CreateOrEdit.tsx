import { PageProps, Product } from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import ProductForm, { ProductFormProps } from "./Partials/Form";
import { router } from "@inertiajs/core";

export default function ProductCreate({ auth, product }: PageProps<{ product?: Product }>) {
    const {
        data,
        errors,
        processing,
        isDirty,
        setData,
        post,
        put,
    } = useForm(product ?? {
        name: "",
        description: "",
        price: 0,
    });

    const handleChange: ProductFormProps["onChange"] = (field, { target: { value } }) => {
        setData(field, typeof data[field] === "number" ? Number(value) : value);
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();

        if (product) {
            return put(route("products.update", product.id), {
                onSuccess: () => {
                    router.visit('/products');
                },
            });
        }

        post(route("products.store"), {
            onSuccess: () => {
                router.visit('/products');
            },
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Produto</h2>}
        >
            <Head title="Produto" />

            <ProductForm
                data={data}
                errors={errors}
                processing={processing}
                isDirty={isDirty}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </AuthenticatedLayout>
    );
}
