'use client';

import { Sparkles } from 'lucide-react';

export default function EffectsPanel() {
  const effects = [
    { id: 1, name: 'Blur', preview: '🌫️' },
    { id: 2, name: 'Vintage', preview: '📷' },
    { id: 3, name: 'Black & White', preview: '⚫' },
    { id: 4, name: 'Sepia', preview: '🟤' },
    { id: 5, name: 'Brightness', preview: '☀️' },
    { id: 6, name: 'Contrast', preview: '🔆' },
    { id: 7, name: 'Saturation', preview: '🎨' },
    { id: 8, name: 'Vignette', preview: '🎭' },
    { id: 9, name: 'Sharpen', preview: '🔪' },
    { id: 10, name: 'Glow', preview: '✨' },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-purple-500" size={24} />
        <h2 className="text-lg font-semibold">Effects</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {effects.map((effect) => (
          <button
            key={effect.id}
            className="aspect-square bg-gray-700 hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center gap-2 transition group"
          >
            <span className="text-3xl group-hover:scale-110 transition">{effect.preview}</span>
            <span className="text-xs text-gray-300">{effect.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Intensity</label>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </div>
        
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Blend Mode</label>
          <select className="w-full bg-gray-700 rounded px-3 py-2 text-sm">
            <option>Normal</option>
            <option>Multiply</option>
            <option>Screen</option>
            <option>Overlay</option>
          </select>
        </div>
      </div>
    </div>
  );
}