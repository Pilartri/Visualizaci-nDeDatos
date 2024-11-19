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

          {/* Año 1928 */}
          <div className="w-screen flex-shrink-0 ml-16">
            <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">1928</div>
            <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
              Incluidas por <br /> primera vez <br /> en atletismo
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            Los Juegos Olímpicos de Amsterdam
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            Fueron los primeros en incluir <br /> competencias de atletismo <br /> para mujeres. 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            un deporte históricamente dominado por hombres. Las atletas  compitieron <br /> en disciplinas como los 100 metros y el lanzamiento  de disco.  Sin embargo, <br /> las reacciones a su participación en pruebas  de resistencia reflejaron prejuicios <br /> persistentes sobre la capacidad física femenina.
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
            Creación de la <br /> Comisión de Muejeres <br /> en el Deporte en el COI
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            Los Juegos Olímpicos de Amsterdam
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            Fueron los primeros en incluir <br /> competencias de atletismo <br /> para mujeres. 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            un deporte históricamente dominado por hombres. Las atletas  compitieron <br /> en disciplinas como los 100 metros y el lanzamiento  de disco.  Sin embargo, <br /> las reacciones a su participación en pruebas  de resistencia reflejaron prejuicios <br /> persistentes sobre la capacidad física femenina.
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
           Programa olímpico de <br />mujeres y deporte
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            El COI fortaleció su compromiso con la <br /> equidad de género al establecer el
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            Programa Olímpico de <br /> Mujeres y Deporte 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            cuyo objetivo principal era aumentar la participación femenina <br /> en el ámbito deportivo y proporcionar apoyo integral a las mujeres <br /> en todas las disciplinas. 
            </p>

            <p className="mt-2 text-black text-sm ml-[400px]">
            Esta iniciativa fue una respuesta directa a la subrepresentación  <br /> femenina en los deportes olímpicos y representó un avance hacia la  <br /> creación de un ambiente inclusivo y equitativo en cada nueva edición <br /> de los Juegos Olímpicos.
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
            <p className="mt-2 text-black text-sm ml-[400px]">
            En los Juegos Olímpicos de Atlanta, las mujeres compitieron <br /> en más de 100 eventos, una cifra sin precedentes. Además, el <br /> softbol y el fútbol femenino debutaron como deportes olímpicos, <br /> aumentando la visibilidad de las atletas femeninas y su impacto en <br /> el evento. 
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            Este hito reflejó el compromiso continuo hacia la inclusión <br /> de género, permitiendo que más mujeres compitieran en <br /> disciplinas de equipo y contribuyendo al 
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            reconocimiento global de sus <br /> habilidades y logros en el deporte.
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
            <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">2012 </div>
            <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Todas las delegaciones <br /> nacionales incluyeron <br /> mujeres en sus equipos
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            En los Juegos Olímpicos de Londres, además de 
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            incluir a las mujeres en <br /> todas las delegaciones, 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            se marcó un hito en la historia del deporte al ser la <br /> primera vez en que el boxeo femenino fue reconocido <br /> como disciplina olímpica. 
            </p>

            <p className="mt-2 text-black text-sm ml-[400px]">
            Esto representó un avance significativo en la igualdad de género en <br /> el ámbito deportivo y abrió nuevas oportunidades para que mujeres <br /> de todo el mundo pudieran competir en una disciplina previamente <br /> exclusiva para hombres.
            </p>
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
            <div className="text-purple-800 text-7xl font-extrabold ml-[400px]">2024 </div>
            <p className="mt-2 text-purple-800 text-4xl font-extrabold ml-[400px]">
            Primeros Juegos Olímpicos <br /> en alcanzar una <br /> participación  equitativa 
            </p>
            <p className="mt-2 text-black text-lg ml-[400px]">
            Participaron aproximadamente 5,250 mujeres,
            </p>
            <p className="mt-2 text-black text-3xl ml-[400px]">
            alcanzando el 50% <br /> del total de atletas. 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            Este logro no solo refleja el crecimiento y la participación de <br /> las mujeres en el deporte, sino que también representa un <br /> compromiso por parte de los organizadores de promover la <br /> igualdad de oportunidades en el ámbito deportivo. 
            </p>
            <p className="mt-2 text-black text-sm ml-[400px]">
            Este logro fue celebrado por el Comité Olímpico Internacional <br /> (COI) y se considera uno de los momentos más importantes en la historia de <br /> la mujer en el deporte.
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
    </div>
  );
};

export default HorizontalTime;
