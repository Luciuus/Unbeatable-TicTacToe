import { Cell as CellType } from "../../types/tictactoe";
import Cell from "./Cell";

interface Props {
    board: CellType[];
    makeMove: (index: number) => void;
}

export default function Board({
    board,
    makeMove,
}: Props) {
    return (
        <div className="grid grid-cols-3 gap-3">
            {board.map((cell, index) => (
                <Cell
                    key={index}
                    value={cell}
                    onClick={() => makeMove(index)}
                />
            ))}
        </div>
    );
}