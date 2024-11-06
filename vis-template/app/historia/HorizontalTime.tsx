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
          <div className="w-screen flex-shrink-0 ml-16">
            <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1900</div>
            <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
              Las mujeres <br /> fueron incluidas <br /> por primera vez
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            Aunque los Juegos Olímpicos de 1896 <br /> no permitieron la participación femenina, 
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            en 1900 las mujeres participan por <br /> primera vez en deportes como el <br /> tenis y el golf. 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            De las 997 personas participantes, solo  22 fueron mujeres, representando <br /> un pequeño pero significativo paso hacia la inclusión femenina en el evento <br /> deportivo más prestigioso del mundo. 
            </p>
            <Image 
          src="/1900.png" 
          alt="Olympic Women Participation"
          width={350}
          height={200}
          className="mt-[-430px] rounded-xl"
        />
          </div>

          {/* Año 1900 */}
          <div className="w-screen flex-shrink-0 ml-16">
            <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1900</div>
            <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
              Las mujeres <br /> fueron incluidas <br /> por primera vez
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            Aunque los Juegos Olímpicos de 1896 <br /> no permitieron la participación femenina, 
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            en 1900 las mujeres participan por <br /> primera vez en deportes como el <br /> tenis y el golf. 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            De las 997 personas participantes, solo  22 fueron mujeres, representando <br /> un pequeño pero significativo paso hacia la inclusión femenina en el evento <br /> deportivo más prestigioso del mundo. 
            </p>
            <Image 
          src="/1900.png" 
          alt="Olympic Women Participation"
          width={350}
          height={200}
          className="mt-[-430px] rounded-xl"
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
