import NotificationComponent from "@/Components/Notification";
import useBroadcast from "@/Hooks/useBroadcast";
import { useNotificationStore } from "@/Store/notification";
import { Product, User } from "@/types";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function NotificationLayout({ user, children }: { user: User; children: ReactNode }) {
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

    useBroadcast({
        channel: `User.${user.id}`,
        event: 'UserNotification',
        isPrivate: true,
        handle: () => {
            add({
                id: crypto.randomUUID(),
                title: 'Notificação privada',
                message: 'Chegou notificação em canal privado aqui',
                type: 'info',
            })
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
