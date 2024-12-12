import React from 'react';

interface GameStatusProps {
  winner: string | null;
  xIsNext: boolean;
}

export const GameStatus: React.FC<GameStatusProps> = ({ winner, xIsNext }) => {
  let status: string;
  
  if (winner === 'draw') {
    status = "Game ended in a draw!";
  } else if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="text-2xl font-bold mb-4">
      {status}
    </div>
  );
};