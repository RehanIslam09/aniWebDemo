'use client';

import './gallery.css';
import Image from 'next/image';

export default function GalleryPage() {
  // All your local images (placed in /public)
  const items = [
    { id: 1, type: 'image', src: '/image.png' },
    { id: 2, type: 'image', src: '/image copy.png' },
    { id: 3, type: 'image', src: '/image copy 2.png' },
    { id: 4, type: 'image', src: '/image copy 3.png' },
    { id: 5, type: 'image', src: '/image copy 4.png' },
    { id: 6, type: 'image', src: '/image copy 5.png' },
    { id: 7, type: 'image', src: '/image copy 6.png' },
    { id: 8, type: 'image', src: '/image copy 7.png' },
    { id: 9, type: 'image', src: '/image copy 8.png' },
    // You can mix in videos too if you want:
    {
      id: 10,
      type: 'video',
      src: '/video5796243285768937962.mp4',
    },
    {
      id: 11,
      type: 'video',
      src: '/video5796243285768937963.mp4',
    },
    { id: 12, type: 'image', src: '/image copy 9.png' },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title"> Our Memories Together </h1>
      <p className="gallery-subtitle">
        A little glimpse of our beautiful journey
      </p>

      <div className="gallery-grid">
        {items.map((item) => (
          <div key={item.id} className="gallery-item">
            {item.type === 'image' ? (
              <img src={item.src} alt={`Memory ${item.id}`} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
