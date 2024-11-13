import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface StickyImageProps {
  src: string;
  alt: string;
}

const StickyImage = ({ src, alt }: StickyImageProps) => {
  const [isSticky, setIsSticky] = useState(false); // Controla si el sticky está en pantalla
  const [scrolling, setScrolling] = useState(true); // Controla el scroll principal
  const stickyElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Crear el IntersectionObserver para detectar cuando el StickyImage entra y sale de la pantalla
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cuando entra en pantalla (por el borde inferior), se detiene el scroll
          setScrolling(false);
          setIsSticky(true); // El sticky empieza a moverse
        } else {
          // Cuando sale de la pantalla por el borde superior, recuperamos el scroll
          setScrolling(true);
          setIsSticky(false); // El sticky ya ha salido y el scroll de la página se reactiva
        }
      },
      {
        threshold: 0, // Detectar cuando cualquier parte del elemento entra o sale
      }
    );

    // Elemento a observar
    const stickyElement = stickyElementRef.current;
    if (stickyElement) observer.observe(stickyElement);

    // Limpiar el observer al desmontar el componente
    return () => {
      if (stickyElement) observer.unobserve(stickyElement);
    };
  }, []);

  useEffect(() => {
    // Control del scroll de la página principal
    if (!scrolling) {
      document.body.style.overflow = 'hidden'; // Desactiva el scroll de la página principal
    } else {
      document.body.style.overflow = 'auto'; // Restaura el scroll
    }

    return () => {
      document.body.style.overflow = 'auto'; // Restaurar cuando el componente se desmonta
    };
  }, [scrolling]);

  return (
    <div
      ref={stickyElementRef}
      className={`transition-all duration-300 ${isSticky ? 'translate-y-[-100vh]' : ''}`}
      style={{
        position: 'relative',
        // Aparece fuera de la pantalla cuando ya se mueve al borde superior
        top: isSticky ? '0' : 'auto', // Deja que se mueva hasta el borde superior
      }}
    >
      <Image src={src} alt={alt} width={200} height={500} priority />
    </div>
  );
};

export default StickyImage;









