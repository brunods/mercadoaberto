import ProductComponent from "@/Components/Product";
import { Product } from "@/types";
import { Link } from "@inertiajs/react";

interface ProductListProps {
    products?: Product[];
    onUpdate?: (productId: string) => void;
    onDelete?: (productId: string) => void;
}

export default function ProductList({ products = [], onUpdate, onDelete }: ProductListProps) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <Link className="underline" href={route("products.create")}>
                    + Adicionar
                </Link>
                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-center place-items-center">
                        {products.map((product) => (
                            <ProductComponent
                                key={product.id}
                                name={product.name}
                                imageSrc="https://picsum.photos/200"
                                price={product.price}
                                onClickUpdate={() => onUpdate?.(product.id)}
                                onClickDelete={() => onDelete?.(product.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
