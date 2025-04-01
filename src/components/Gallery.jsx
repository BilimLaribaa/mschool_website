import { useState } from 'react';

export default function AdmissionArea() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const galleryImages = [
    "CIN00200_1.JPG", "CIN00201_1.JPG", "CIN00202_1.JPG", "CIN00203_1.JPG",
    "CIN00206_1.JPG", "CIN00210_1.JPG", "CIN00212_1.JPG",
    "CIN00213_1.JPG", "CIN00214_1.JPG", "CIN00215_1.JPG", "CIN00216_1.JPG",
    "CIN00217_1.JPG", "CIN00218_1.JPG", "CIN00220_1.JPG", "CIN00221_1.JPG",
    "CIN00222_1.JPG", "CIN00225_1.JPG", "CIN00226_1.JPG", "CIN00227_1.JPG",
    "CIN00228_1.JPG", "CIN00229_1.JPG", "CIN00230_1.JPG", "CIN00231_1.JPG",
    "CIN00234_1.JPG", "CIN00236_1.JPG", "CIN00238_1.JPG", "CIN00225_1.JPG",
    "CIN00253_1.JPG"
  ];

  const openLightbox = (imagePath) => {
    setSelectedImage(imagePath);
    setLightboxOpen(true);
  };

  const generateGalleryBundle = (images) => {
    return images.reduce((bundles, _, index) => {
      if (index % 2 === 0) {
        bundles.push(
          <div key={index} className="course-categorie-bundle">
            <div className="single-course mb-30">
              <div className="course-img" onClick={() => openLightbox(`/gallery/${images[index]}`)}>
                <img src={`/gallery/${images[index]}`} alt="" style={{cursor: 'pointer'}} />
              </div>
            </div>
            {images[index + 1] && (
              <div className="single-course mb-30">
                <div className="course-img" onClick={() => openLightbox(`/gallery/${images[index + 1]}`)}>
                  <img src={`/gallery/${images[index + 1]}`} alt="" style={{cursor: 'pointer'}} />
                </div>
              </div>
            )}
          </div>
        );
      }
      return bundles;
    }, []);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  return (
    <div className="admission-area pt-125 pb-130 bg-img-position">
      <div className="container">
        <div className="admission-title text-center">
          <h2>Our Gallery</h2>
          <p>
            Take a glimpse into our vibrant school life through our photo gallery.
            Explore our facilities, student activities, and special moments that make
            MS School a unique place of learning and growth.
          </p>
        </div>

        <div className="tab-content jump">
          {[1, 2, 3, 4].map((tabNum) => (
            <div 
              key={tabNum}
              className={`tab-pane ${tabNum === 1 ? 'active' : ''}`} 
              id={`course-categorie-${tabNum}`}
            >
              <div className="course-slider-active-2 nav-style-1 owl-carousel">
                {generateGalleryBundle(shuffleArray(galleryImages))}
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div 
            className="lightbox-overlay" 
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000
            }}
          >
            <img 
              src={selectedImage} 
              alt=""
              style={{
                maxWidth: '90%',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
