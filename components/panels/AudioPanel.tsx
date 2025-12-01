'use client';

import { Music, Upload, Volume2 } from 'lucide-react';

export default function AudioPanel() {
  const musicLibrary = [
    { id: 1, name: 'Upbeat Pop', duration: '2:45', genre: 'Pop' },
    { id: 2, name: 'Chill Vibes', duration: '3:20', genre: 'Lo-fi' },
    { id: 3, name: 'Epic Cinematic', duration: '4:10', genre: 'Cinematic' },
    { id: 4, name: 'Happy Acoustic', duration: '2:30', genre: 'Acoustic' },
  ];

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Music className="text-purple-500" size={24} />
        <h2 className="text-lg font-semibold">Audio</h2>
      </div>

      <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold flex items-center justify-center gap-2 mb-6 hover:from-purple-600 hover:to-pink-700 transition">
        <Upload size={20} />
        Upload Audio
      </button>

      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-3 text-gray-300">Music Library</h3>
        <div className="space-y-2">
          {musicLibrary.map((track) => (
            <div
              key={track.id}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg cursor-pointer transition"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{track.name}</span>
                <span className="text-xs text-gray-400">{track.duration}</span>
              </div>
              <span className="text-xs text-purple-400">{track.genre}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 flex items-center gap-2">
            <Volume2 size={16} />
            Volume
          </label>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="80"
            className="w-full"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Fade In (seconds)</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.5"
            defaultValue="0"
            className="w-full bg-gray-700 rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Fade Out (seconds)</label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.5"
            defaultValue="0"
            className="w-full bg-gray-700 rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="pt-4 border-t border-gray-700">
          <h3 className="text-sm font-semibold mb-3 text-gray-300">Audio Effects</h3>
          <div className="space-y-2">
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
              Echo
            </button>
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
              Reverb
            </button>
            <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition">
              Bass Boost
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}