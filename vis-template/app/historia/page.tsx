"use client";
// pages/index.tsx
import Header from "./Header";
import HorizontalTime from "./HorizontalTime";
import Image from "next/image";


const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Fijo */}
      <Header />

  <section className="pt-20">
  <div className="relative w-full">
    <Image
      src="/medalleros.png"
      alt="Olympic Women Participation"
      layout="responsive"  // "responsive" ajusta el tamaño a las pantallas
      width={1000}
      height={400}
      quality={100}
    />
  </div>
</section>

<h1 className="font-bold text-3xl text-center mt-16 mb-8"> "La promoción del respsto <br /> y la igualdad" </h1>
    <h4 className="text-center text-sm mb-4"> -Carta Olímpica del Comité Olímpico Internacional</h4>

      {/* Línea de Tiempo */}
      <HorizontalTime />
    </div>
  );
};

export default Home;
