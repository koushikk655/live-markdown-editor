import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const convertMarkdownToHtml = (markdown) => {
  const rawMarkup = marked(markdown);
  return DOMPurify.sanitize(rawMarkup);
};