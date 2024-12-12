import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button
    className="w-20 h-20 border border-gray-400 text-4xl font-bold bg-white hover:bg-gray-100 transition-colors"
    onClick={onClick}
  >
    {value}
  </button>
);