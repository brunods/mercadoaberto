import CloseIcon from "@/Components/Icons/Close";
import EditIcon from "@/Components/Icons/Edit";
import { Client } from "@/types";
import { Link } from "@inertiajs/react";

interface ClientListProps {
    clients?: Client[];
    onUpdate?: (productId: number) => void;
    onDelete?: (productId: number) => void;
}

export default function ClientList({ clients = [], onUpdate, onDelete }: ClientListProps) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <Link className="underline" href={route("clients.create")}>
                    + Adicionar
                </Link>
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center place-items-center">
                        {clients.map((Client) => (
                            <div key={Client.id} className="w-60 flex flex-col gap-y-1 relative">
                                <img className="w-60 h-60" src="https://picsum.photos/200" />
                                <h2>{Client.name}</h2>
                                <div>
                                    <p className="text-2xl whitespace-break-spaces">{Client.name}</p>
                                </div>
                                <div className="absolute right-1 top-1 space-x-3">
                                    <button
                                        className="bg-white p-1 rounded-full"
                                        aria-label={`edit ${Client.name}`}
                                        onClick={() => onUpdate?.(Client.id)}
                                    >
                                        <EditIcon className="w-6" />
                                    </button>
                                    <button
                                        className="bg-white p-1 rounded-full"
                                        aria-label={`delete ${Client.name}`}
                                        onClick={() => onDelete?.(Client.id)}
                                    >
                                        <CloseIcon className="w-6" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
