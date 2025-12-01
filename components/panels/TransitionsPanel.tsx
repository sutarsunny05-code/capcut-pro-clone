'use client';

import { Layers } from 'lucide-react';

export default function TransitionsPanel() {
  const transitions = [
    { id: 1, name: 'Fade', icon: '⚪' },
    { id: 2, name: 'Dissolve', icon: '🌫️' },
    { id: 3, name: 'Wipe', icon: '➡️' },
    { id: 4, name: 'Slide', icon: '📱' },
    { id: 5, name: 'Zoom', icon: '🔍' },
    { id: 6, name: 'Spin', icon: '🌀' },
    { id: 7, name: 'Blur', icon: '💫' },
    { id: 8, name: 'Glitch', icon: '⚡' },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="text-purple-500" size={24} />
        <h2 className="text-lg font-semibold">Transitions</h2>
      </div>

      <p className="text-sm text-gray-400 mb-4">
        Add smooth transitions between your video clips
      </p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {transitions.map((transition) => (
          <button
            key={transition.id}
            className="aspect-square bg-gray-700 hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center gap-2 transition group"
          >
            <span className="text-3xl group-hover:scale-110 transition">
              {transition.icon}
            </span>
            <span className="text-xs text-gray-300">{transition.name}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Duration (seconds)</label>
          <input
            type="number"
            min="0.1"
            max="3"
            step="0.1"
            defaultValue="0.5"
            className="w-full bg-gray-700 rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Easing</label>
          <select className="w-full bg-gray-700 rounded px-3 py-2 text-sm">
            <option>Linear</option>
            <option>Ease In</option>
            <option>Ease Out</option>
            <option>Ease In Out</option>
          </select>
        </div>

        <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition">
          Apply Transition
        </button>
      </div>
    </div>
  );
}