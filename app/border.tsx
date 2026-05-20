import "./styles.css";
import { useState } from "react";

export function Square({ value, onClick }: { value: string | null, onClick: () => void }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}


export default function Border() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    const nextSquares = squares.slice();
    //値が入っている場合は処理しない
    if (nextSquares[i]) {
        alertNotWrite();
      return;
    }
    //XOの判別
    if (xIsNext){
        nextSquares[i] = "X";
    }else{
        nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    const winner=calculateWinner(nextSquares);
    if (winner){
        winnerAlert(winner);
        return;
    }
  }

  return (
    <div>
      <div className="border-low">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>

      <div className="border-low">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>

      <div className="border-low">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
    </div>
  );
}

function alertNotWrite() {
    alert("すでに値が入っています");
}

function calculateWinner(squares: Array<string | null>): string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i=0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        //マークが同じかの確認
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            if (squares[a] === "X") {
                winnerAlert("X");
            } else {
                winnerAlert("O");
            }
            return squares[a];
        }
    }
    return null;
}
function winnerAlert(winner: string) {
    alert(winner + "の勝ちです");
}

