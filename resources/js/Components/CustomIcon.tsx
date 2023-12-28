const CustomIcon = ({ width = 24, height = 24, color = 'black', path }: { width?: number, height?: number, color?: string, path: string }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={path} stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default CustomIcon;
