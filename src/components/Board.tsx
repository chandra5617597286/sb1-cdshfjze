import React from 'react';
import { Square } from './Square';

interface BoardProps {
  squares: (string | null)[];
  onClick: (i: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => (
  <div className="grid grid-cols-3 gap-1 bg-gray-400 p-1">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);