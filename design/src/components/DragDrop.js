import React, { useState } from 'react';
import './DragDrop.css'

  

const FileInput = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleFileSelect = (event) => {
    event.preventDefault();
    alert('jj')
    
    setFiles(event.target.files);
  };

  return (
    <div className="form-group">
      <div 
        className="custom-file text-center "
        onDrop={handleDrop} 
        onDragOver={handleDragOver} 
        // onClick={handleFileSelect} 
        style={{ 
        //   border: '1px solid black', 
          padding: '10px', 
          margin: '10px 0' 
        }}
      >
        <p className='mt-4' >Drop Files Here or Click to Upload</p>
      </div>
        <p className='fw-lighter' >{files.length ? `Files: ${files.length}` : 'No files selected'}</p>
    </div>
  );
};

export default FileInput;

