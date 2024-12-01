"use client";
// pages/index.tsx
import Header from "./Header";
import StickyImage from './Sticky';  
import HorizontalTime from "./HorizontalTime";
import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Fijo */}
      <section>
      <Header />
      </section>

  <section className="pt-20">
  <div className="relative w-full">
    <Image
      src="/historias.png"
      alt="Olympic Women Participation"
      layout="responsive"  
      width={1000}
      height={400}
      quality={100}
    />
  </div>
</section>
<StickyImage src="/femenino_JJOO.png" alt="Gim"/>

<h1 className="text-center mt-16 mb-4 text-purple-800 text-5xl font-black"> "LA PROMOCIÓN DEL RESPETO <br /> Y LA IGUALDAD" </h1>
    <h4 className="text-center text-md mb-4"> Carta Olímpica del Comité Olímpico Internacional</h4>

    
      {/* Línea de Tiempo */}
      <HorizontalTime />
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Participación Olímpica. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;
