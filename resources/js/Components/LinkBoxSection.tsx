
import { Link } from '@inertiajs/react';

export default function LinkBoxSection(props: any) {
    return (
        <Link
            className="font-roboto text-gray-600 text-[14px] inline-block"
            href={ props.href }
        >
            { props.title }
        </Link>
    );
}
