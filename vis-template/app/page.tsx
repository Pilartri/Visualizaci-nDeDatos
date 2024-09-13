'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';

const FlourishEmbed = dynamic(() => import('@/app/components/Flourish1'), { ssr: false });
const FlourishEmbed2 = dynamic(() => import('@/app/components/Flourish2'), { ssr: false });

const HomePage = () => {
  return ( 
    <div className="bg-gray-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center p-8">
        <Image className='ml-[-65px]'
          src="/favicon.png" 
          alt="Olympic Women Participation"
          width={40}
          height={40}
        />
          <ul className="flex space-x-8 ml-16">
            <li>
              <a href="app/page.tsx" className="text-gray-900 hover:text-gray-500">Mujeres</a>
            </li>
            <li>
              <a href="historia/page.tsx" className="text-gray-900 hover:text-gray-500">Historia</a>
            </li>
            <li>
              <a href="evolución/page.tsx" className="text-gray-900 hover:text-gray-500">Medallero</a>
            </li>
          </ul>
        </div>

      {/* Hero Section */}
      <section className="relative max-w-screen-2xl h-[400px]">
        <Image
          src="/mujeres.png" 
          alt="Olympic Women Participation"
          width={2000}
          height={400}
        />
        <div className="absolute inset-0">
          <div className="container mx-auto py-96 ml-96 my-16 p-96">
            <h1 className="text-5xl font-black text-orange-500">PARTICI[PAR]</h1>
            <p className="mt-4 text-lg text-gray-700">
              Evolución en la participación femenina <br /> en los Juegos Olímpicos.
            </p>
            <p className="mt-9 text-lg font-thin text-gray-700">
            ¿Sabías que recién en 2024 se alcanzó <br />una participación equilibrada en los <br />Juegos Olímpicos? 
            </p>
          </div>
        </div>  
      </section>

      <Image className='mt-60 ml-64'
          src="/swim.gif" 
          alt="Olympic Women Participation"
          width={1000}
          height={1000}
        />
        
      {/* historia */}
      <section className="container mx-auto py-24 pt-80 mt-[-320px]">
        
        <h2 className="text-3xl font-black text-center mb-6 my-16 text-orange-500">
          ¿Cómo evolucionó la participación de mujeres?
        </h2>
        <p className="text-center text-lg mb-8 font-thin text-gray-600">
          ¿Sabías que recién en 2012 todos los países <br />  presentaron al menos una mujer en la competencia?
        </p> 
        <div className="flex justify-center mb-8">
        <div className="max-w-4xl w-full ">
        < FlourishEmbed />
        </div>
        </div>
        <p className="text-lg mb-4 font-thin text-gray-600 text-justify px-96">
        Un viaje a través de los años, una evolución que recién comienza. 30 ediciones de los Juegos Olímpicos en busca de la igualdad de oportunidades y participación. Miles de mujeres a lo largo del mundo demostrando su talento y su capacidad. <br />
        30 años más tarde podemos hablar de partici[par] por igual.
        </p>
        <p className="text-lg font-bold text-gray-800 text-justify px-96 hover:text-gray-500">
        Conoce más
        </p>
      </section>

      {/* medallero */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-black text-center mb-6 text-orange-500">Medallero olímpico 2024</h2>
        <p className="text-center mb-8 text-gray-600 text-lg font-thin">
          ¿Sabías que recién en 2024 se alcanzó la equidad de <br /> género en la competencia?
        </p>
        <div className="flex justify-center mb-8">
          
        <div className="max-w-4xl w-full ">
                  < FlourishEmbed2 />

        </div>
        </div>
        <p className="text-lg mb-4 font-thin text-gray-600 text-justify px-96">
        Miles de mujeres a lo largo del mundo mostrando una vez más lo que son capaces de hacer. Un medallero que conmociona. <br />
        Grandes atletas batiendo récords y posicionándose en lo más alto del ranking mundial.
        </p>
     
        <p className="text-lg mb-6 font-bold text-gray-800 text-justify px-96 hover:text-gray-500">
        Conoce más
        </p>
      
      </section>
      <Image className='mt-8 ml-64'
          src="/swim.gif" 
          alt="Olympic Women Participation"
          width={1000}
          height={1000}
        />
{/* conclusión */}
<section className="container mx-auto">
        <h2 className="text-3xl font-black text-center mb-6 text-orange-500">Medallero olímpico 2024</h2>
        <p className="text-center mb-8 text-gray-600 text-lg font-thin">
          ¿Sabías que recién en 2024 se alcanzó la equidad de <br /> género en la competencia?
        </p>
      
        <p className="text-lg mb-4 font-thin text-gray-600 text-justify px-96">
        Miles de mujeres a lo largo del mundo mostrando una vez más lo que son capaces de hacer. Un medallero que conmociona. <br />
        Grandes atletas batiendo récords y posicionándose en lo más alto del ranking mundial.
        </p>
     
        <p className="text-lg mb-20 font-bold text-gray-800 text-justify px-96 hover:text-gray-500">
        Conoce más
        </p>
      
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center text-white">
        </div>
      </footer>
    </div>
  );
};

export default HomePage;