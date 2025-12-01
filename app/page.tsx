'use client';

import { useState } from 'react';
import VideoEditor from '@/components/VideoEditor';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [activeTab, setActiveTab] = useState('edit');

  return (
    <main className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header />
        <VideoEditor activeTab={activeTab} />
      </div>
    </main>
  );
}