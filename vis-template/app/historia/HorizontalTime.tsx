import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const HorizontalTime: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInsideSection, setIsInsideSection] = useState(false);

  // Manejo del scroll
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      // Solo prevenir el scroll vertical cuando estamos dentro de la sección de la línea de tiempo
      if (isInsideSection && sectionRef.current) {
        e.preventDefault(); // Evita el scroll vertical dentro de la sección

        // Scroll horizontal en base al deltaY (movimiento del scroll vertical)
        sectionRef.current.scrollLeft += e.deltaY;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isInsideSection]);

  // Detecta cuando la sección entra o sale de la vista
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Comprobamos si la sección está al menos parcialmente visible (umbral del 50%)
        setIsInsideSection(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // Umbral del 50% de la sección visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-[200vh] bg-white pt-10">
      {/* Contenedor de la línea de tiempo */}
      <div
        ref={sectionRef}
        className="relative mt-40 overflow-hidden h-screen"
      >
        <div
          className="flex space-x-64 py-20 transition-transform duration-500 ease-out"
          style={{ width: "500vw" }} // Línea de tiempo mucho más ancha que el viewport
        >
          {/* Año 1900 */}
          <div className="w-screen flex-shrink-0">
            <div className="text-purple-800 text-3xl font-bold">1900</div>
            <p className="mt-2 text-gray-700">
              Las mujeres fueron incluidas por primera vez en los Juegos Olímpicos en tenis y golf.
            </p>
            <img
              src="/image-1900.jpg"
              alt="1900"
              className="mt-4 w-full h-40 object-cover"
            />
          </div>

          {/* Año 1928 */}
          <div className="w-screen flex-shrink-0">
            <div className="text-purple-800 text-3xl font-bold">1928</div>
            <p className="mt-2 text-gray-700">
              Incluidas por primera vez en el atletismo.
            </p>
            <img
              src="/image-1928.jpg"
              alt="1928"
              className="mt-4 w-full h-40 object-cover"
            />
          </div>

          {/* Año 1981 */}
          <div className="w-screen flex-shrink-0">
            <div className="text-purple-800 text-3xl font-bold">1981</div>
            <p className="mt-2 text-gray-700">
              Creación de la Comisión de Mujeres en el Deporte en el COI.
            </p>
          </div>

          {/* Año 1991 */}
          <div className="w-screen flex-shrink-0">
            <div className="text-purple-800 text-3xl font-bold">1991</div>
            <p className="mt-2 text-gray-700">
              Programa Olímpico para Mujeres y Deporte.
            </p>
          </div>

          {/* Año 1996 */}
          <div className="w-screen flex-shrink-0">
            <div className="text-purple-800 text-3xl font-bold">1996</div>
            <p className="mt-2 text-gray-700">
              Primeros Juegos Olímpicos en los que se permitió el boxeo femenino.
            </p>
            <img
              src="/image-1996.jpg"
              alt="1996"
              className="mt-4 w-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTime;
