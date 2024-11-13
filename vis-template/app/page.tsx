'use client'

import dynamic from 'next/dynamic';
import StickyImage from './sticky';  
import Image from 'next/image';
import { useEffect } from 'react';

const FlourishEmbed = dynamic(() => import('@/app/components/Flourish1'), { ssr: false });
const FlourishEmbed2 = dynamic(() => import('@/app/components/Flourish2'), { ssr: false });

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-element');
      elements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = window.scrollY * parseFloat(speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 bg-white shadow-md">
      <header className="container mx-auto flex items-center p-4 z-40">
        <Image 
          src="/logo_par.svg" 
          alt="Olympic Women Participation"
          width={45}
          height={45}
          className="ml-[-50px]"
        />
        <ul className="flex space-x-8 ml-16">
          <li><a href="app" className="bg-violet-100 hover:bg-violet-300 text-[#5F1BBF] rounded px-2 py-1">Mujeres</a></li>
          <li><a href="historia" className="text-[#5F1BBF] hover:text-violet-700">Historia</a></li>
          <li><a href="medallero" className="text-[#5F1BBF] hover:text-violet-700">Medallero</a></li>
        </ul>
      </header>
      

      {/* Hero Section with Parallax */}
      <section className="relative">
        <div className="parallax scroll-element" data-speed="0.3" style={{ backgroundImage: 'url(/headerJJOO.png)', backgroundSize: 'contain', height: '400px', backgroundAttachment: 'fixed' }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-[#5F1BBF] mt-[700px]">PARTICI[PAR]</h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700">Evolución en la participación femenina en los Juegos Olímpicos.</p>
            <p className="mt-4 text-lg font-thin text-gray-700">¿Sabías que recién en 2024 se alcanzó una participación equilibrada <br /> en los Juegos Olímpicos?</p>
          </div>
        </div>  
      </section>

      
      {/* Historia */}
      <section className="container mx-auto py-24 pt-[700px]">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-[#5F1BBF]">
          ¿Cómo evolucionó la <br /> participación de mujeres?
        </h2>
        <p className="text-center text-lg sm:text-base mb-8 font-thin text-gray-600">
          ¿Sabías que recién en 2012 todos los países presentaron <br /> al menos una mujer en la competencia?
        </p> 
        <div className="flex justify-center mb-8">
          <div className="max-w-4xl w-full">
            <FlourishEmbed />
          </div>
        </div>
        <p className="text-lg mb-4 font-thin text-gray-600 text-center px-6 md:px-32">
          Un viaje a través de los años, una evolución que recién comienza. <br /> <b> 30 ediciones de los Juegos Olímpicos </b> en busca de la igualdad <br /> de oportunidades y participación.
        </p>
        <StickyImage src="/gim.png" alt="Gim"/>
        <div className="flex justify-center">
        <a href="historia"> 
          <button className="bg-[#5F1BBF] hover:bg-violet-300 text-white font-bold py-2 px-4 rounded mt-4">
            Conocé más 
          </button>
          </a>
        </div>
      </section>
    

      {/* Medallero */}
      <section className="container mx-auto py-24">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-6 text-[#5F1BBF]">Medallero olímpico 2024</h2>
        <p className="text-center mb-8 text-gray-600 text-lg font-thin">
          ¿Sabías que recién en 2024 se alcanzó <br /> la equidad de género en la competencia?
        </p>
        <div className="flex justify-center mb-8">
          <div className="max-w-4xl w-full">
            <FlourishEmbed2 />
          </div>
        </div>
        <p className="text-lg font-thin text-gray-600 text-center px-6 md:px-32">
        Miles de mujeres a lo largo del mundo mostrando una vez más lo que son capaces<br />de hacer. <b> Un medallero que conmociona.</b> Grandes atletas batiendo récords <br /> y posicionándose en lo más alto del ranking mundial.
        </p>
        <div className="flex justify-center">
        <a href="medallero"> 
          <button className="bg-[#5F1BBF] hover:bg-violet-300 text-white font-bold py-2 px-4 rounded mt-4">
            Conocé más
          </button>
          </a>
        </div>
      </section>

      {/* Separador */}
      <div className="flex justify-center mt-16">
        <Image 
          src="./separadores-20.svg" 
          alt="Separador"
          width={400}
          height={0}
          className="w-1/2 sm:w-1/4"
        />
      </div>

      {/* Conclusión */}
      <section className="container mx-auto py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#5F1BBF]">PARTICI[PAR]</h2>
        <p className="text-lg text-gray-600 font-thin mt-6">¿Cómo podemos seguir impulsando la participación femenina?</p>
        <p className="text-lg font-thin text-gray-600 px-6 md:px-32 mt-4">
        La historia del deporte está cambiando, y las mujeres están en el centro de esa transformación. <br /> La equidad en los Juegos Olímpicos no es solo un triunfo de cifras, sino una victoria simbólica <br /> en la lucha contra siglos de exclusión. Cada atleta femenina que sube al podio lleva consigo <br /> no solo su esfuerzo personal, sino el peso de <b> generaciones que soñaron con ese momento. </b> <br /> Pero este es solo el comienzo. La igualdad de oportunidades en los deportes debe ir más allá <br /> del número de participantes, se trata de garantizar que todas las niñas, en cualquier rincón del <br /> mundo, vean en el deporte un espacio que también les pertenece. <br /> ¿Estamos listos para seguir rompiendo barreras?
        </p>
        <div className="flex justify-center">
          <button className="bg-[#5F1BBF] hover:bg-violet-300 text-white font-bold py-2 px-4 rounded mt-8">
            Conocé más sobre esta historia
          </button>
        </div>
      </section>

      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto text-center text-gray-600">
          &copy; {new Date().getFullYear()} Participación Olímpica. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
