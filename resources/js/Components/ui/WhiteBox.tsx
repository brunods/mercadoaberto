export default function WhiteBox({ children }: React.PropsWithChildren<{}>) {
    return (
        <div className="bg-white p-[32px] rounded-[8px] font-roboto">
            {children}
        </div>
    );
}
