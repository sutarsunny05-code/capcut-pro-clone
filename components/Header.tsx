'use client';

import { Download, Save, Undo, Redo } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          CapCut Pro Clone
        </h1>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition">
            <Undo size={20} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition">
            <Redo size={20} />
          </button>
        </div>
      </div>
      
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition flex items-center gap-2">
          <Save size={18} />
          Save Project
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg transition flex items-center gap-2 font-semibold">
          <Download size={18} />
          Export Video
        </button>
      </div>
    </header>
  );
}