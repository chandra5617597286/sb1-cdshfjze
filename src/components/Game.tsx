import React, { useState } from 'react';
import { Board } from './Board';
import { GameStatus } from './GameStatus';
import { calculateWinner } from '../utils/gameLogic';

export const Game: React.FC = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="flex flex-col items-center">
      <GameStatus winner={winner} xIsNext={xIsNext} />
      <Board squares={squares} onClick={handleClick} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={handleReset}
      >
        Reset Game
      </button>
    </div>
  );
};