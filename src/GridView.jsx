import React from 'react';
import './GridView.css'; // Assuming you have some CSS for styling
import { Link } from 'react-router-dom';
import images from './Characters';

const GridView = () => {
 

  const extractName = (src) => {
    const lastSlashIndex = src.lastIndexOf('/') + 1;
    const nameWithExtension = src.substring(lastSlashIndex);
    const nameWithoutExtension = nameWithExtension.split('.')[0];
    return nameWithoutExtension;
  };

  return (
    <>
    <div className="container">
      <h1 className="title">LPM - v0.1</h1>
      <div className="grid">
        {images.map(image => (
          <div key={image.id} className="image-container">
            <Link to={`/image/${extractName(image.src)}`}>
              <img className='patates' src={image.src} alt="" />
              <div className="image-name">{extractName(image.src)}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default GridView;
