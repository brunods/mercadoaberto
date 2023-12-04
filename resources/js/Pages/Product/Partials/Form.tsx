import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { router } from "@inertiajs/react";
import { ChangeEvent, FormEventHandler } from "react";

export interface ProductFormProps {
    data?: {
        name?: string;
        description?: string;
        price?: number;
    };
    errors?: {
        name?: string;
        description?: string;
        price?: string;
    };
    processing?: boolean;
    isDirty?: boolean;
    recentlySuccessful?: boolean;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    onChange?: (field: "name" | "description" | "price", event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ProductForm({
    data,
    errors,
    processing = false,
    isDirty = false,
    recentlySuccessful = false,
    onSubmit,
    onChange
}: ProductFormProps) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <InputLabel
                                htmlFor="name"
                                value="Nome"
                            />
                            <TextInput
                                id="name"
                                className="w-full"
                                maxLength={255}
                                value={data?.name}
                                onChange={(e) => onChange?.("name", e)}
                            />
                            <InputError
                                className="mt-2"
                                message={errors?.name}
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="description"
                                value="Descrição"
                            />
                            <TextInput
                                id="description"
                                className="w-full"
                                minLength={1}
                                maxLength={255}
                                value={data?.description}
                                onChange={(e) => onChange?.("description", e)}
                            />
                            <InputError
                                className="mt-2"
                                message={errors?.description}
                            />
                        </div>

                        <div>
                            <InputLabel
                                htmlFor="price"
                                value="Preço"
                            />
                            <TextInput
                                id="price"
                                type="number"
                                className="w-full"
                                min={1}
                                max={999999}
                                value={data?.price?.toString()}
                                onChange={(e) => onChange?.("price", e)}
                            />
                            <InputError
                                className="mt-2"
                                message={errors?.price}
                            />
                        </div>

                        <PrimaryButton
                            disabled={processing || !isDirty}
                        >
                            Salvar
                        </PrimaryButton>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                            afterLeave={() => router.visit(route("products"))}
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Produto salvo com sucesso.
                            </p>
                        </Transition>
                    </form>
                </div>
            </div>
        </div>
    )
}
