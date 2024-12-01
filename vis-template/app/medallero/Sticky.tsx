import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface StickyImageProps {
  src: string;
  alt: string;
}

const StickyImage = ({ src, alt }: StickyImageProps) => {
  const [offset, setOffset] = useState(0); 
  const stickyElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; 
      setOffset(scrollTop); 
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <div
      ref={stickyElementRef}
      style={{
        position: 'fixed', 
        bottom: `-${offset}px`, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        transition: 'bottom 0.4s ease-out', 
        zIndex: 20, 
      }}
    >
      <Image src={src} alt={alt} width={100} height={500} priority />
    </div>
  );
};

export default StickyImage;