import { Fragment, useEffect } from "react";
import { Transition } from "@headlessui/react";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export interface NotificationComponentProps {
    notification: {
        id: number;
        title?: string;
        message?: string;
        type?: "success" | "error" | "warning" | "info";
    };
    removeNotification: (id: number) => void;
}

const notificationStyles = {
    success: { icon: CheckCircleIcon, iconClassName: "text-green-400" },
    error: { icon: ExclamationCircleIcon, iconClassName: "text-red-400" },
    warning: {
        icon: ExclamationTriangleIcon,
        iconClassName: "text-yellow-400",
    },
    info: { icon: InformationCircleIcon, iconClassName: "text-blue-400" },
};

export default function NotificationComponent({
    notification,
    removeNotification,
}: NotificationComponentProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            removeNotification(notification.id);
        }, 5000);

        return () => clearTimeout(timer);
    }, [notification, removeNotification]);

    const { type = "info", title, message } = notification;
    const { icon: Icon, iconClassName } = notificationStyles[type];

    return (
        <>
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 absolute top-5 right-5">
                <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
                    <Transition
                        show={true}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Icon
                                            className={`h-6 w-6 ${iconClassName}`}
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">
                                            {title}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {message}
                                        </p>
                                    </div>
                                    <div className="ml-4 flex flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            onClick={() =>
                                                removeNotification(
                                                    notification.id
                                                )
                                            }
                                        >
                                            <span className="sr-only">
                                                Close
                                            </span>
                                            <XMarkIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    );
}
