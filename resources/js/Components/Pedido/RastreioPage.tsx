import OrderTracker from './OrdemTrack';

interface RastreioPageProps {
    idPedido: string;
    textoUltimaAtualizacao: string;
    dataCompra: string;
    dataEntrega: string;
    valorCompra: string;
    vendedor: string;
    statusPedido: string;
    textoStatus: string;
}

export default function RastreioPage({
    idPedido,
    textoUltimaAtualizacao,
    dataCompra,
    dataEntrega,
    valorCompra,
    vendedor,
    statusPedido,
    textoStatus
}: RastreioPageProps) {

    return (
        <>
            <div className="w-full h-20 bg-gray-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-6xl">
                    local_shipping
                </span>
            </div>
            <div className="mx-auto p-20">
                <h1 className="text-3xl text-gray-700 text-center">{textoUltimaAtualizacao}</h1>

                <div className="w-fit mx-auto mt-20 text-gray-400">
                    <p>Pedido n°: <span className="text-gray-600">{idPedido}</span></p>
                    <p>Data do pedido: <span className="text-gray-600">{dataCompra}</span></p>
                    <p>Valor total: <span className="text-gray-600">{valorCompra}</span></p>
                    <p>Vendido e entregue por: <span className="text-gray-600">{vendedor}</span></p>
                </div>
                <div>
                    <OrderTracker
                        status={statusPedido}
                    />
                </div>
                <div className="w-auto my-10 mx-auto mt-30 border-t border-gray-300 text-center p-20">
                    <h2 className="text-2xl text-gray-700 mb-3">Entregue até {dataEntrega}</h2>
                    <p className="text-gray-700 text-base">{textoStatus}</p>
                </div>
            </div>
        </>
    )
}
