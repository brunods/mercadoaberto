import { useState } from 'react';
import style from './RastreioPage.module.css';
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
            <div className={style.topo}>
                <span className="material-symbols-outlined">
                    local_shipping
                </span>
            </div>
            <div className={style.body_pedido}>
                <h1>{textoUltimaAtualizacao}</h1>

                <div className={style.body_pedido_info}>
                    <p>Pedido n°: <span>{idPedido}</span></p>
                    <p>Data do pedido: <span>{dataCompra}</span></p>
                    <p>Valor total: <span>{valorCompra}</span></p>
                    <p>Vendido e entregue por: <span>{vendedor}</span></p>
                </div>
                <div>
                    <OrderTracker
                        status={statusPedido}
                    />
                </div>
                <div className={style.body_pedido_footer}>
                    <h2>Entregue até {dataEntrega}</h2>
                    <p>{textoStatus}</p>
                </div>
            </div>
        </>
    )
}
