'use client';

import { Film, Scissors, Sparkles, Type, Music, Image, Layers } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: 'edit', icon: Scissors, label: 'Edit' },
    { id: 'effects', icon: Sparkles, label: 'Effects' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'audio', icon: Music, label: 'Audio' },
    { id: 'stickers', icon: Image, label: 'Stickers' },
    { id: 'transitions', icon: Layers, label: 'Transitions' },
  ];

  return (
    <aside className="w-20 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-6 gap-4">
      <div className="mb-4">
        <Film size={32} className="text-purple-500" />
      </div>
      
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'hover:bg-gray-700 text-gray-400'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs">{tab.label}</span>
          </button>
        );
      })}
    </aside>
  );
}