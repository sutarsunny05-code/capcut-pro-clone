'use client';

import { useState, useRef } from 'react';
import VideoPreview from './VideoPreview';
import Timeline from './Timeline';
import ToolPanel from './ToolPanel';
import { Upload } from 'lucide-react';

interface VideoEditorProps {
  activeTab: string;
}

export default function VideoEditor({ activeTab }: VideoEditorProps) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col bg-gray-900">
          {/* Video Preview */}
          <div className="flex-1 flex items-center justify-center p-6">
            {videoUrl ? (
              <VideoPreview videoUrl={videoUrl} />
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <Upload size={64} className="mx-auto text-gray-600 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Import Your Video</h2>
                  <p className="text-gray-400">Drag and drop or click to upload</p>
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition"
                >
                  Choose Video File
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>

          {/* Timeline */}
          {videoUrl && (
            <div className="h-64 bg-gray-800 border-t border-gray-700">
              <Timeline videoUrl={videoUrl} />
            </div>
          )}
        </div>

        {/* Tool Panel */}
        <ToolPanel activeTab={activeTab} />
      </div>
    </div>
  );
}