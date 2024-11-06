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

<h1 className="font-bold text-5xl text-center mt-16"> TOP MUJERES </h1>
    <h4 className="text-center mb-4"> destacadas en los Juegos Olímpicos 2024</h4>
    <h4 className="text-center text-sm font-bold mb-2"> medallas </h4>
    <Image 
          src="/medallasinicio-43.png" 
          alt="Olympic Women Participation"
          width={200}
          height={200}
          className="z-10 ml-[620px]"
        />

      {/* Línea de Tiempo */}
      <HorizontalTime />
    </div>
  );
};

export default Home;
