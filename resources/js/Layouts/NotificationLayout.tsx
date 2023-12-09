import NotificationComponent from "@/Components/Notification";
import useBroadcast from "@/Hooks/useBroadcast";
import { useNotificationStore } from "@/Store/notification";
import { Product } from "@/types";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function NotificationLayout({ children }: { children: ReactNode }) {
    const { notifications, add, remove } = useNotificationStore();

    useBroadcast({
        channel: 'product',
        event: 'ProductCreateNotification',
        handle: ({ product }: { product: Product }) => {
            add({
                id: crypto.randomUUID(),
                title: 'Novo produto adicionado',
                message: product.name,
                type: "info",
            });
        },
    });

    return (
        <>
            {children}
            {createPortal(
                <>
                    {notifications.map((notification, index) => (
                        <NotificationComponent
                            key={index}
                            notification={notification}
                            removeNotification={remove}
                        />
                    ))}
                </>,
                document.body
            )}
        </>
    )
}
