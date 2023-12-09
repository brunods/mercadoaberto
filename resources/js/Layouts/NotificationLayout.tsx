import NotificationComponent from "@/Components/Notification";
import useBroadcast from "@/Hooks/useBroadcast";
import { Product } from "@/types";
import { ReactNode, useCallback, useState } from "react";
import { createPortal } from "react-dom";

export default function NotificationLayout({ children }: { children: ReactNode }) {
    const [notifications, setNotifications] = useState<{ title: string; message: string; }[]>([]);

    const handleAddProductNotification = useCallback(({ product }: { product: Product }) => {
        notifications.push({ title: 'Novo produto adicionado!', message: product.name });
        setNotifications(Array.from(notifications));
    }, []);

    useBroadcast({
        channel: 'product',
        event: 'ProductCreateNotification',
        handle: handleAddProductNotification,
    });

    return (
        <>
            {children}
            {createPortal(
                <>
                    {Array.from(notifications.values()).map((notification, index) => (
                        <NotificationComponent
                            key={index}
                            notification={{
                                id: index,
                                ...notification,
                                type: 'info'
                            }}
                            removeNotification={console.log}
                        />
                    ))}
                </>,
                document.body
            )}
        </>
    )
}
