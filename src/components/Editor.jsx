import React from 'react';
import { FileEdit } from 'lucide-react';

function Editor({ value, onChange }) {
  return (
    <div className="flex-1 flex flex-col h-full min-w-[400px]">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white">
        <FileEdit size={20} />
        <h2 className="font-semibold">Markdown Editor</h2>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-4 bg-gray-900 text-gray-100 font-mono resize-none focus:outline-none w-full min-h-[500px]"
        placeholder="# Start typing your markdown here...

## Features
- Real-time preview
- Syntax highlighting
- Clean interface
"
      />
    </div>
  );
}

export default Editor;