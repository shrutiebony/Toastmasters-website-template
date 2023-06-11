import React, { useState, useEffect, useRef } from 'react';
import './Collage.css';
import image1 from './GalleryImages/Toastmaster1.jpeg';
import image2 from './GalleryImages/Toastmaster2.png';
import image3 from './GalleryImages/Toastmaster3.png';
import image4 from './GalleryImages/Toastmaster4.png';
import image5 from './GalleryImages/Toastmaster5.png';
import image6 from './GalleryImages/Toastmaster6.png';
import image7 from './GalleryImages/Toastmaster7.png';
import image8 from './GalleryImages/Toastmaster8.png';
import image9 from './GalleryImages/Toastmaster9.png';
import image10 from './GalleryImages/Toastmaster10.png';
import image11 from './GalleryImages/Toastmaster11.png';
import image12 from './GalleryImages/Toastmaster12.png';



const Collage = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,image10,image11,image12];

  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, []);

  return (
    <div className="collage-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="collage-image"
          onClick={() => handleImageClick(image)}
        />
      ))}

      {selectedImage && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <img
              src={selectedImage}
              alt="Selected Image"
              className="selected-image"
            />
            <span className="close" onClick={handleCloseModal}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collage;
