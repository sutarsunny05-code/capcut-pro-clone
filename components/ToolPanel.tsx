'use client';

import EffectsPanel from './panels/EffectsPanel';
import TextPanel from './panels/TextPanel';
import AudioPanel from './panels/AudioPanel';
import TransitionsPanel from './panels/TransitionsPanel';

interface ToolPanelProps {
  activeTab: string;
}

export default function ToolPanel({ activeTab }: ToolPanelProps) {
  const renderPanel = () => {
    switch (activeTab) {
      case 'effects':
        return <EffectsPanel />;
      case 'text':
        return <TextPanel />;
      case 'audio':
        return <AudioPanel />;
      case 'transitions':
        return <TransitionsPanel />;
      default:
        return (
          <div className="p-6 text-center text-gray-400">
            <p>Select a tool from the sidebar to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="w-80 bg-gray-800 border-l border-gray-700 overflow-y-auto">
      {renderPanel()}
    </div>
  );
}