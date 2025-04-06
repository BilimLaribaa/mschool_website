import { useState } from 'react';

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const galleryImages = [
    "img (1).JPG",
"img (10).JPG",
"img (11).JPG",
"img (12).JPG",
"img (13).JPG",
"img (14).JPG",
"img (15).JPG",
"img (16).JPG",
"img (17).JPG",
"img (18).JPG",
"img (19).JPG",
"img (2).JPG",
"img (20).JPG",
"img (21).JPG",
"img (24).JPG",
"img (25).JPG",
"img (26).JPG",
"img (27).JPG",
"img (28).JPG",
"img (29).JPG",
"img (3).JPG",
"img (30).JPG",
"img (4).JPG",
"img (5).JPG",
"img (6).JPG",
"img (7).JPG",
"img (8).JPG",
"img (9).JPG"
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
