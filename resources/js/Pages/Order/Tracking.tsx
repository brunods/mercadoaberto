
import { useState } from "react"
import OrderPage from "@/Components/Order/OrderPage"

export default function Rastreio() {

    const [clienteName, setClienteName] = useState('Bruno Duarte')

    return (
        <>
            <OrderPage
                idOrder="1234567890"
                textLastUpdate = {`${clienteName}, Seu pagamento foi confirmado`}
                dateBuy="12/12/2023"
                dateArrive="12/01/2024"
                priceBuy="R$ 1.000,00"
                seller="Zé dos Imports"
                statusOrder="Entregue" //'Pagamento', 'Preparando', 'Enviado', 'Entregue'
                statusText="Agora é só um pouquinho. Quando a loja enviar o seu pedido, vamos te enviar um e-mail com as informações de rastreio, transportadora e nota fiscal."
            />
        </>
    )
}
