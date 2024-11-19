"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const HorizontalTime: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!sectionRef.current || !containerRef.current) return;

      const section = sectionRef.current;
      const container = containerRef.current;

      // Calcula si el componente está en el centro del viewport
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isInCenter =
        sectionRect.top <= viewportHeight / 2 &&
        sectionRect.bottom >= viewportHeight / 2;

      if (isInCenter) {
        e.preventDefault(); // Evita el scroll vertical dentro del componente

        // Movimiento horizontal basado en el delta del scroll
        const horizontalScrollAmount = e.deltaY;
        container.scrollLeft += horizontalScrollAmount;

        // Permite el scroll hacia arriba si está en la posición inicial (x = 0)
        if (container.scrollLeft === 0 && horizontalScrollAmount < 0) {
          window.scrollBy(0, e.deltaY); // Habilita el scroll hacia arriba
        }

        // Permite el scroll hacia abajo si se llega al final del contenido
        if (
          container.scrollLeft >= container.scrollWidth - container.clientWidth &&
          horizontalScrollAmount > 0
        ) {
          window.scrollBy(0, e.deltaY); // Habilita el scroll hacia abajo
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative mt-40 overflow-hidden h-screen">
      {/* Contenedor horizontal */}
      <div
        ref={containerRef}
        className="flex space-x-64 py-20"
        style={{
          display: "flex",
          overflowX: "hidden",
          width: "100%", // Ancho total del contenido horizontal
          height: "100%", // Altura completa del contenedor
        }}
      >
        {/* Año 1900 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1900</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Las mujeres <br /> fueron incluidas <br /> por primera vez
          </p>
          <Image
            src="/1900.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>

        {/* Año 1928 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1928</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Incluidas por <br /> primera vez <br /> en atletismo
          </p>
          <Image
            src="/1928.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>

        {/* Año 1981 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1981</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Creación de la <br /> Comisión de Mujeres <br /> en el Deporte en el COI
          </p>
          <Image
            src="/1981.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>

        {/* Año 1991 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1991</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Programa olímpico de <br /> mujeres y deporte
          </p>
          <Image
            src="/1991.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>

        {/* Año 1996 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1996</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Primeros Juegos Olímpicos con <br /> más de 100 eventos femeninos
          </p>
          <Image
            src="/1996.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>

        {/* Año 2012 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">2012</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Todas las delegaciones <br /> nacionales incluyeron <br /> mujeres en sus equipos
          </p>
          <Image
            src="/2012.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>

        {/* Año 2024 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">2024</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Participación 50% femenina
          </p>
          <Image
            src="/2024.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-430px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalTime;
