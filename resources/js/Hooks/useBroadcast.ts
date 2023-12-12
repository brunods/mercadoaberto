import { useEffect } from "react";

export interface UseBroadcast {
    channel: string;
    event: string;
    handle: Function;
}

export default function useBroadcast({ channel, event, handle }: UseBroadcast) {
    useEffect(() => {
        window.Echo.channel(channel).listen(event, handle);
        return () => {
            window.Echo.leaveChannel(channel);
        };
    }, []);
}
