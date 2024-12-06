import React from 'react';
import { Eye } from 'lucide-react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import 'highlight.js/styles/github-dark.css';
import hljs from 'highlight.js';

function Preview({ markdown }) {
  React.useEffect(() => {
    // Configure marked with highlight.js
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
      gfm: true
    });
  }, []);

  const createMarkup = () => {
    const rawMarkup = marked(markdown);
    const cleanMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: cleanMarkup };
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white">
        <Eye size={20} />
        <h2 className="font-semibold">Preview</h2>
      </div>
      <div 
        className="flex-1 p-6 bg-gray-900 overflow-auto prose prose-slate max-w-none"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </div>
  );
}

export default Preview;