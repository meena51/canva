// src/EditorPage.js
import React, { useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './EditorPage.css';

const EditorPage = () => {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#editor',
      height: '100vh',
      width: 'auto',
      fromElement: true,
      storageManager: false,
      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section',
            label: '<b>Section</b>',
            content: '<section><h1>Section Title</h1><p>Your content here...</p></section>',
          },
          {
            id: 'text',
            label: '<b>Text</b>',
            content: '<div><p>Insert your text here</p></div>',
          },
          {
            id: 'image',
            label: '<b>Image</b>',
            content: '<img src="https://via.placeholder.com/150" alt="Placeholder"/>',
          },
        ],
      },
    });
  }, []);

  return (
    <div className="editor-container">
      <div id="blocks" className="blocks-sidebar">
        <h2>Blocks</h2>
      </div>
      <div id="editor" className="editor-canvas"></div>
    </div>
  );
};

export default EditorPage;
