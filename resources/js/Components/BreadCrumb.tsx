import { Link } from '@inertiajs/react';
import CustomIcon from './CustomIcon';

export default function BreadCrumb(propos: any) {
    const paths = propos.paths;

    return (
        <nav className="font-roboto text-[14px] font-medium text-gray-300">
            <ol className="flex items-center">
                {paths.map((path: any, index: number) => (
                    <li key={index} className={`flex items-center ${index === paths.length - 1 ? 'text-primary' : ''}`}>
                        {index !== paths.length - 1 && (
                            <>
                                {index !== 0 &&
                                    <CustomIcon
                                        width={24}
                                        height={10}
                                        color="#B0B0B0"
                                        path="M1 9L5 5L1 1"
                                    />
                                }
                                <Link href={path.url}>{path.path}</Link>
                            </>
                        )}
                        {index === paths.length - 1 && (
                            <>
                                {index !== 0 &&
                                    <CustomIcon
                                        width={24}
                                        height={10}
                                        color="#516AD2"
                                        path="M1 9L5 5L1 1"
                                    />
                                }
                                {path.path}
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
