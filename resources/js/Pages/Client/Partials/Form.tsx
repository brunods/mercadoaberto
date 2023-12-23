import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { router } from "@inertiajs/react";
import { ChangeEvent, FormEventHandler } from "react";
import { formatMail } from '@/Helper/FormattingUtils';

export interface ClientFormProps {
    data?: {
        name?: string;
        cep?: string;
        address?: string;
        address_number?: string;
        city?: string;
        state?: string;
        district?: string;
        mail?: string;
        phone?: string;
    };
    errors?: {
        name?: string;
        cep?: string;
        address?: string;
        address_number?: string;
        city?: string;
        state?: string;
        district?: string;
        mail?: string;
        phone?: string;
    };
    processing?: boolean;
    isDirty?: boolean;
    recentlySuccessful?: boolean;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    onChange?: (field: 
        "name"|
        "cep"|
        "address"|
        "address_number"|
        "city"|
        "state"|
        "district"|
        "mail"|
        "phone"        
        , event: ChangeEvent<HTMLInputElement>) => void;
}

export default function ClientForm({
    data,
    errors,
    processing = false,
    isDirty = false,
    recentlySuccessful = false,
    onSubmit,
    onChange
}: ClientFormProps) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nome"/>
                            <TextInput id="name" 
                                className="w-full" 
                                minLength={5} 
                                maxLength={255} 
                                value={data?.name} 
                                onChange={(e) => onChange?.("name", e)}
                            />
                            <InputError className="mt-2" message={errors?.name} />
                        </div>

                        {/* Endereco  */}
                        <div className="grid grid-cols-10 gap-6">
                            <div className="col-span-2">
                                <InputLabel htmlFor="cep" value="CEP"/>
                                <TextInput id="cep" 
                                    className="w-full" 
                                    minLength={8} 
                                    maxLength={8} value={data?.cep} 
                                    onChange={(e) => onChange?.("cep", e)}
                                />
                                <InputError className="mt-2" message={errors?.cep} />
                            </div>
                        
                            <div className="col-span-7">
                                <InputLabel htmlFor="address" value="Endereço"/>
                                <TextInput id="address" 
                                    className="w-full" 
                                    minLength={5}
                                    maxLength={255} 
                                    value={data?.address} 
                                    onChange={(e) => onChange?.("address", e)}
                                />
                                <InputError className="mt-2" message={errors?.address} />
                            </div>

                            <div className="col-span-1">
                                <InputLabel htmlFor="address_number" value="Número"/>
                                <TextInput id="address_number" 
                                    className="w-full" 
                                    minLength={4}
                                    maxLength={10} 
                                    value={data?.address_number} 
                                    onChange={(e) => onChange?.("address_number", e)}
                                />
                                <InputError className="mt-2" message={errors?.address_number} />
                            </div>
                        </div>

                        {/* Cidade/Estado  */}
                        <div className="grid grid-cols-10 gap-6">
                            <div className="col-span-10">
                                <InputLabel htmlFor="district" value="Bairro"/>
                                <TextInput id="district" 
                                    className="w-full" 
                                    minLength={5}
                                    maxLength={150} 
                                    value={data?.district} 
                                    onChange={(e) => onChange?.("district", e)}
                                />
                                <InputError className="mt-2" message={errors?.district} />
                            </div>

                            <div className="col-span-8">
                                <InputLabel htmlFor="city" value="Cidade"/>
                                <TextInput id="city" 
                                    className="w-full" 
                                    minLength={5}
                                    maxLength={150} value={data?.city} 
                                    onChange={(e) => onChange?.("city", e)}
                                />
                                <InputError className="mt-2" message={errors?.city} />
                            </div>
                        
                            <div className="col-span-2">
                                <InputLabel htmlFor="state" value="Estado"/>
                                <TextInput id="state" 
                                    className="w-full" 
                                    minLength={2}
                                    maxLength={2} value={data?.state} 
                                    onChange={(e) => onChange?.("state", e)}
                                />
                                <InputError className="mt-2" message={errors?.state} />
                            </div>

                        </div>

                        
                        {/* Email/Fone  */}
                        <div className="grid grid-cols-10 gap-6">
                            <div className="col-span-8">
                                <InputLabel htmlFor="mail" value="Email"/>
                                <TextInput id="mail" 
                                    className="w-full" 
                                    minLength={10}
                                    maxLength={150} value={data?.mail} 
                                    onChange={(e) => onChange?.("mail", e)}
                                />
                                <InputError className="mt-2" message={errors?.mail} />
                            </div>

                            <div className="col-span-2">
                                <InputLabel htmlFor="phone" value="Phone"/>
                                <TextInput id="phone" 
                                    className="w-full" 
                                    minLength={11} 
                                    maxLength={11} value={data?.phone} 
                                    onChange={(e) => onChange?.("phone", e)}
                                />
                                <InputError className="mt-2" message={errors?.phone} />
                            </div>
                        
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
                            afterLeave={() => router.visit(route("clients"))}
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Cliente salvo com sucesso.
                            </p>
                        </Transition>
                    </form>
                </div>
            </div>
        </div>
    )
}
