export default function BoxInfo({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="p-[16px] my-[20px] rounded-[8px] border border-gray-50 w-full">
            {children}
        </div>
    );
}
