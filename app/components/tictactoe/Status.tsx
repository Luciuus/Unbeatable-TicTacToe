interface Props {
    status: string;
}

export default function Status({ status }: Props) {
    return (
        <div className="mb-5 flex justify-center">
            <div className="rounded-full border border-white/5 bg-[#20242c] px-5 py-2 text-sm font-medium text-zinc-300 font-sub-title">
                {status}
            </div>
        </div>
    );
}