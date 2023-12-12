import { NotificationComponentProps } from "@/Components/Notification";
import { create } from "zustand";

type Notification = NotificationComponentProps["notification"];

type NotificationStore = {
  notifications: Notification[],
  add: (notification: Notification) => void;
  remove: (id: Notification["id"]) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  add: (notification) => {
    set(({ notifications }) => ({ notifications: [...notifications, notification] }));
  },
  remove: (id) => {
    set(({ notifications }) => ({
      notifications: notifications.filter((notification) => notification.id != id),
    }));
  },
}));
