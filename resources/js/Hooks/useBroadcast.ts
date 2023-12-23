import { useEffect } from "react";

export interface UseBroadcast {
    channel: string;
    event: string;
    handle: Function;
    isPrivate?: boolean;
}

export default function useBroadcast({ channel, event, handle, isPrivate = false }: UseBroadcast) {
    useEffect(() => {
        (isPrivate ? window.Echo.private(channel) : window.Echo.channel(channel))
            .listen(event, handle);
        return () => {
            window.Echo.leaveChannel(channel);
        };
    }, []);
}
