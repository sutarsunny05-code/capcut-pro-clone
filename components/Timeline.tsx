'use client';

import { useState, useRef, useEffect } from 'react';
import { Scissors, Copy, Trash2, Plus } from 'lucide-react';

interface TimelineProps {
  videoUrl: string;
}

interface Clip {
  id: string;
  start: number;
  duration: number;
  name: string;
}

export default function Timeline({ videoUrl }: TimelineProps) {
  const [clips, setClips] = useState<Clip[]>([
    { id: '1', start: 0, duration: 10, name: 'Video Clip 1' }
  ]);
  const [selectedClip, setSelectedClip] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const pixelsPerSecond = 50 * zoom;

  const handleSplitClip = () => {
    if (!selectedClip) return;
    
    const clip = clips.find(c => c.id === selectedClip);
    if (!clip) return;

    const splitPoint = clip.duration / 2;
    const newClips = clips.flatMap(c => {
      if (c.id === selectedClip) {
        return [
          { ...c, duration: splitPoint, id: `${c.id}-a` },
          { ...c, start: c.start + splitPoint, duration: c.duration - splitPoint, id: `${c.id}-b` }
        ];
      }
      return c;
    });

    setClips(newClips);
    setSelectedClip(null);
  };

  const handleDeleteClip = () => {
    if (!selectedClip) return;
    setClips(clips.filter(c => c.id !== selectedClip));
    setSelectedClip(null);
  };

  const handleDuplicateClip = () => {
    if (!selectedClip) return;
    
    const clip = clips.find(c => c.id === selectedClip);
    if (!clip) return;

    const maxEnd = Math.max(...clips.map(c => c.start + c.duration));
    const newClip = {
      ...clip,
      id: `${clip.id}-copy-${Date.now()}`,
      start: maxEnd
    };

    setClips([...clips, newClip]);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Timeline Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 border-b border-gray-700">
        <div className="flex gap-2">
          <button
            onClick={handleSplitClip}
            disabled={!selectedClip}
            className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded flex items-center gap-2 text-sm transition"
          >
            <Scissors size={16} />
            Split
          </button>
          <button
            onClick={handleDuplicateClip}
            disabled={!selectedClip}
            className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded flex items-center gap-2 text-sm transition"
          >
            <Copy size={16} />
            Duplicate
          </button>
          <button
            onClick={handleDeleteClip}
            disabled={!selectedClip}
            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed rounded flex items-center gap-2 text-sm transition"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Zoom:</span>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="w-32"
          />
          <span className="text-sm text-gray-400">{Math.round(zoom * 100)}%</span>
        </div>
      </div>

      {/* Timeline Tracks */}
      <div className="flex-1 overflow-auto p-4" ref={timelineRef}>
        {/* Time Ruler */}
        <div className="h-8 bg-gray-900 rounded-t-lg flex items-center px-2 mb-2">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="text-xs text-gray-500"
              style={{ width: `${pixelsPerSecond}px` }}
            >
              {i}s
            </div>
          ))}
        </div>

        {/* Video Track */}
        <div className="timeline-track relative">
          <div className="absolute left-2 top-2 text-xs text-gray-400 font-semibold">
            VIDEO
          </div>
          <div className="pt-8">
            {clips.map((clip) => (
              <div
                key={clip.id}
                className={`video-clip ${selectedClip === clip.id ? 'selected' : ''}`}
                style={{
                  left: `${clip.start * pixelsPerSecond}px`,
                  width: `${clip.duration * pixelsPerSecond}px`,
                  top: '10px'
                }}
                onClick={() => setSelectedClip(clip.id)}
              >
                <span className="font-medium">{clip.name}</span>
                <span className="ml-auto text-xs opacity-75">{clip.duration}s</span>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Track */}
        <div className="timeline-track relative mt-2">
          <div className="absolute left-2 top-2 text-xs text-gray-400 font-semibold">
            AUDIO
          </div>
        </div>

        {/* Text Track */}
        <div className="timeline-track relative mt-2">
          <div className="absolute left-2 top-2 text-xs text-gray-400 font-semibold">
            TEXT
          </div>
        </div>
      </div>
    </div>
  );
}