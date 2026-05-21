import { Cell as CellType } from "../../types/tictactoe";

interface Props {
    value: CellType;
    onClick: () => void;
}

export default function Cell({ value, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="group aspect-square rounded-2xl border border-white/5 bg-[#222831] transition-all duration-200 hover:bg-[#2a313c] active:scale-95"
        >
            <span
                className={`text-5xl font-black transition-all duration-200 ${value === "X"
                        ? "text-zinc-100"
                        : "text-zinc-400"
                    }`}
            >
                {value}
            </span>
        </button>
    );
}