import { PageProps, Client } from "@/types";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import ClientForm, { ClientFormProps } from "./Partials/Form";

export default function ClientCreate({ auth, client }: PageProps<{ client?: Client }>) {
    const {
        data,
        errors,
        processing,
        recentlySuccessful,
        isDirty,
        setData,
        post,
        put,
    } = useForm(client ?? {
        name : "",
        cep : "",
        address : "",
        address_number : "",
        district : "",
        state : "",
        mail : "",
        phone : ""
    });

    const handleChange: ClientFormProps["onChange"] = (field, { target: { value } }) => {
        //setData(field, typeof data[field] === "number" ? Number(value) : value);
    };

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();

        if (client) {
            return put(route("clients.update", client.id));
        }

        post(route("clients.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Cliente</h2>}
        >
            <Head title="Cliente" />

            <ClientForm
                data={data}
                errors={errors}
                processing={processing}
                recentlySuccessful={recentlySuccessful}
                isDirty={isDirty}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </AuthenticatedLayout>
    );
}
