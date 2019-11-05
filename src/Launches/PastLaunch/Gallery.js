import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Gallery = ({images}) => (
  <Carousel dynamicHeight={true} showThumbs={false}>
    {images.map(link => (
      <div key={link}>
        <img alt="rocket-launch" width="100%" src={link} />
      </div>
    ))}
  </Carousel>
);

export default Gallery;
