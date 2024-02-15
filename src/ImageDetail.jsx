import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import images from './Characters'; // Ensure the path is correct

const ImageDetail = () => {
  let { imageName } = useParams();
  let navigate = useNavigate();

  // Utility function to normalize image names for comparison
  const normalizeName = (name) => name.toLowerCase().replace(/-/g, ' ');

  // Find the matching image based on URL parameter
  const image = images.find(img => normalizeName(img.name) === normalizeName(imageName));

  return (
    <div className="image-detail" style={{ position: 'relative' }}>
      <button className='back-button' onClick={() => navigate('/')} >
        Back to Home
      </button>
      {/* <img className='image-inside-character' src="/characters/Claudio-Serafino.png" alt="Image not found" /> */}
      {image ? (
        <>
          <h2 className='character-name-inside'>{image.name}</h2>
          <img className='image-inside-character' src={image.src} alt={image.name}  />
        </>
      ) : (
        <div>Image not found</div>
        
      )}
    </div>
  );
};

export default ImageDetail;
