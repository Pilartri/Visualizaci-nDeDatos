'use client'

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';

interface Athlete {
  name: string;
  sport: string;
  country: string;
  description: string;
  medals: { gold: number; silver: number; bronze: number };
  imageSrc: string;
}

const athletes: Athlete[] = [
  {
    name: 'Simone Biles',
    sport: 'Gimnasia Artística',
    country: 'Estados Unidos',
    description: 'Biles regresó de su pausa y dominó los Juegos Olímpicos, reafirmando su lugar como una de las mejores gimnastas de todos los tiempos. Ganó oro en la competencia general individual, viga de equilibrio y equipo, además de una plata en suelo. Su retorno después de haber tomado tiempo para priorizar su salud mental es ampliamente celebrado',
    medals: { gold: 2, silver: 1, bronze: 1 },
    imageSrc: '/simone.png',
  },
  {
    name: 'Clarisse Agbegnenou',
    sport: 'Judo',
    country: 'Francia',
    description: 'Clarisse Agbegnenou se consolidó como una de las mejores...',
    medals: { gold: 1, silver: 0, bronze: 1 },
    imageSrc: '/clarisse.png',
  },
  // Agrega más atletas según sea necesario.
];

export default function Home() {
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      containerRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight && rect.bottom > 0) {
            ref.classList.add('animate-fadeIn');
          } else {
            ref.classList.remove('animate-fadeIn');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
       <div className="container mx-auto flex items-center p-4 z-40">
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

        <Image
          src="/headerJJOO.png" 
          alt="Olympic Women Participation"
          width={1600}
          height={400}
          layout="responsive" 
          quality={100} 
          className="z-10"
        />

      <header className="text-violet p-4 text-center">
        <h1 className="text-3xl font-bold">TOP MUJERES</h1>
        <p className="text-sm">Destacadas en los Juegos Olímpicos 2024</p>
      </header>


      <main className="p-6 space-y-16">
        {athletes.map((athlete, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) containerRefs.current[index] = el;
            }}
            className="relative text-black p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col md:flex-row items-center md:space-x-4 h-[400px]">
              <div className="w-[800px] h-[260px] ml-[400px]">
                <Image
                  src={athlete.imageSrc}
                  alt={athlete.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-6xl mt-4 font-semibold">{athlete.name}</h2>
                <p className="text-xl mb-2 ">{athlete.sport}</p>
                <p className="text-sm italic ">{athlete.country}</p>
                <p className="mt-2 mr-64 ">{athlete.description}</p>
                <div className="mt-2 flex space-x-2 ">
                  <span className="p-1 rounded-full">{athlete.medals.gold} 🥇</span>
                  <span className="p-1 rounded-full">{athlete.medals.silver} 🥈</span>
                  <span className=" p-1 rounded-full">{athlete.medals.bronze} 🥉</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
  };

