import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface StickyImageProps {
  src: string;
  alt: string;
}

const StickyImage = ({ src, alt }: StickyImageProps) => {
  const [offset, setOffset] = useState(0); // Controla el desplazamiento de la imagen
  const stickyElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función que se ejecuta al hacer scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Posición del scroll
      setOffset(scrollTop); // Actualiza el desplazamiento de la imagen
    };

    window.addEventListener('scroll', handleScroll); // Añadimos el listener para el scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpiamos el listener
    };
  }, []);

  return (
    <div
      ref={stickyElementRef}
      style={{
        position: 'fixed', // La imagen se mantiene fija mientras se desplaza
        bottom: `-${offset}px`, // La imagen comienza fuera de la pantalla
        left: '50%', // Centrada horizontalmente
        transform: 'translateX(-50%)', // Asegura que esté centrada
        transition: 'bottom 0.4s ease-out', // Transición suave para el movimiento
        zIndex: 10, // Asegura que esté sobre otros elementos
      }}
    >
      <Image src={src} alt={alt} width={300} height={500} priority />
    </div>
  );
};

export default StickyImage;