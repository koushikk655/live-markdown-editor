import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { FileText } from 'lucide-react';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor!

## Try it out
Start typing in the editor on the left. Your markdown will be rendered in real-time on the right.

### Features
- Real-time preview
- Syntax highlighting
- Clean interface
- Security focused

\`\`\`javascript
// Example code block
function hello() {
  console.log("Hello, Markdown!");
}
\`\`\`

`);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center gap-2">
          <FileText size={24} />
          <h1 className="text-xl font-bold">Live Markdown Editor</h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex h-[calc(100vh-8rem)]">
          <Editor value={markdown} onChange={setMarkdown} />
          <div className="w-px bg-gray-200" />
          <Preview markdown={markdown} />
        </div>
      </main>
      
    </div>
  );
}

export default App;