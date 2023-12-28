import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function BreadCrumb(propos: any) {
    const paths = propos.paths;

    return (
        <nav className="font-roboto text-[14px] font-medium text-gray-300">
            <ol className="flex items-center">
                {paths.map((path: any, index: number) => (
                    <li key={index} className={`flex items-center ${index === paths.length - 1 ? 'text-primary' : ''}`}>
                        {index !== paths.length - 1 && (
                            <>
                                {index !== 0 && <FontAwesomeIcon className="mx-2.5" icon={faAngleRight} />}
                                <Link href={path.url}>{path.path}</Link>
                            </>
                        )}
                        {index === paths.length - 1 && (
                            <>
                                {index !== 0 && <FontAwesomeIcon className="mx-2.5 text-primary" icon={faAngleRight} />}
                                {path.path}
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
