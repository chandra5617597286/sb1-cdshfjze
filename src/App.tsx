import React from 'react';
import { Game } from './components/Game';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Tic Tac Toe</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;