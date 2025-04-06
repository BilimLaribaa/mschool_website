import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Gallery() {
  const images = [
    "img (1).JPG", "img (2).JPG", "img (3).JPG", "img (4).JPG", "img (5).JPG",
    "img (6).JPG", "img (7).JPG", "img (8).JPG", "img (9).JPG", "img (10).JPG",
    "img (11).JPG", "img (12).JPG", "img (13).JPG", "img (14).JPG", "img (15).JPG",
    "img (16).JPG", "img (17).JPG", "img (18).JPG", "img (19).JPG", "img (20).JPG",
    "img (21).JPG", "img (22).JPG", "img (23).JPG", "img (24).JPG", "img (25).JPG",
    "img (26).JPG", "img (27).JPG", "img (28).JPG", "img (29).JPG", "img (30).JPG","web (1).jpeg","web (10).jpeg","web (11).jpeg","web (12).jpeg","web (13).jpeg","web (14).jpeg","web (15).jpeg","web (16).jpeg","web (17).jpeg","web (18).jpeg","web (19).jpeg","web (2).jpeg","web (20).jpeg","web (21).jpeg","web (22).jpeg","web (23).jpeg","web (24).jpeg","web (3).jpeg","web (4).jpeg","web (5).jpeg","web (6).jpeg","web (7).jpeg","web (8).jpeg","web (9).jpeg"
  ];

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setAnimating(true);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setAnimating(false);
  };

  const goNext = () => {
    setAnimating(false);
    setTimeout(() => {
      setLightboxIndex((prev) => (prev + 1) % images.length);
      setAnimating(true);
    }, 50);
  };

  const goPrev = () => {
    setAnimating(false);
    setTimeout(() => {
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
      setAnimating(true);
    }, 50);
  };

  // 🔑 Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
        if (e.key === "Escape") closeLightbox();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div>
      <Breadcrumbs title="Gallery" description="Our Gallery" />

      <style>{`
        .masonry-container {
          column-count: 3;
          column-gap: 1rem;
          padding: 2rem;
        }

        @media (max-width: 992px) {
          .masonry-container {
            column-count: 2;
          }
        }

        @media (max-width: 576px) {
          .masonry-container {
            column-count: 1;
          }
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          cursor: pointer;
        }

        .masonry-item img {
          width: 100%;
          display: block;
          height: auto;
          transition: transform 0.3s ease;
        }

        .masonry-item:hover img {
          transform: scale(1.03);
        }

        .lightbox-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-image {
          max-width: 90%;
          max-height: 80%;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(255,255,255,0.2);
          opacity: 0;
        }

        .lightbox-image.animate {
          animation: zoomIn 0.3s ease;
          opacity: 1;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 32px;
          color: white;
          cursor: pointer;
          font-weight: bold;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 40px;
          color: white;
          cursor: pointer;
          user-select: none;
          padding: 10px;
        }

        .lightbox-prev {
          left: 20px;
        }

        .lightbox-next {
          right: 20px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="container pt-5 pb-5">
        <div className="masonry-container">
          {images.map((src, index) => (
            <div
              key={index}
              className="masonry-item"
              onClick={() => openLightbox(index)}
            >
              <img src={`/gallery/${src}`} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>&times;</span>
          <span className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>&#10094;</span>
          <img
            src={`/gallery/${images[lightboxIndex]}`}
            alt={`Gallery ${lightboxIndex + 1}`}
            className={`lightbox-image ${animating ? "animate" : ""}`}
            onClick={(e) => e.stopPropagation()}
          />
          <span className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); goNext(); }}>&#10095;</span>
        </div>
      )}
    </div>
  );
}
