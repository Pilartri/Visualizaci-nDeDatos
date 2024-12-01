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

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const isInCenter =
        sectionRect.top <= viewportHeight / 2 &&
        sectionRect.bottom >= viewportHeight / 2;

      if (isInCenter) {
        e.preventDefault(); 

        const horizontalScrollAmount = e.deltaY;
        container.scrollLeft += horizontalScrollAmount;

        if (container.scrollLeft === 0 && horizontalScrollAmount < 0) {
          window.scrollBy(0, e.deltaY); 
        }

        if (
          container.scrollLeft >= container.scrollWidth - container.clientWidth &&
          horizontalScrollAmount > 0
        ) {
          window.scrollBy(0, e.deltaY);
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
      {/* linea de tiempo */}
      <div className="flex space-x-[1260px] mb-[-24px] ml-16">
      <div className="w-10 h-10 bg-purple-800 rounded-full"></div>
      <div className="w-10 h-10 bg-purple-800 rounded-full"></div>
      </div>
      <hr className="border-0 h-[5px] w-[200vw] bg-purple-800 mb-[-40px]" />
      {/* Contenedor horizontal */}
      <div
        ref={containerRef}
        className="flex space-x-[-120px] py-20"
        style={{
          display: "flex",
          overflowX: "hidden",
          width: "100%", 
          height: "100%", 
        }}
        >
        
        {/* Año 1900 */}
        <div className="w-screen flex-shrink-0 ml-16">
          <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1900</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Las mujeres <br /> fueron incluidas <br /> por primera vez
          </p>
          <p className="mt-2 ml-[400px] text-md font-light">Aunque los Juegos Olímpicos de 1896 <br />  no permitieron la participación femenina, </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> en 1900 las mujeres <br />  participaron por primera <br />  vez en deportes como el <br /> tenis y el golf.</p>
          <p className="mt-2 ml-[400px] text-sm font-light"> De las 997 personas participantes, solo 22 fueron mujeres, <br />  representando un pequeño pero significativo paso hacia la <br /> inclusión femenina en el evento deportivo más prestigioso <br />  del mundo.</p>
          <Image
            src="/1900.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-450px] rounded-xl"
          />
        </div>


        {/* Año 1928 */}
        <div className="w-screen flex-shrink-0 ml-16">
        <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1928</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
          Incluidas por <br /> primera vez <br />  en atletismo
          </p>
          <p className="mt-2 ml-[400px] text-md font-light">Los Juegos Olímpicos de Ámsterdam </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> fueron los primeros en <br /> incluir competencias de <br />  atletismo para mujeres,</p>
          <p className="mt-2 ml-[400px] text-sm font-light">un deporte históricamente dominado por hombres. <br /> Las atletas compitieron en disciplinas como los 100 <br />  metros y el lanzamiento de disco. Sin embargo, las <br /> reacciones a su participación en pruebas de resistencia <br />  reflejaron prejuicios persistentes sobre la capacidad <br />  física femenina.</p>
          <Image
            src="/1928.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-450px] rounded-xl"
          />
        </div>

        {/* Año 1981 */}
        <div className="w-screen flex-shrink-0 ml-16">
        <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1981</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
          Creación de la <br />Comisión de Mujeres <br />en el Deporte en el COI
          </p>
          <p className="mt-2 ml-[400px] text-md font-light">El Comité Olímpico Internacional (COI) dio un paso <br />histórico hacia la igualdad de género en el ámbito <br /> deportivo al crear la </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> Comisión de Mujeres en el <br />Deporte, liderada por la <br /> influyente Anita DeFrantz.</p>
          <p className="mt-2 ml-[400px] text-sm font-light"> Esta comisión, pionera en su época, se centró en la promoción<br /> y desarrollo de políticas que fomentaran la participación femenina <br />en los Juegos Olímpicos y otros eventos deportivos internacionales</p>
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
          Programa Olímpico <br />de Mujeres y Deporte
          </p>
          <p className="mt-2 ml-[400px] text-md font-light">El COI fortaleció su compromiso con la <br /> equidad de género al establecer el </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> Programa Olímpico <br />de Mujeres y Deporte</p>
          <p className="mt-2 ml-[400px] text-sm font-light"> cuyo objetivo principal era aumentar la participación  <br />femenina en el ámbito deportivo y proporcionar apoyo <br /> integral a las mujeres en todas las disciplinas.</p>
          <p className="mt-2 ml-[400px] text-sm font-light"> Esta iniciativa fue una respuesta directa a la subrepresentación <br /> femenina en los deportes olímpicos y representó un avance hacia<br /> la creación de un ambiente inclusivo y equitativo en cada nueva <br />edición de los Juegos Olímpicos.</p>
          <Image
            src="/1991.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-420px] rounded-xl"
          />
        </div>

        {/* Año 1996 */}
        <div className="w-screen flex-shrink-0 ml-16">
        <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1996</div>
          <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
          Primeros Juegos Olímpicos <br /> con más de 100 eventos femeninos
          </p>
          <p className="mt-2 ml-[400px] text-md font-light">En los Juegos Olímpicos de Atlanta, las mujeres  compitieron <br /> en más de 100 eventos, una cifra sin precedentes. Además, <br />el softbol y el fútbol femenino debutaron como deportes <br /> olímpicos, aumentando la visibilidad de las atletas femeninas <br />y su impacto en el evento. </p>
          <p className="mt-2 ml-[400px] text-sm font-light"> Este hito reflejó el compromiso continuo hacia la inclusión de género, <br /> permitiendo que más mujeres compitieran en disciplinas de equipo <br />  y contribuyendo al </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> reconocimiento global de sus <br /> habilidades y logros en el deporte. </p>
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
          <p className="mt-2 ml-[400px] text-md font-light">En los Juegos Olímpicos de Londres, además de </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> incluir a las mujeres en <br />todas las delegaciones, </p>
          <p className="mt-2 ml-[400px] text-sm font-light"> se marcó un hito en la historia del deporte al ser la primera vez <br /> en que el boxeo femenino fue reconocido como disciplina olímpica. </p>
          <p className="mt-2 ml-[400px] text-sm font-light"> Esto representó un avance significativo en la igualdad de género <br /> en el ámbito deportivo y abrió nuevas oportunidades para que <br />mujeres de todo el mundo pudieran competir en una disciplina <br /> previamente exclusiva para hombres.</p>
          <Image
            src="/2021.png"
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
          Primeros Juegos Olímpicos <br /> en alcanzar una <br /> participación  equitativa
          </p>
          <p className="mt-2 ml-[400px] text-md font-light">Participaron aproximadamente 5,250 mujeres, </p>
          <p className="mt-2 ml-[400px] text-3xl font-regular"> alcanzando el 50% del total de atletas. </p>
          <p className="mt-2 ml-[400px] text-sm font-light"> Este logro no solo refleja el crecimiento y la participación <br /> de las mujeres en el deporte, sino que también representa <br /> un compromiso por parte de los organizadores de promover<br />  la igualdad de oportunidades en el ámbito deportivo. </p>
          <p className="mt-2 ml-[400px] text-sm font-light"> Este logro fue celebrado por el Comité Olímpico Internacional <br /> (COI) y se considera uno de los momentos más importantes en <br /> la historia de la mujer en el deporte. </p>
          <Image
            src="/2024.png"
            alt="Olympic Women Participation"
            width={350}
            height={200}
            className="mt-[-420px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalTime;
