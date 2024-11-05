import React, { useRef } from 'react';

const HorizontalTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const scrollContainer = timelineRef.current;
    if (scrollContainer) {
      // Multiplicamos deltaY por un factor para ajustar la velocidad de desplazamiento
      scrollContainer.scrollLeft += event.deltaY * 2; 
    }
  };

  return (
    <div
      className="w-screen h-screen overflow-x-hidden overflow-y-hidden bg-white flex items-center justify-center"
      onWheel={handleScroll}
    >
      <div
        ref={timelineRef}
        className="w-[300vw] flex space-x-10 py-20 overflow-x-auto scrollbar-hide"
      >
        <div className="w-1/5 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">1900</h2>
          <p>Las mujeres fueron incluidas por primera vez en los Juegos Olímpicos en París.</p>
          {/* Imagen y más contenido */}
        </div>

        <div className="w-1/5 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">1928</h2>
          <p>Incluidas por primera vez en el atletismo.</p>
          {/* Imagen y más contenido */}
        </div>

        <div className="w-1/5 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">1981</h2>
          <p>Creación de la Comisión de Mujeres y Deportes en el COI.</p>
          {/* Imagen y más contenido */}
        </div>

        <div className="w-1/5 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">1991</h2>
          <p>Programa Olímpico para Mujeres y Deportes.</p>
          {/* Imagen y más contenido */}
        </div>

        <div className="w-1/5 p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">1996</h2>
          <p>Primeros Juegos Olímpicos en incluir a todos los eventos femeninos.</p>
          {/* Imagen y más contenido */}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;