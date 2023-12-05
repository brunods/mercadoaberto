import OrderTracker from './OrderTrack';

interface OrderPageProps {
    idOrder: string;
    textLastUpdate: string;
    dateBuy: string;
    dateArrive: string;
    priceBuy: string;
    seller: string;
    statusOrder: string;
    statusText: string;
}

export default function OrderPage({
    idOrder,
    textLastUpdate,
    dateBuy,
    dateArrive,
    priceBuy,
    seller,
    statusOrder,
    statusText
}: OrderPageProps) {

    return (
        <>
            <div className="w-full h-20 bg-gray-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-6xl">
                    local_shipping
                </span>
            </div>
            <div className="mx-auto p-20">
                <h1 className="text-3xl text-gray-700 text-center">{textLastUpdate}</h1>

                <div className="w-fit mx-auto mt-20 text-gray-400">
                    <p>Pedido n°: <span className="text-gray-600">{idOrder}</span></p>
                    <p>Data do pedido: <span className="text-gray-600">{dateBuy}</span></p>
                    <p>Valor total: <span className="text-gray-600">{priceBuy}</span></p>
                    <p>Vendido e entregue por: <span className="text-gray-600">{seller}</span></p>
                </div>
                <div>
                    <OrderTracker
                        status={statusOrder}
                    />
                </div>
                <div className="w-auto my-10 mx-auto mt-30 border-t border-gray-300 text-center p-20">
                    <h2 className="text-2xl text-gray-700 mb-3">Entregue até {dateArrive}</h2>
                    <p className="text-gray-700 text-base">{statusText}</p>
                </div>
            </div>
        </>
    )
}
