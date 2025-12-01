'use client';

import { Type, Plus } from 'lucide-react';
import { useState } from 'react';

export default function TextPanel() {
  const [textContent, setTextContent] = useState('');

  const textStyles = [
    { id: 1, name: 'Title', style: 'font-bold text-4xl' },
    { id: 2, name: 'Subtitle', style: 'font-semibold text-2xl' },
    { id: 3, name: 'Body', style: 'text-lg' },
    { id: 4, name: 'Caption', style: 'text-sm italic' },
  ];

  const animations = [
    'Fade In', 'Slide Up', 'Slide Down', 'Zoom In', 'Bounce', 'Typewriter'
  ];

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Type className="text-purple-500" size={24} />
        <h2 className="text-lg font-semibold">Text</h2>
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 mb-6 hover:from-purple-600 hover:to-pink-700 transition">
        <Plus size={20} />
        Add Text
      </button>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Text Content</label>
          <textarea
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            placeholder="Enter your text..."
            className="w-full bg-gray-700 rounded px-3 py-2 text-sm resize-none h-24"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Text Style</label>
          <div className="grid grid-cols-2 gap-2">
            {textStyles.map((style) => (
              <button
                key={style.id}
                className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition"
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Font Size</label>
          <input
            type="range"
            min="12"
            max="120"
            defaultValue="48"
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              defaultValue="#ffffff"
              className="w-12 h-10 rounded cursor-pointer"
            />
            <input
              type="text"
              defaultValue="#ffffff"
              className="flex-1 bg-gray-700 rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Animation</label>
          <select className="w-full bg-gray-700 rounded px-3 py-2 text-sm">
            <option>None</option>
            {animations.map((anim) => (
              <option key={anim}>{anim}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Duration (seconds)</label>
          <input
            type="number"
            min="0.5"
            max="10"
            step="0.5"
            defaultValue="3"
            className="w-full bg-gray-700 rounded px-3 py-2 text-sm"
          />
        </div>
      </div>
    </div>
  );
}