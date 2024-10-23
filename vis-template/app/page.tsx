'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';

const FlourishEmbed = dynamic(() => import('@/app/components/Flourish1'), { ssr: false });
const FlourishEmbed2 = dynamic(() => import('@/app/components/Flourish2'), { ssr: false });

const HomePage = () => {
  return ( 
    <div className="bg-gray-50 bg-white shadow-md">
        <div className="container mx-auto flex items-center p-4">
        <Image className='ml-[-50px]'
          src="/logo_par.svg" 
          alt="Olympic Women Participation"
          width={45}
          height={45}
        />
          <ul className="flex space-x-8 ml-16">
            <li>
              <a href="app/page.tsx" className="bg-violet-100 hover:bg-violet-300 text-[#5F1BBF] rounded px-2 py-1">Mujeres</a>
            </li>
            <li>
              <a href="historia/page.tsx" className="text-[#5F1BBF] hover:text-[#5F1BBF]">Historia</a>
            </li>
            <li>
              <a href="evolución/page.tsx" className="text-[#5F1BBF] hover:text-[#5F1BBF]">Medallero</a>
            </li>
          </ul>
        </div>

      {/* Hero Section */}
      <section>
        <Image
          src="/headerJJOO.png" 
          alt="Olympic Women Participation"
          width={1600}
          height={400}
          layout="responsive" 
          quality={100} 
        />
        <div className="absolute inset-0">
          <div className="container mx-auto py-[400px] ml-96 my-40 p-96">
            <h1 className="text-5xl font-black text-[#5F1BBF] mt-16">PARTICI[PAR]</h1>
            <p className="mt-4 text-lg text-gray-700">
              Evolución en la participación femenina <br /> en los Juegos Olímpicos.
            </p>
            <p className="mt-9 text-lg font-thin text-gray-700">
            ¿Sabías que recién en 2024 se alcanzó <br />una participación equilibrada en los <br />Juegos Olímpicos? 
            </p>
          </div>
        </div>  
      </section>

      <Image className='mt-[350px] ml-[500px]'
          src="separador.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={0}
          /*layout="responsive" 
          quality={100}*/
        />
        
      {/* historia */}
      <section className="container mx-auto py-24 pt-80 mt-[-320px]">
        
        <h2 className="text-3xl font-black text-center mb-6 my-16 text-[#5F1BBF]">
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
        Un viaje a través de los años, una evolución que recién comienza. 30 ediciones de los Juegos Olímpicos en busca de la igualdad de oportunidades y participación. Miles de mujeres a lo largo del mundo demostrando su talento y su capacidad.
        30 años más tarde podemos hablar de partici[par] por igual.
        </p>
        <button className="bg-[#5F1BBF] hover:bg-violet-300 text-white font-bold py-2 px-4 rounded mt-2 ml-[385px]"
        onClick={() => window.open()}>
       Conocé más 
        </button>
      </section>

      {/* medallero */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-black text-center mb-6 text-[#5F1BBF]">Medallero olímpico 2024</h2>
        <p className="text-center mb-8 text-gray-600 text-lg font-thin">
          ¿Sabías que recién en 2024 se alcanzó la equidad de <br /> género en la competencia?
        </p>
        <div className="flex justify-center mb-8">
          
        <div className="max-w-4xl w-full ">
        < FlourishEmbed2 />

        </div>
        </div>
        <p className="text-lg font-thin text-gray-600 text-justify px-96">
        Miles de mujeres a lo largo del mundo mostrando una vez más lo que son capaces de hacer. Un medallero que conmociona.
        Grandes atletas batiendo récords y posicionándose en lo más alto del ranking mundial.
        </p>
       
        <button className="bg-[#5F1BBF] hover:bg-violet-300 text-white font-bold py-2 px-4 rounded mt-6 ml-[385px]"
        onClick={() => window.open()}>
       Conocé más 
        </button>
      
      </section>
      <Image className='mt-[100px] ml-[500px]'
          src="separador.svg" 
          alt="Olympic Women Participation"
          width={400}
          height={0}
          /*layout="responsive" 
          quality={100}*/
        />
{/* conclusión */}
<section className="container mx-auto mt-[80px]">
        <h2 className="text-5xl font-black text-center mb-6 text-[#5F1BBF]">PARTICI[PAR]</h2>
        <p className="text-center mb-8 text-gray-600 text-lg font-thin">
        ¿Cómo podemos seguir impulsando la participación femenina?
        </p>
      
        <p className="text-lg mb-4 font-thin text-gray-600 text-justify px-96">
        La historia del deporte está cambiando, y las mujeres están en el centro de esa transformación. <br /> La equidad en los Juegos Olímpicos no es solo un triunfo de cifras, sino una victoria simbólica en la lucha contra siglos de exclusión. Cada atleta femenina que sube al podio lleva consigo no solo su esfuerzo personal, sino el peso de <b> generaciones que soñaron con ese momento. </b> <br /> Pero este es solo el comienzo. La igualdad de oportunidades en los deportes debe ir más allá del número de participantes, se trata de garantizar que todas las niñas, en cualquier rincón del mundo, vean en el deporte un espacio que también les pertenece. <b> ¿Estamos listos para seguir rompiendo barreras? </b>
        </p>
     
        <button className="bg-[#5F1BBF] hover:bg-violet-300 text-white font-bold py-2 px-4 rounded mt-8 ml-[500px]"
        onClick={() => window.open()}>
       Conocé más sobre esta historia
        </button>
      
      </section>

      <footer>
        <div>
        <Image className='relative mx-auto mt-16'
          src="/footer.png" 
          alt="Olympic Women Participation"
          height={400}
          width={1600}
          layout="responsive" 
          quality={100} 
        />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;