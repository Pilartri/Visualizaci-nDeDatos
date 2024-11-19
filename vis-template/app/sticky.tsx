import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface StickyImageProps {
  src: string;
  alt: string;
}

const StickyImage = ({ src, alt }: StickyImageProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      },
      {
        threshold: 0,
      }
    );

    const stickyElement = stickyElementRef.current;
    if (stickyElement) observer.observe(stickyElement);

    return () => {
      if (stickyElement) observer.unobserve(stickyElement);
    };
  }, []);

  return (
    <div
      ref={stickyElementRef}
      className={`transition-all duration-[10s] ${
        isSticky ? 'translate-y-[-100vh]' : ''
      }`}
      style={{
        position: 'relative',
      }}
    >
      <Image src={src} alt={alt} width={300} height={500} priority />
    </div>
  );
};

export default StickyImage;











