
import { useState } from "react"
import RastreioPage from "@/Components/Pedido/RastreioPage"

export default function Rastreio() {

    const [clienteName, setClienteName] = useState('Bruno Duarte')

    return (
        <>
            <RastreioPage
                idPedido="1234567890"
                textoUltimaAtualizacao = {`${clienteName}, Seu pagamento foi confirmado`}
                dataCompra="12/12/2023"
                dataEntrega="12/01/2024"
                valorCompra="R$ 1.000,00"
                vendedor="Zé dos Imports"
                statusPedido="Entregue" //'Pagamento', 'Preparando', 'Enviado', 'Entregue'
                textoStatus="Agora é só um pouquinho. Quando a loja enviar o seu pedido, vamos te enviar um e-mail com as informações de rastreio, transportadora e nota fiscal."
            />
        </>
    )
}
