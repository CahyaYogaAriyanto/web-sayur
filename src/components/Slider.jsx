import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import React, { useState } from 'react';
import './Slider.css'; 

import petaniKentang1 from '../assets/petani_kentang.jpg';
import petaniKentang2 from '../assets/kentang_dikebun.jpg';
import petaniKobis1 from '../assets/petani_kobis.jpg';
import petaniKobis2 from '../assets/kubis_dikebun.jpeg';
import petaniWortel1 from '../assets/petani_wortel.jpg';
import petaniWortel2 from '../assets/wortel_dikebun.jpeg';

const images = [
    { src: petaniKentang1, alt: 'Gambar 1' },
    { src: petaniKobis2, alt: 'Gambar 5' },
    { src: petaniWortel2, alt: 'Gambar 6' },
    { src: petaniKobis1, alt: 'Gambar 2' },
    { src: petaniWortel1, alt: 'Gambar 3' },
    { src: petaniKentang2, alt: 'Gambar 4' },
];

export default function ContenSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="slider">
            <button onClick={prevImage}><GrPrevious /></button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <button onClick={nextImage}><GrNext/></button>
        </div>
    );
}